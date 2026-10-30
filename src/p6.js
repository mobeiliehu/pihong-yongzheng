/* ============================================================
   游戏逻辑 v2
   —— 密折「阅 / 不阅」信息差：阅之则解锁「知情方略」选项；不阅而选，
      若该选项标 blindRisk，则事后追悔（误判）。
   —— 支线事件：奏折之间可触发天灾 / 言官 / 宗室 / 边事 / 民生事件。
   —— 多结局：依改革、国力、皇权、严刻、宽仁、吏治、权臣等综合判定。
   ============================================================ */
const YEAR_NAMES = ['元年','二年','三年','四年','五年','六年','七年','八年','九年','十年','十一年','十二年','十三年'];

const INITIAL_OFFICIALS = {
    zhangTingyu: 80, tianWenjing: 70, yunxiang: 60, longkodo: 40,
    nianGengyao: 50, yinsi: -50, eertai: 40, liwei: 30
};

const gameState = {
    index: 0,
    year: 1723, month: 8,
    treasury: 800, publicSupport: 60, officialMorale: 50,
    imperialPower: 50, militaryStrength: 55,
    secretMemorials: 0,   // 已阅密折
    mizeSkipped: 0,       // 封还不阅
    mistakes: 0,          // 事后追悔
    eventCount: 0,
    reforms: { huohao: 0, tandin: 0, tuigu: 0 },
    meter: { severity: 45, mercy: 50, integrity: 40, resentment: 40, insight: 20, suspicion: 30 },
    officials: Object.assign({}, INITIAL_OFFICIALS),
    mizeState: {},        // 奏折序号 -> 'read' | 'skipped'
    log: [],
    queue: []             // 待处理事件
};

const LIMITS = {
    treasury: [0, 3000],
    publicSupport: [0, 100],
    officialMorale: [0, 100],
    imperialPower: [0, 100],
    militaryStrength: [0, 100],
    severity: [0, 100],
    mercy: [0, 100],
    integrity: [0, 100],
    resentment: [0, 100],
    insight: [0, 100],
    suspicion: [0, 100]
};

function clamp(key, v) {
    const lim = LIMITS[key];
    if (!lim) return v;
    return Math.max(lim[0], Math.min(lim[1], v));
}
function clampRaw(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function yearLabel(y) {
    const idx = y - 1723;
    return '雍正' + (YEAR_NAMES[idx] || (idx + 1) + '年') + '（' + y + '）';
}

/* ---------- 启动 ---------- */
function startGame() {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('container').style.display = 'block';
    updateAll();
    showMemorial();
}

function updateAll() {
    updateYear(); updateStats(); updateReforms(); updatePeople(); updateHeart();
    updateProgress(); updateWarning();
}
function updateYear() { document.getElementById('yearDisplay').textContent = yearLabel(gameState.year); }

function updateProgress() {
    const total = gameData.length;
    const done = gameState.index;
    document.getElementById('progressFill').style.width = (total ? done / total * 100 : 0) + '%';
    document.getElementById('progressLabel').textContent =
        '第 ' + Math.min(done + 1, total) + ' / ' + total + ' 折　·　阅密折 ' + gameState.secretMemorials +
        '　·　支线 ' + gameState.eventCount + ' 事';
}

function updateStats() {
    const stats = [
        { label: '国库', value: Math.round(gameState.treasury) + '万两', max: 3000, current: gameState.treasury },
        { label: '民心', value: gameState.publicSupport, max: 100, current: gameState.publicSupport },
        { label: '官风', value: gameState.officialMorale, max: 100, current: gameState.officialMorale },
        { label: '皇权', value: gameState.imperialPower, max: 100, current: gameState.imperialPower },
        { label: '军力', value: gameState.militaryStrength, max: 100, current: gameState.militaryStrength },
        { label: '密折', value: '阅 ' + gameState.secretMemorials + ' · 封 ' + gameState.mizeSkipped, max: 50, current: gameState.secretMemorials, plain: true }
    ];
    document.getElementById('statsPanel').innerHTML = stats.map(s => {
        const w = s.plain ? 0 : Math.max(0, Math.min(100, (s.current / s.max) * 100));
        const danger = !s.plain && (s.current <= 20);
        return '<div class="stat-card' + (danger ? ' danger' : '') + '">' +
            '<div class="stat-label">' + s.label + '</div>' +
            '<div class="stat-value">' + s.value + '</div>' +
            '<div class="stat-bar"><div class="stat-bar-fill" style="width:' + w + '%"></div></div>' +
        '</div>';
    }).join('');
}

const REFORM_META = [
    { key: 'huohao', name: '火耗归公' },
    { key: 'tandin', name: '摊丁入亩' },
    { key: 'tuigu',   name: '改土归流' }
];
const METER_META = [
    { key: 'integrity',  name: '吏治清' },
    { key: 'resentment', name: '民 怨' }
];
const HEART_META = [
    { key: 'insight',    name: '明 察', note: '阅密折则明，不阅则闇；明察 ≥40 则新政之效加三成，≥70 加五成' },
    { key: 'suspicion', name: '猜 忌', note: '密报日多则疑心日重；猜忌耗官风、离心忠臣，≥60 则明察日减' }
];

function updateReforms() {
    document.getElementById('reformPanel').innerHTML = REFORM_META.map(r =>
        '<div class="reform-row"><div class="reform-name">' + r.name + '</div>' +
        '<div class="reform-track"><div class="reform-fill" style="width:' + gameState.reforms[r.key] + '%"></div></div>' +
        '<div class="reform-num">' + gameState.reforms[r.key] + '%</div></div>').join('');
    const style = gameState.meter.severity - gameState.meter.mercy;
    const half = Math.min(50, Math.abs(style) / 2);
    const left = style >= 0 ? 50 : 50 - half;
    const axisRow =
        '<div class="reform-row"><div class="reform-name">取 向</div>' +
        '<div class="reform-track axis"><div class="axis-mid"></div>' +
        '<div class="reform-fill axisfill ' + (style >= 0 ? 'sev' : 'mer') + '" style="left:' + left + '%;width:' + half + '%"></div></div>' +
        '<div class="reform-num">' + (style > 0 ? '偏严' : style < 0 ? '偏宽' : '持平') + '</div></div>';
    document.getElementById('meterPanel').innerHTML = axisRow + METER_META.map(r =>
        '<div class="reform-row"><div class="reform-name">' + r.name + '</div>' +
        '<div class="reform-track"><div class="reform-fill alt" style="width:' + gameState.meter[r.key] + '%"></div></div>' +
        '<div class="reform-num">' + gameState.meter[r.key] + '</div></div>').join('');
}

function updateHeart() {
    const box = document.getElementById('heartPanel');
    if (!box) return;
    box.innerHTML = HEART_META.map(r =>
        '<div class="reform-row"><div class="reform-name">' + r.name + '</div>' +
        '<div class="reform-track"><div class="reform-fill alt" style="width:' + gameState.meter[r.key] + '%"></div></div>' +
        '<div class="reform-num">' + gameState.meter[r.key] + '</div></div>' +
        '<div class="heart-note">' + r.note + '</div>').join('');
}

function updatePeople() {
    document.getElementById('peoplePanel').innerHTML = OFFICIALS.map(o => {
        const v = gameState.officials[o.key] || 0;
        const w = Math.abs(v) / 2, pos = v >= 0;
        const left = pos ? 50 : 50 - w;
        return '<div class="person"><div class="person-name">' + o.name + '</div>' +
            '<div class="person-track"><div class="person-fill ' + (pos ? 'pos' : 'neg') + '" style="left:' + left + '%;width:' + w + '%"></div></div>' +
            '<div class="person-val' + (pos ? '' : ' neg') + '">' + (v > 0 ? '+' : '') + v + '</div></div>';
    }).join('');
}

function updateWarning() {
    const msgs = [];
    if (gameState.treasury < 100) msgs.push('国库将竭，赏罚无所出，官必有怨。');
    if (gameState.publicSupport < 20) msgs.push('民心已失，号令不出于州县。');
    if (gameState.imperialPower < 25) msgs.push('皇权削弱，宗室与外臣皆轻朝廷。');
    if (gameState.militaryStrength < 25) msgs.push('边备空虚，藩篱可虞。');
    if (gameState.meter.severity >= 75) msgs.push('峻法过甚，吏胥转相为恶，苛政之名将及朕身。');
    if (gameState.meter.mercy >= 80) msgs.push('宽而无断，政事日弛，弊政因循。');
    if (gameState.meter.resentment >= 70) msgs.push('民怨沸腾，苛政之名将及朕身。');
    if (gameState.meter.suspicion >= 70) msgs.push('密报日多，疑心日重；臣下人人自危，忠言亦不敢尽。');
    if (gameState.meter.insight < 18) msgs.push('久不阅密折，朕于外事竟不之知，全凭他人之口。');
    const wb = document.getElementById('warningBox');
    if (!wb) return;
    wb.innerHTML = msgs.map(m => '<div class="warn show">' + m + '</div>').join('');
}

/* ---------- 奏折 ---------- */
function visibleOptions(m, idx) {
    const st = gameState.mizeState[idx];
    return m.options.filter(o => !o.needMize || st === 'read');
}

function showMemorial() {
    const box = document.getElementById('memorialContainer');
    if (gameState.index >= gameData.length) { endGame(); return; }
    const idx = gameState.index;
    const m = gameData[idx];
    gameState.year = m.year; gameState.month = m.month;
    updateYear();

    const st = gameState.mizeState[idx];
    let mizeHtml = '';
    if (m.mize) {
        if (!st) {
            const ins = gameState.meter.insight, sus = gameState.meter.suspicion;
            const over = Math.max(0, sus - 50);
            mizeHtml =
                '<div class="mize-choice">' +
                    '<div class="mize-choice-text">此折另有关键之处。<b>查阅密折</b>则隐情得明、解锁「知情方略」，然密报日多则疑心日重；' +
                    '<b>封还不阅</b>则所见止于表面，然不疑人则不伤忠直。密折之代价，明列如下：</div>' +
                    '<div class="mize-cost-table">' +
                        '<div class="mct-row mct-head"><span>抉择</span><span>明察</span><span>猜忌</span><span>其余影响</span></div>' +
                        '<div class="mct-row"><span class="mct-k">查阅密折</span>' +
                            '<span class="mct-up">+3</span><span class="mct-up">+3</span>' +
                            '<span class="mct-d">解锁「知情方略」选项；' +
                            (ins >= 70 ? '明察既高，所行新政之效加五成。' : ins >= 40 ? '明察既高，所行新政之效加三成。' : '明察若至 40，所行新政之效加三成，至 70 加五成。') +
                            (over > 0
                                ? '猜忌过五十，每作一策耗官风 <b>' + (over * 0.25).toFixed(1) + '</b>，' +
                                  '忠臣（张廷玉、怡亲王、鄂尔泰、李卫、田文镜）之心各耗 <b>' + (over * 0.12).toFixed(1) + '</b>，' +
                                  '允禩、年羹尧、隆科多各得 <b>' + (over * 0.08).toFixed(1) + '</b>；'
                                : '猜忌尚在五十以内，暂不损官风；') +
                            (sus >= 55 ? '<b class="warntxt">猜忌已 ≥60，此后每策明察再减 ' + Math.ceil((sus - 55) / 10) + '</b>。' : '猜忌若升至 60，此后每策明察再减 1。') +
                            '</span></div>' +
                        '<div class="mct-row"><span class="mct-k">封还不阅</span>' +
                            '<span class="mct-down">−1</span><span class="mct-down">−2</span>' +
                            '<span class="mct-d">不得见「知情方略」；' +
                            (ins >= 40 ? '新政之效加三成/五成之利亦失。' : '明察不足 40，新政不得加成。') +
                            (ins < 25 ? '<b class="warntxt">明察已不足 25，事后追悔加罚（皇权 −5、官风 −5）</b>。' : '若事后追悔，罚为皇权 −3、官风 −3。') +
                            '封还累计 ' + gameState.mizeSkipped + ' 封。</span></div>' +
                    '</div>' +
                    '<div class="mize-choice-btns">' +
                        '<button class="reveal-btn" onclick="readMize()">查 阅 密 折<em>明察 +3 · 猜忌 +3</em></button>' +
                        '<button class="skip-btn" onclick="skipMize()">封 还 不 阅<em>明察 −1 · 猜忌 −2</em></button>' +
                    '</div>' +
                    '<div class="mize-current">当前：明察 <b>' + ins + '</b> · 猜忌 <b>' + sus + '</b>　|　已阅 ' + gameState.secretMemorials + ' 封 · 已封还 ' + gameState.mizeSkipped + ' 封</div>' +
                '</div>';
        } else if (st === 'read') {
            mizeHtml = '<div class="mize revealed"><div class="mize-label">【密折】</div><div class="mize-text">' + m.mize + '</div>' +
                    '<div class="mize-cost">明察 ' + gameState.meter.insight + ' · 猜忌 ' + gameState.meter.suspicion + '</div></div>';
        } else {
            mizeHtml = '<div class="mize sealed"><div class="mize-label">【密折】</div><div class="mize-text">此折已封还，朕竟未之阅，其中隐情未知也。</div>' +
                    '<div class="mize-cost">明察 ' + gameState.meter.insight + ' · 猜忌 ' + gameState.meter.suspicion + '</div></div>';
        }
    }

    const opts = visibleOptions(m, idx);
    const optHtml = opts.map((o, i) =>
        '<button class="option-btn" onclick="selectOption(' + i + ')">' +
            '<div class="option-label">' + (i + 1) + '. ' + o.label + '</div>' +
            (o.hint ? '<div class="option-hint">※ ' + o.hint + '</div>' : '') +
            (o.needMize ? '<div class="option-tag">因阅密折而知其详</div>' : '') +
        '</button>').join('');

    box.innerHTML =
        '<div class="memorial-card">' +
            '<div class="memorial-meta">' +
                '<div class="memorial-from">' + m.from + '</div>' +
                '<div class="memorial-date">' + yearLabel(m.year) + ' ' + m.month + '月</div>' +
            '</div>' +
            '<div class="memorial-title">' + m.title + '</div>' +
            '<div class="memorial-summary">' + m.summary + '</div>' +
            '<div class="memorial-body">' + m.body + '</div>' +
            '<div class="zhupi"><div class="zhupi-label">【硃批】</div><div class="zhupi-text">' + m.zhupi + '</div></div>' +
            mizeHtml +
            '<div class="options">' + optHtml + '</div>' +
        '</div>';
    if (gameState.index > 0) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function readMize() {
    const idx = gameState.index;
    if (gameState.mizeState[idx]) return;
    gameState.mizeState[idx] = 'read';
    gameState.secretMemorials++;
    gameState.meter.insight = clamp('insight', gameState.meter.insight + 3);
    gameState.meter.suspicion = clamp('suspicion', gameState.meter.suspicion + 3);
    addLog(gameData[idx].year, gameData[idx].month, '查阅密折：明察 +3，猜忌 +3。');
    updateStats(); updateProgress(); updateHeart();
    showMemorial();
}

function skipMize() {
    const idx = gameState.index;
    if (gameState.mizeState[idx]) return;
    gameState.mizeState[idx] = 'skipped';
    gameState.mizeSkipped++;
    gameState.meter.insight = clamp('insight', gameState.meter.insight - 1);
    gameState.meter.suspicion = clamp('suspicion', gameState.meter.suspicion - 2);
    addLog(gameData[idx].year, gameData[idx].month, '封还不阅：明察 −1，猜忌 −2。');
    updateStats(); updateProgress(); updateHeart();
    showMemorial();
}

function selectOption(i) {
    const idx = gameState.index;
    const m = gameData[idx];
    const opts = visibleOptions(m, idx);
    const opt = opts[i];
    if (!opt) return;

    applyEffects(opt.effects);
    addLog(m.year, m.month, opt.log);

    // 信息差惩罚：未阅密折而选此策，事后追悔
    if (opt.blindRisk && gameState.mizeState[idx] !== 'read') {
        gameState.mistakes++;
        const blind = gameState.meter.insight < 25;
        const pen = blind ? { imperialPower: -5, officialMorale: -5 } : { imperialPower: -3, officialMorale: -3 };
        applyPenalty(pen);
        addLog(m.year, m.month, blind
            ? '事后始知其中另有隐情；朕久不阅密折，闇于外事，虽悔亦晚，自认受蔽。'
            : '事后始知其中另有隐情，朕自认受蔽，悔之。');
    }

    gameState.index++;
    updateAll();
    afterMemorial(idx);
}

function applyPenalty(obj) {
    for (const key in obj) {
        const val = obj[key];
        if (key === 'treasury') gameState.treasury = Math.max(0, Math.min(3000, gameState.treasury + val));
        else gameState[key] = clamp(key, (gameState[key] || 0) + val);
    }
}

function applyEffects(effects) {
    const sev0 = gameState.meter.severity, mer0 = gameState.meter.mercy;
    const insNow = gameState.meter.insight;
    const reformMult = insNow >= 70 ? 1.5 : insNow >= 40 ? 1.3 : 1.0;   // 明察加成：所行新政之效
    for (const key in effects) {
        let val = effects[key];
        if (key.startsWith('reforms.') && val > 0) val = Math.round(val * reformMult);
        if (key.startsWith('officials.')) {
            const n = key.split('.')[1];
            gameState.officials[n] = clampRaw((gameState.officials[n] || 0) + val, -100, 100);
        } else if (key.startsWith('reforms.')) {
            const n = key.split('.')[1];
            gameState.reforms[n] = clampRaw((gameState.reforms[n] || 0) + val, 0, 100);
        } else if (key === 'severity' || key === 'mercy' || key === 'integrity' || key === 'resentment') {
            gameState.meter[key] = clamp(key, (gameState.meter[key] || 0) + val);
        } else if (LIMITS[key]) {
            gameState[key] = clamp(key, (gameState[key] || 0) + val);
        } else if (key === 'secretMemorials') {
            gameState.secretMemorials = Math.max(0, gameState.secretMemorials + val);
        }
    }
    // 民怨自动派生：峻法则怨，怀柔则怨消
    // —— 圣心二端的派生 ——
    const ins = gameState.meter.insight, sus = gameState.meter.suspicion;
    if (ins >= 40) gameState.meter.integrity = clamp('integrity', gameState.meter.integrity + Math.floor(ins / 40));
    const over = Math.max(0, sus - 50);          // 猜忌之害，过五十而渐显
    if (over > 0) {
        gameState.officialMorale = clamp('officialMorale', gameState.officialMorale - over * 0.25);
        ['zhangTingyu', 'yunxiang', 'eertai', 'liwei', 'tianWenjing'].forEach(k =>
            gameState.officials[k] = clampRaw((gameState.officials[k] || 0) - over * 0.12, -100, 100));
        ['yinsi', 'nianGengyao', 'longkodo'].forEach(k =>
            gameState.officials[k] = clampRaw((gameState.officials[k] || 0) + over * 0.08, -100, 100));
    }
    const dSus = 0.4 * (gameState.meter.severity - sev0) - 0.4 * (gameState.meter.mercy - mer0);
    gameState.meter.suspicion = clamp('suspicion', gameState.meter.suspicion + dSus);
    if (gameState.meter.suspicion >= 60) {
        gameState.meter.insight = clamp('insight', gameState.meter.insight - Math.ceil((gameState.meter.suspicion - 60) / 10));
    }

    const dRes = 0.5 * (gameState.meter.severity - sev0) - 0.5 * (gameState.meter.mercy - mer0);
    gameState.meter.resentment = clamp('resentment', gameState.meter.resentment + dRes);
}

function addLog(y, mo, msg) {
    gameState.log.unshift({ y: y, m: mo, msg: msg });
    if (gameState.log.length > 50) gameState.log.pop();
    const list = document.getElementById('logList');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = '<span class="log-time">' + y + '年' + mo + '月</span>' + msg;
    list.insertBefore(entry, list.firstChild);
    while (list.children.length > 50) list.removeChild(list.lastChild);
}

/* ---------- 支线事件 ---------- */
let randomPool = [];

function afterMemorial(doneIdx) {
    const curated = SCHEDULED[doneIdx];
    if (curated) {
        curated.forEach(e => gameState.queue.push(e));
    } else if (Math.random() < 0.26) {
        if (!randomPool.length) randomPool = RANDOM_EVENTS.slice();
        const pick = randomPool.splice(Math.floor(Math.random() * randomPool.length), 1)[0];
        const ev = JSON.parse(JSON.stringify(pick));
        ev.year = gameState.year; ev.month = gameState.month;
        gameState.queue.push(ev);
    }
    processQueue();
}

function processQueue() {
    if (gameState.queue.length) {
        showEvent(gameState.queue.shift());
        return;
    }
    showMemorial();
}

function showEvent(ev) {
    const box = document.getElementById('memorialContainer');
    gameState.currentEvent = ev;
    gameState.year = ev.year; gameState.month = ev.month;
    updateYear();

    const opts = ev.options.map((o, i) =>
        '<button class="option-btn" onclick="selectEventOption(' + i + ')">' +
            '<div class="option-label">' + (i + 1) + '. ' + o.label + '</div>' +
            (o.hint ? '<div class="option-hint">※ ' + o.hint + '</div>' : '') +
        '</button>').join('');

    box.innerHTML =
        '<div class="event-card" data-tag="' + ev.tag + '">' +
            '<div class="event-ribbon">' + (ev.tagName || '邸报') + '</div>' +
            '<div class="memorial-meta">' +
                '<div class="memorial-from">' + ev.from + '</div>' +
                '<div class="memorial-date">' + yearLabel(ev.year) + ' ' + ev.month + '月</div>' +
            '</div>' +
            '<div class="memorial-title">' + ev.title + '</div>' +
            '<div class="memorial-summary">' + ev.summary + '</div>' +
            '<div class="memorial-body">' + ev.body + '</div>' +
            '<div class="options">' + opts + '</div>' +
        '</div>';
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function selectEventOption(i) {
    const ev = gameState.currentEvent;
    const opt = ev.options[i];
    if (!opt) return;
    applyEffects(opt.effects);
    addLog(ev.year, ev.month, opt.log);
    gameState.eventCount++;
    updateAll();
    processQueue();
}

/* ---------- 结局 ---------- */
function endGame() {
    const r = gameState.reforms;
    const m = gameState.meter;
    const o = gameState.officials;
    const reformAvg = (r.huohao + r.tandin + r.tuigu) / 3;
    const stateAvg = (gameState.imperialPower + gameState.publicSupport + gameState.officialMorale + gameState.militaryStrength) / 4;
    const oAvg = (o.zhangTingyu + o.tianWenjing + o.yunxiang + o.eertai + o.liwei) / 5;
    const style = m.severity - m.mercy;   // 正=偏严刻，负=偏宽仁

    let rank, title, body;
    if (gameState.imperialPower < 26 || gameState.publicSupport < 20 || gameState.treasury <= 0) {
        rank = '社稷危局';
        title = '十三年而国势日蹙';
        body = '朕初以锐意立法，非求苛急也。乃 decrees 日多，闾里苦之；帑藏不给，边军枵虚；宗室离心，士林侧目。' +
               '十三年中，朕每下一诏，吏益苛而民益怨；每用一人，恩一失而疑四起。' +
               '此非一人之过，乃朕之过也。社稷之危，不在今日，在朕之不能知人、不能惜民、不能自抑。';
    } else if (m.suspicion >= 75 && gameState.officialMorale <= 70) {
        rank = '多疑之君';
        title = '信密报而疑天下';
        body = '朕之治，始于密折，终于密折。' +
               '初时一二密报，朕以为得其真；继则十数密报，朕以为尽得其真。' +
               '于是廷议不敢尽言，外奏不敢尽实，惟密报是听。' +
               '及乎邸递日繁，朕之神明反为所困：疑臣之忠，疑民之怨，疑左右之不尽己意。' +
               '朕自以为察于隐微，而不知察者已为谗所蔽。此非臣之罪，朕自取之。';
    } else if (gameState.mizeSkipped >= 24 && m.insight <= 30 && reformAvg < 70) {
        rank = '闭目之君';
        title = '不欲闻，故不欲知';
        body = '密折者，朕之所以通下情也。朕既不阅，则下情不通；下情不通，则朕之所知皆由他人之口。' +
               '是以奸狡者得以饰过，忠直者无从自明，朕所行者不过因循故事而已。' +
               '十三年间，天下事有进有退，而进者未必出于朕，退者亦不能诿于朕。' +
               '非不欲治也，乃不欲闻而已。不闻则不察，不察则不悟，此朕之蔽也。';
    } else if (o.nianGengyao >= 62 && gameState.imperialPower < 52) {
        rank = '权臣之祸';
        title = '威福自上，纲纪自下';
        body = '朕之过不在用年羹尧，而在信之太深、防之太疏。' +
               '其奏事「便宜」，朕不之疑；其僭越逾制，朕不之问。既受其功，遂并受其骄；既与其权，遂失其权。' +
               '朝廷之法坏，非一朝一夕之故，而朕实启之。' +
               '后之人若以朕为鉴，则朕之罪可少；若以朕为法，则天下之害更深。';
    } else if (style >= 25 && m.integrity >= 55 && m.resentment >= 50) {
        rank = '酷吏之治';
        title = '法严于上，怨结于下';
        body = '朕于吏治，志在澄清，不惜重法。田文镜、朱轼、李卫、鄂尔泰之徒，皆以严刻见长。' +
               '一时仓储稍实、积逋稍清，而天下已有「雍正刻」之名。' +
               '吏民相仇，案件日繁，虽有清吏数十，亦不能救其末。' +
               '此非治世之法，乃乱世之法：以苛察为明，以民力为财，以怨为力。朕不自知其蔽，臣工亦不敢言。';
    } else if (style <= -25 && reformAvg < 52 && m.resentment <= 28 && gameState.publicSupport >= 60) {
        rank = '宽仁之君';
        title = '恩洽于民，而功阙于世';
        body = '朕于天下，常存仁恕之心：宽赋、缓征、赈灾、怜民，十三年中未尝一日忘之。' +
               '故士民怀之，谓之「雍正是好」。' +
               '然新政未竟：火耗归公仅行于数省，摊丁入亩未及天下，改土归流犹有待于来日。' +
               '宽而无断，则积弊如故。朕不以刻为明，终亦不能以宽为治。此朕之憾。';
    } else if (reformAvg >= 68 && stateAvg >= 68 && gameState.imperialPower >= 72 && m.insight >= 40 && m.suspicion <= 60) {
        rank = '千古一帝';
        title = '十三年励精图治，功在社稷';
        body = '十三年中，朕未尝一日敢懈。火耗归公，则吏有廉俸而民无加派；摊丁入亩，则无丁之民免其役；改土归流，则苗疆百年之害一旦而解。' +
               '用年羹尧而知其骄，用鄂尔泰而知其强，用隆科多而知其贪，用怡亲王而知其忠。赏罚不爽，纲纪肃然。' +
               '虽年羹尧骄而自戕，隆科多贪而自败，宗室怨朕刻，而天下后世知朕之刻，正为救天下。' +
               '密折不厌其多，而朕不以密折为独听之资；知其可用，而更知其可疑，此明察之所以为明察也。' +
               '此十三年者，政在勤民，权在朕躬，纵有身后毁誉，朕不恤也。';
    } else if (reformAvg >= 52 && stateAvg >= 58) {
        rank = '有为之君';
        title = '守成有余，革新稍滞';
        body = '十三年中，朕所行者三：清吏治、开言路、兴水利。火耗归公渐次推行，摊丁入亩各省不一，改土归流已成规模。' +
               '然所憾者：新政多出严刻，而宽大之量不足；有司奉行者半，惟上之意是听。' +
               '所幸皇权已固，纲纪未弛。乾隆继之，或可补吾之未竟。';
    } else if (reformAvg >= 32 && stateAvg >= 45) {
        rank = '守成之君';
        title = '危机四伏，勉力支撑';
        body = '朕尝求治太急，用人太杂，恩威之间失其平。十三年中，官司不清则民怨，赏罚不当则官怨。' +
               '火耗归公者半途而废，摊丁入亩者仅及数省，改土归流者亦未尽。' +
               '所幸社稷无恙，宗庙不倾。身后之责，付之子孙。';
    } else {
        rank = '平庸之主';
        title = '十三年功业，付之一空';
        body = '朕以少年继位，志大而才疏，求治而不恤人情。密折既行，廷寄既设，而天下离心。' +
               '年羹尧骄而不可制，隆科多贪而不可制，宗室怨而不可制。' +
               '新政半途而废，吏治益坏，民生益困。此十三年，朕之过也。';
    }

    const fates = buildFates(o);

    document.getElementById('memorialContainer').innerHTML =
        '<div class="ending-card">' +
            '<h2>雍正十三年 · 驾崩</h2>' +
            '<div class="ending-rank">' + rank + ' · ' + title + '</div>' +
            '<div class="ending-body">' + body + '</div>' +
            '<div class="score-grid">' +
                scoreBox('改革总评', Math.round(reformAvg) + '%') +
                scoreBox('综合国力', Math.round(stateAvg) + '分') +
                scoreBox('火耗归公', r.huohao + '%') +
                scoreBox('摊丁入亩', r.tandin + '%') +
                scoreBox('改土归流', r.tuigu + '%') +
                scoreBox('国库存银', Math.round(gameState.treasury) + '万两') +
                scoreBox('严刻 / 宽仁', m.severity + ' / ' + m.mercy) +
                scoreBox('取向（严−宽）', (style > 0 ? '偏严 ' : '偏宽 ') + style) +
                scoreBox('吏治清度', m.integrity) +
                scoreBox('民怨', m.resentment) +
                scoreBox('明察', m.insight) +
                scoreBox('猜忌', m.suspicion) +
            '</div>' +
            '<div class="score-grid">' +
                scoreBox('阅密折', gameState.secretMemorials + ' 封') +
                scoreBox('封还不阅', gameState.mizeSkipped + ' 封') +
                scoreBox('事后追悔', gameState.mistakes + ' 次') +
                scoreBox('支线事件', gameState.eventCount + ' 事') +
                scoreBox('奏折阅毕', gameData.length + ' 折') +
                scoreBox('百官归心', Math.round(oAvg)) +
            '</div>' +
            '<div class="fates"><h4>人 事 终 局</h4>' +
                fates.map(f => '<div class="fate-line"><div class="fate-who">' + f.who + '</div><div class="fate-what">' + f.what + '</div></div>').join('') +
            '</div>' +
            '<div class="ending-actions"><button onclick="restartGame()">重 开 天 命</button></div>' +
        '</div>';
    document.getElementById('progressFill').style.width = '100%';
    document.getElementById('progressLabel').textContent = '十三载已终 · ' + gameData.length + ' 折阅毕';
}

function scoreBox(k, v) {
    return '<div class="score-box"><div class="k">' + k + '</div><div class="v">' + v + '</div></div>';
}

function buildFates(o) {
    const out = [];
    out.push({ who: '怡亲王允祥', what: o.yunxiang >= 60
        ? '鞠躬尽瘁，为皇上最心腹之臣。雍正八年薨，年仅四十四，皇上辍朝三日，终身悼之。'
        : '为皇上总理事务多年，积劳成疾。雍正八年薨，年仅四十四。' });
    out.push({ who: '张廷玉', what: o.zhangTingyu >= 70
        ? '始终倚为股肱，谨慎廉洁。乾隆时以大学士主持朝政，至乾隆四年方以年老致仕，十年而卒。'
        : '晚年办事渐形倚重，乾隆时罢黜，居家以终。' });
    out.push({ who: '田文镜', what: o.tianWenjing >= 60
        ? '清峻刻核，推行火耗归公最有功。雍正十三年五月病卒于河南任所，家无余财。'
        : '以严刻得怨，雍正十三年病卒河南，士论毁誉参半。' });
    out.push({ who: '鄂尔泰', what: o.eertai >= 60
        ? '经理西南，改土归流之功，亘古未有。雍正十三年三月病卒，年六十八，雍正为之震悼。'
        : '雍正十三年三月病卒于任，年六十八。所行苗政，后世毁誉不一。' });
    out.push({ who: '年羹尧', what: o.nianGengyao >= 55
        ? '受赏封爵，望无两。然骄盈不改，雍正三年以数十款罪状赐死于历城狱中。朕之识人，止于此耳。'
        : (o.nianGengyao <= -45
            ? '雍正二年即被夺爵下狱，逾年赐死。朕用之而不疑其骄，终至如此。'
            : '雍正二年夺爵，圈禁逾年而卒，籍没家产。') });
    out.push({ who: '隆科多', what: o.longkodo <= -45
        ? '雍正元年十二月圈禁，翌年五月死于狱中，家产尽入官。其党俱坐。'
        : '雍正元年以罪圈禁，雍正二年五月卒，年五十一。' });
    out.push({ who: '允禩', what: o.yinsi <= -40
        ? '雍正四年削爵，改名阿其那，圈禁宗人府，逾年死于幽禁。朕之宗室政策自此严矣。'
        : '雍正四年削爵禁锢，终身不复出。' });
    out.push({ who: '李卫', what: o.liwei >= 55
        ? '历官浙、闽、云、陕，办事干练。雍正十三年十一月卒，年六十一。'
        : '雍正十三年卒。历任虽多，时人亦以其刻而毁之。' });
    return out;
}

function restartGame() {
    gameState.index = 0;
    gameState.year = 1723; gameState.month = 8;
    gameState.treasury = 800; gameState.publicSupport = 60; gameState.officialMorale = 50;
    gameState.imperialPower = 50; gameState.militaryStrength = 55;
    gameState.secretMemorials = 0; gameState.mizeSkipped = 0; gameState.mistakes = 0;
    gameState.eventCount = 0;
    gameState.reforms = { huohao: 0, tandin: 0, tuigu: 0 };
    gameState.meter = { severity: 45, mercy: 50, integrity: 40, resentment: 40 };
    gameState.officials = Object.assign({}, INITIAL_OFFICIALS);
    gameState.mizeState = {};
    gameState.log = [];
    gameState.queue = [];
    randomPool = [];
    document.getElementById('logList').innerHTML = '';
    updateAll();
    showMemorial();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 键盘 ---------- */
document.addEventListener('keydown', function (e) {
    if (gameState.index >= gameData.length) return;
    if (e.key === 'm' || e.key === 'M') {
        const idx = gameState.index;
        if (gameData[idx] && gameData[idx].mize && !gameState.mizeState[idx]) { readMize(); return; }
    }
    if (e.key === '1' || e.key === '2' || e.key === '3') {
        const i = parseInt(e.key, 10) - 1;
        const m = gameData[gameState.index];
        if (m && visibleOptions(m, gameState.index)[i]) selectOption(i);
    }
});

document.getElementById('startBtn').addEventListener('click', startGame);
