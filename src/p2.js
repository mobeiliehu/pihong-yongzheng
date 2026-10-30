/* ============================================================
   《批红 · 雍正十三年》游戏数据（一）雍正元年 — 雍正四年
   新增效果键：
     severity  严刻度（峻法、株连、重典）  初始 45
     mercy     宽仁度（宽赋、赦免、恤民）  初始 50
     integrity 吏治清度（清查、追赔、抑豪强）初始 40
   选项可带 needMize:true —— 仅在查阅密折后出现（知情选项）
   选项可带 blindRisk:true —— 未阅密折而选之，则事后追悔（信息差惩罚）
   ============================================================ */
const OFFICIALS = [
    { key: 'zhangTingyu', name: '张廷玉' },
    { key: 'tianWenjing', name: '田文镜' },
    { key: 'yunxiang',    name: '怡亲王' },
    { key: 'longkodo',    name: '隆科多' },
    { key: 'nianGengyao', name: '年羹尧' },
    { key: 'yinsi',      name: '允禩' },
    { key: 'eertai',     name: '鄂尔泰' },
    { key: 'liwei',      name: '李卫' }
];

const gameData = [

/* ===================== 雍正元年 ===================== */
{
    year: 1723, month: 6,
    from: '山西布政使 田文镜',
    title: '为请将火耗归公事',
    summary: '山西火耗倍于正赋，请于本省先行归公，充正用、养廉吏。',
    body: '臣田文镜谨奏：\n\n臣到任山西，饬查各府州县钱粮，岁入正赋之外，例有火耗。名曰「耗」，实则州县按亩按钱加派，层层取足，岁以为常。臣核算通省之数，正赋之外，耗银倍于正赋。\n\n此耗羡既非正供，例应由州县自收自用，其中大半入于官吏私囊。臣愚以为：耗羡归公，则耗有定，官无额外之需；取之既公，则可养廉、可济公、可备荒、可充军储。\n\n惟是归公之后，州县办公之费无所出，势必另派。臣请先定章程：于耗羡中酌留十分之一二，为州县公费，其余尽数归公，另设「养廉银」，俾绅士在任者廉于谋。\n\n臣不敢以一人之言遽行，伏乞圣裁。',
    zhupi: '所奏是。火耗归公，朕所深许。然须定章程、宽期限、择清吏先行，不可以一朝之政惊扰天下。着尔会同山西巡抚布政使详议具奏，朕批行之。',
    mize: '密报：田文镜到山西未几，即檄行各府，凡从前火耗陋规悉数革除，岁增公费银四十余万两。其人Machinery峻、不恤物议，劾章月月而至，太原、潞安两府知府皆以「生事激众」参之。\n\n臣另有一疑：火耗一项，州县相沿百年，骤行归公，吏无利则怨，民间亦未必信。此事成与不成，全在皇上信与不信。臣以为：皇上若只试之于一省而不期其成，则田文镜必得罪；若期其成，则当有破格之举，以励天下。',
    options: [
        { blindRisk: true, label: '嘉奖田文镜，着各省一体仿行', hint: '破格推动，岁增公费百万；吏民震动，田文镜亦结怨天下', effects: { 'reforms.huohao': 32, publicSupport: 2, officialMorale: 12, treasury: 30, severity: 6, integrity: 14, secretMemorials: 1 }, log: '火耗归公颁行天下，各省岁增公费银百万有奇。' },
        { label: '令其先在山西试行，缓及天下', hint: '不贪功，求稳；民间实惠较慢', effects: { 'reforms.huohao': 14, publicSupport: 4, officialMorale: 5, treasury: 12, integrity: 5 }, log: '火耗归公先在山西试行，民间渐知「公耗」之名。' },
        { label: '责其宽一分、缓一分，毋以刻急激民', hint: '保全推行之力，代价是吏怨', effects: { 'reforms.huohao': 20, publicSupport: 2, officialMorale: -4, mercy: 8, treasury: 15 }, log: '田文镜奉旨「宽分则民受一分」，山西公费归公之数稍减。' },
        { label: '密授机宜：先清吏、次清额、后清耗，三年为期', hint: '知情方略——先换人再动制度', needMize: true, effects: { 'reforms.huohao': 26, officialMorale: 10, integrity: 18, treasury: 18, publicSupport: 1, secretMemorials: 1 }, log: '火耗归公分三步行：先汰不廉之吏，次定耗额之数，后定归公之制，三年为期。' }
    ]
},
{
    year: 1723, month: 8,
    from: '翰林院掌院学士 张廷玉',
    title: '为圣祖仁皇帝宾天请旨举行登极大典事',
    summary: '圣祖宾天，请定登极大典、祭天告庙诸典，以定人心。',
    body: '臣张廷玉谨奏：\n\n圣祖仁皇帝于康熙六十一年十一月十三日宾天于畅春园，遗诏传位于皇四子，诏用蓝笔，玺用「皇帝之宝」。\n\n臣等恭请皇上嗣位，以慰天下臣民之心。登极大典、祭天告庙、告于阙下、颁诏天下，诸事不可不备。\n\n然臣不敢不言：自十月以来，京师内外人心浮动，传闻诏书之语不一，宗室之间，允禩居京师，允禵握兵于西北，二人皆未之觐。\n\n典不可不隆，费亦不可不省；礼当宜从朝廷旧典，而名分尤须明白。臣请先定典礼条目，再择期行礼。\n\n伏乞圣裁。',
    zhupi: '知道了。着礼部、鸿胪寺即行拟定登极大典仪注，祭天告庙诸典，俱照旧制，毋得增减。朕继位，天下自当安定。',
    mize: '密报：允禩自十月以来，夜会宗室诸王于其府，语及诏书；又遣人往各处州县传言。允禵在西安、宁夏增设私驿，逾制甚多，其所著《远西见闻录》之外，传抄密札甚夥。\n\n又怡亲王允祥以总理事务，咳血之症时作，御前常扶疾趋值。臣以为：皇上初立，正需手足，而手足正弱，此其可虑者。',
    options: [
        { blindRisk: true, label: '速办大典，隆礼以安人心', hint: '银较多，宗室无话可说', effects: { imperialPower: 12, 'officials.yinsi': -10, 'officials.longkodo': 8, treasury: -25, severity: 4 }, log: '登极大典依制举行，颁诏天下，四海称贺。' },
        { label: '大典从简，诏示勤政之意', hint: '省帑，但宗室物议难息', effects: { publicSupport: 7, treasury: -5, mercy: 5, 'officials.yinsi': 4 }, log: '登极大典从简举行，诏告天下励精图治。' },
        { label: '典宜隆，同时下诏宣召允禵回京', hint: '一举消除西北隐患', effects: { imperialPower: 16, militaryStrength: 8, 'officials.yinsi': -12, 'officials.longkodo': 6, treasury: -30, secretMemorials: 1 }, log: '大典既举，旋下诏宣召十四王允禵回京。' },
        { label: '密着隆科多录允禩、允禵往来书札，事定后治之', hint: '知情方略——先存证据，不打草惊蛇', needMize: true, effects: { imperialPower: 14, 'officials.yinsi': -8, 'officials.longkodo': 10, treasury: -10, secretMemorials: 2 }, log: '隆科多奉密旨录事，允禩、允禵往来书札一一在案。' }
    ]
},
{
    year: 1723, month: 10,
    from: '步军统领 隆科多',
    title: '为西北军务及十四王情形密陈事宜事',
    summary: '十四王拥兵西宁七年，权势渐重，请降旨处置。',
    body: '臣隆科多谨奏：\n\n奉旨密查允禵情形。臣查得，允禵自康熙五十四年领军出塞，驻守西宁，节制青海、西宁、宁夏诸处军务，粮饷由其一手支销。\n\n其人果毅能军，收拢人心甚速，然性骄而忍，不甚恭顺。近闻其在军中先阅京中邸报，察知朝中人事；又于西安、宁夏增置私驿马匹，逾制甚多；每有廷寄，行之必稽其迟速。\n\n臣以为：西陲重镇，权不可不重；然重镇之臣久处权柄之地，威福自专，则朝廷命令有所不行。此事干系不小，不敢不言。',
    zhupi: '知道了。着隆科多密加访察，所得实情，密封以闻毋得张扬，亦毋得妄加罪罚。朕自有处置。',
    mize: '密报：允禵于军中大造佛像，广收僧道，颇事异端；与年羹尧往来密札甚密，二人论西北事，语多怨望。隆科多则另有私意，欲以此事邀非常之功。\n\n臣窃疑：隆科多此举，未必尽为朝廷计。皇上宜先定大计，不可使隆科多与年羹尧二人共知其事——彼二人若知，则恐各自饰张，反生枝节。',
    options: [
        { blindRisk: true, label: '降旨宣召允禵回京，以削其权', hint: '正面收回兵权，稳妥合祖制', effects: { imperialPower: 14, militaryStrength: -8, 'officials.yinsi': -6, 'officials.longkodo': 10, treasury: -15 }, log: '诏召十四王允禵回京，兵权自此归朝。' },
        { label: '先不动声色，徐观其变', hint: '留后手，但纵其坐大', effects: { imperialPower: -8, militaryStrength: 4, 'officials.longkodo': -8, secretMemorials: 1 }, log: '西陲按兵不动，允禵之气焰日盛。' },
        { label: '密令年羹尧牵制，隆科多仍加倚重', hint: '以西北制西北，代价是养虎', effects: { imperialPower: 6, militaryStrength: 10, 'officials.longkodo': 8, 'officials.nianGengyao': 12, treasury: -20 }, log: '西北以年羹尧牵制允禵，隆科多得专署之权。' },
        { label: '密勿使年、隆预闻，只以「朕意」密授岳钟琪一人', hint: '知情方略——专一而不贰', needMize: true, effects: { imperialPower: 16, militaryStrength: 6, 'officials.nianGengyao': -6, 'officials.longkodo': 4, treasury: -15, secretMemorials: 2 }, log: '西陲之谋不告年、隆，密授岳钟琪一人专办。' }
    ]
},
{
    year: 1723, month: 12,
    from: '怡亲王 允祥',
    title: '为总理事务谨陈钱粮并旗人贫困事',
    summary: '旗人贫困、投充之弊、户部出纳混淆，乞明定制。',
    body: '臣允祥谨奏：\n\n皇上以臣总理事务，臣日夜思维，惟钱粮一项关系天下根本。\n\n今旗人不但圈地，并有「投充」之弊：民户以田产家人投充旗下，名为投充，实则豪强以一纸投充文契侵占民产。一旦遇有差徭、逃赋，则责令投充之户代赔，谓之「小民自投充」。此弊一开，旗下富室皆得，而旗下贫民皆困。\n\n又户部出纳混淆，正赋、耗羡、火耗各自一款，各省解款实数难以稽核。臣请：\n\n一、严查投充，限一年清理，嗣后不许以民产为旗产；\n二、各省钱粮分列正赋、火耗、耗羡三项，各归各目；\n三、旗下旗人贫困者，量予赈恤，毋令为盗；\n四、户部出入，岁终具册御览。\n\n伏乞圣裁。',
    zhupi: '所奏是。投充之弊，着即严查清理限满一年，不得展缓。钱粮分目，着户部核实另奏。汝病未愈，凡事勉力为之，毋得过劳。',
    mize: '密报：怡亲王咳血之症时作，夜间不能安卧，然以军务国事为念，夜不释卷。臣请早简辅弼之才，以备万一。\n\n又，投充一弊，其源在各省督抚与旗人互相容隐，若只令旗人自查，则必不能净。',
    options: [
        { label: '准其所奏，尽行严查', hint: '旗人怨，百姓悦，财政清', effects: { treasury: 35, publicSupport: 8, officialMorale: 10, integrity: 15, 'officials.yunxiang': 10 }, log: '查禁投充，清理旗地，各省钱粮分目解京。' },
        { label: '准查投充，钱粮分目缓行', hint: '折中之策', effects: { treasury: 15, publicSupport: 5, officialMorale: 4 }, log: '旗地清理，户部分目之议留中。' },
        { label: '责各省督抚与旗人同查，两造互相结状', hint: '知情方略——令其自相攻发', needMize: true, effects: { treasury: 30, publicSupport: 7, integrity: 22, officialMorale: 8, 'officials.yunxiang': 8 }, log: '投充之弊令督抚与旗人同查互结，岁减赔赋无算。' }
    ]
},

/* ===================== 雍正二年 ===================== */
{
    year: 1724, month: 2,
    from: '陕西提督 岳钟琪',
    title: '为平定罗卜藏丹津叛乱事',
    summary: '青海罗卜藏丹津谋反，臣已定西宁、庄浪、河州，请旨进剿。',
    body: '臣岳钟琪谨奏：\n\n罗卜藏丹津上年冬谋反，袭青海驻军，掠驼马二十余万。西宁、松潘、甘州同时告警。臣时任陕西提督，奉旨率师四千，自松潘入拉卜夹，昼夜兼程，直抵西宁。\n\n臣既定西宁、庄浪、河州，斩获甚众。罗卜藏丹津逃入大草泽，穷追未获。\n\n其党已散，青海各部多降。臣请乘胜进剿，一鼓而定，勿使复聚。\n\n伏乞圣裁。',
    zhupi: '西陲事关系全局，着即进剿，务求干净。粮饷器械，吾为汝筹之，勿以粮道为忧。',
    mize: '密报：罗卜藏丹津遣使赴准噶尔求援，策妄阿拉布坦已遣兵西向。\n\n又，兵部档案中有年羹尧所上之疏，称罗卜藏丹津「势穷将死，不足为患」，其奏日期竟早于叛乱发现数月。臣不知年羹尧何以预知其亡，又何以不即以闻——此事关系年羹尧之诚与才，皇上不可不察。',
    options: [
        { label: '准其进剿，务求一劳永逸', hint: '速定青海，耗饷甚大', effects: { militaryStrength: 18, 'officials.nianGengyao': 12, treasury: -60, imperialPower: 6 }, log: '罗卜藏丹津授首，青海悉平。' },
        { label: '令其持重，抚降为要', hint: '省饷，边患未清', effects: { militaryStrength: 6, publicSupport: 3, treasury: -25, mercy: 8, 'officials.nianGengyao': 6 }, log: '青海各部来降，罗卜藏丹津走伏未获。' },
        { label: '召年羹尧入京面见，令岳钟琪专任', hint: '削年之权，重用新将', effects: { imperialPower: 14, militaryStrength: 8, 'officials.nianGengyao': -22, treasury: -45, severity: 5 }, log: '年羹尧被召入京，岳钟琪专领青海军务。' },
        { label: '密令岳钟琪录年羹尧疏，一并封存，待其自露', hint: '知情方略——存证而不发', needMize: true, effects: { imperialPower: 12, militaryStrength: 14, 'officials.nianGengyao': -10, treasury: -50, secretMemorials: 2 }, log: '年羹尧原疏封存御前，岳钟琪专任青海军务。' }
    ]
},
{
    year: 1724, month: 5,
    from: '山东巡抚 岳濬',
    title: '为清查州县积欠事',
    summary: '山东积欠逾百万，请定清理宽限之法，毋令疲民。',
    body: '臣岳濬谨奏：\n\n臣到任，遍阅仓库簿籍，见各州县积欠钱粮合计逾百万两。问其故，皆曰年岁灾歉、逋赋日积。\n\n然臣细查，其中实有十分之三，并非灾荒，而是胥吏豪强包揽、州县摊派、层层中饱。真正无力完纳者，十不及五。\n\n若照旧例追比，饥民卖儿鬻女以应；而奸滑者反得逍遥。臣请：\n\n一、准百姓完纳十分之五，准旧欠一分，宽其一分；\n二、积欠在身者，许其完纳一部，分期带征；\n三、州县自理、吏胥自首者，免其罪，追赔入公。\n\n伏乞圣裁。',
    zhupi: '所奏是。宽一分则民受一分，催科不严则吏益玩法。着即行文，务在核实，不得扰民。',
    mize: '密报：山东积欠之实，巡抚幕友某私抽火耗一成三，年入数万。此人乃某大员之婿，案中牵连甚广。臣不敢径举，先密奏闻。\n\n又：皇上若宽赋而即黜一二人，则民间知宽赋为恩；若不黜，则宽赋反疑为姑息。',
    options: [
        { label: '准其宽一分、行一分', hint: '百姓得喘息，积欠部分核销', effects: { publicSupport: 10, treasury: -35, officialMorale: 6, 'reforms.tandin': 8, mercy: 12 }, log: '山东积欠宽减追比，百姓称便，藩库为之减色。' },
        { blindRisk: true, label: '严追如额，一文不许缓', hint: '库帑保住，民怨沸腾', effects: { integrity: 4, treasury: 45, publicSupport: 6, officialMorale: -10, severity: 12 }, log: '山东追比严急，乡民怨声载道。' },
        { label: '宽赋与究贪并行，黥贪吏以示天下', hint: '两难之策，费时费力', effects: { publicSupport: 8, treasury: 10, officialMorale: 14, 'reforms.tandin': 12, integrity: 18, severity: 6, secretMemorials: 1 }, log: '山东宽赋与究贪并行，黥吏若干。' },
        { label: '先密拿幕友某、夺其柄，再行宽赋之诏', hint: '知情方略——先除侵吞之源', needMize: true, effects: { publicSupport: 9, treasury: 20, officialMorale: 12, 'reforms.tandin': 12, integrity: 20, severity: 6 }, log: '山东幕友某先被劾罢，宽赋之诏乃行。' }
    ]
},
{
    year: 1724, month: 11,
    from: '川陕总督 年羹尧',
    title: '为陈奏青海军务善后并请议叙将士事',
    summary: '青海既定，臣拟善后八条，请旨定夺；并请一体议叙将士。',
    body: '臣年羹尧谨奏：\n\n臣奉旨总督川陕，兼辖青海军务。罗卜藏丹津已平，青海各部悉平。臣愚以为，此番用兵，赖圣主神灵，诸将一心，方有此捷。\n\n善后事宜，臣拟八条：一、于西宁置办事大臣，节制青海各部；二、青海驻兵五千，隶抚标节制；三、青海各部年给赏银，仍循旧例；四、禁番僧干预番民婚娶；五、汉人不得擅入番界贸易；六、番目许其世袭；七、于西宁设青海驿，递送文书；八、遣官往准噶尔互市，以安其心。\n\n又各路将弁咸有劳绩，请一体议叙。\n\n伏乞圣裁。',
    zhupi: '所奏八条，朕览之。军政大计，本朝自有一定规模，卿不必另立名色。至议叙将士，着兵部即行具题，不候朕再奏。',
    mize: '密报：年羹尧奏事语气倨傲，谕阁臣、批属官俱用「便宜」字样；于西宁大筑府第，僭用九楹；其父年逾六旬，赐衔一等公，并欲为祖父母父母建坊。门下牲畜僮仆至数千，其一人题奏事，竟称「年大将军」。中号令皆出其门。\n\n又，所拟八条中，第三条「年给赏银」、第八条「遣官互市」，实皆增岁费、开边衅之端。皇上若径准之，后欲收手而不能。臣以为：宜准其一二，驳其五六，令其知有界。',
    options: [
        { label: '议叙将士，其权暂仍', hint: '不触霉头，然尾大不掉', effects: { militaryStrength: 12, 'officials.nianGengyao': 18, imperialPower: -8, treasury: -40 }, log: '年羹尧所奏将士一体议叙，其势愈骄。' },
        { label: '温旨嘉奖，其权渐收，岁费另定限额', hint: '削其势，防其骄', effects: { imperialPower: 14, 'officials.nianGengyao': -15, militaryStrength: 4, treasury: -25, integrity: 8 }, log: '年羹尧所奏八条驳正，兵权渐收于朝廷。' },
        { label: '命即赴京面见', hint: '风险最大之着', effects: { imperialPower: 20, 'officials.nianGengyao': -30, treasury: -10, severity: 8, secretMemorials: 2 }, log: '年羹尧奉诏入京，西北兵权由副将统领。' },
        { label: '准其八条而密定三项禁忌，俟其自犯再收之', hint: '知情方略——纵之使其自露', needMize: true, effects: { imperialPower: 16, 'officials.nianGengyao': 8, militaryStrength: 8, treasury: -30, secretMemorials: 2 }, log: '年羹尧八条准行，而三项禁忌密定，俟其自投罗网。' }
    ]
},
{
    year: 1724, month: 12,
    from: '大学士 高拱乾 等',
    title: '为隆科多情形密奏事',
    summary: '步军统领隆科多权势太重、逾制僭越，乞请调任。',
    body: '臣高拱乾等谨奏：\n\n步军统领隆科多，自皇上践阼以来，兼领步军、畅春苑诸务，又预大典仪注，权势赫奕。\n\n其家中僮仆数千，花园数十顷；出入以黄骑马，仪节逾制；至其门前，官员皆趋走恐后。皇上待之厚矣，然中外已有「隆选」之谣。\n\n又闻隆科多于朝政事，每以密折陈说，多涉他人短长。臣等不以臣工劾大臣，然国家所以设官分职，正为彼此相制。\n\n伏乞圣裁。',
    zhupi: '知道了。隆科多之事，朕自有分寸，卿等毋得轻动，亦毋得外泄。',
    mize: '密报：隆科多与年羹尧往来甚密，密书中颇有怨望之语，二人皆言「内得某某之助」。又隆科多私改《大清会典》用例，并将御前所赐之物转赠与年羹尧。\n\n臣又查：隆科多曾私留禁中之人，逾制甚矣；又其家人生日，皇上赐宴，诸王皆往贺，礼数隆重。臣以为：隆科多之祸，不在其骄，而在其知太多、握太重、皇上又不能舍。',
    options: [
        { label: '留中不发，观其动作', hint: '不动即少动，但权柄日盛', effects: { 'officials.longkodo': 12, imperialPower: -10, secretMemorials: 1 }, log: '隆科多奏留中不发，其势益张。' },
        { label: '即刻削夺隆科多兵权', hint: '雷霆手段，隐患立解', effects: { imperialPower: 18, 'officials.longkodo': -45, 'officials.nianGengyao': -12, officialMorale: 10, severity: 10 }, log: '隆科多被夺步军统领之权，交宗人府看管。' },
        { label: '留其权而削其势，密遣监察', hint: '温水煮蛙', effects: { imperialPower: 6, 'officials.longkodo': 4, 'officials.nianGengyao': 8, secretMemorials: 2 }, log: '隆科多名位如故，实权渐削，密探日密。' },
        { label: '密令张廷玉查其私改会典、转赠御物二事，先存其罪', hint: '知情方略——罪由自取', needMize: true, effects: { imperialPower: 14, 'officials.longkodo': 6, 'officials.nianGengyao': -8, officialMorale: 8, secretMemorials: 2 }, log: '隆科多私改会典、转赠御物二事，密交张廷玉存证。' }
    ]
},

/* ===================== 雍正三年 ===================== */
{
    year: 1725, month: 3,
    from: '工部尚书 朱轼',
    title: '为修理黄河定岁额并请永不加派事',
    summary: '河工糜费无度，请定岁额章；丁银既不加赋，请地方毋得另派。',
    body: '臣朱轼谨奏：\n\n河工自世宗宪皇帝改折色为银，岁糜帑银至三百万两有奇。夫黄河之险非一朝之功可就，而岁修之费亦不可不节。臣请定岁额：\n\n一、岁修银一百四十万两，于部库另拨，不得挪移；\n二、各州县夫役银二十四万两，照旧摊派，不许额外加派；\n三、工料核实报销，毋得虚冒；\n四、河工既定此数，永不加派。\n\n又，皇上以滋生人丁永不加赋之政诏告天下，百姓莫不欢欣。臣以为，此政既行，若州县以「例」「赠」「派」名色另加，则是加赋也，非皇上初意。宜明令申明，永不加赋，以固民信。\n\n伏乞圣裁。',
    zhupi: '河工定额定章，永不加派，此朕之至意。滋生人丁永不加赋之旨，地方官若有阳奉阴违者，朕必严办。',
    mize: '密报：部库空虚，雍正二年所发帑银实有八万两未曾出库，经手者为户部某员。此人系隆科多门客。臣不敢不奏。\n\n又：河工定额之议，若行，州县摊派之数必减，此皆小民所愿；然总理河工之大臣，必以「工未完」为辞，抗拒成议。皇上宜先定其人。',
    options: [
        { label: '准其定章，永不加派', hint: '民心大安，岁额稍减', effects: { publicSupport: 11, treasury: -20, officialMorale: 12, 'reforms.tandin': 12, mercy: 10 }, log: '河工定岁额，永不加派，士民颂之。' },
        { label: '定额定章，并究部库亏空', hint: '一箭双雕', effects: { treasury: 30, publicSupport: 7, officialMorale: 16, 'reforms.tandin': 12, integrity: 18, secretMemorials: 1 }, log: '河工定章，户部亏空八万两查实追赔。' },
        { label: '暂不颁行，俟秋后再议', hint: '拖一拖', effects: { publicSupport: -8, officialMorale: -6 }, log: '河工定章之议留中不决。' },
        { label: '诏各省巡抚具报河工情形，先定总理河工之臣', hint: '知情方略——先换人，再定章', needMime: false, needMize: true, effects: { publicSupport: 8, treasury: -10, officialMorale: 12, 'reforms.tandin': 10, integrity: 12, secretMemorials: 1 }, log: '各省巡抚具报河工实况，总理河工之臣另简。' }
    ]
},
{
    year: 1725, month: 8,
    from: '直隶总督 李卫',
    title: '为清查诡寄隐田并请绅衿一体当差事',
    summary: '直隶绅衿多隐匿田亩，请严查诡寄，并定士民一体当差之制。',
    body: '臣李卫谨奏：\n\n臣到任直隶，遍查田亩，觉察绅士之家隐匿田亩者十之三四。更有「诡寄」「寄名」之弊：田在他人名下，而实为势家所有，官府按册征粮，势家反得轻赋。\n\n又，绅衿不应当差，州县胥吏藉此生弊，衿棍、包庇之弊皆由于此。\n\n臣请：\n\n一、严查诡寄、寄名，隐田者田入官，另罚；\n二、绅衿一体当差，与庶民同例，此即皇上「士民一体」之旨；\n三、约束胥吏，不许借端索诈，违者严办；\n四、州县岁终造报田亩实数，不许以册籍为凭。\n\n伏乞裁。',
    zhupi: '所奏是。田亩一项，是天下第一要务。绅衿一体当差，朕不稍贷。卿放手去做，不要顾虑人情。',
    mize: '密报：直隶举人某，生员数十人，见官不下马，为祸乡里。及查其家产，田千顷，僮仆数百，然州县不敢问。臣已密访确情，只候圣裁。\n\n又：臣初莅任时，属吏皆以为臣不过以查案为名、扰民索贿，不之信。皇上若一意峻法而不稍宽其期，恐直隶士绅转相结党。',
    options: [
        { label: '准行，绅衿一体当差', hint: '触动人少之特权，阻力极大', effects: { 'reforms.tuigu': 22, publicSupport: 8, officialMorale: -8, 'officials.liwei': 12, treasury: 20, severity: 6 }, log: '直隶清查诡寄，绅衿一体当差，州县为之一新。' },
        { label: '准查隐田，当差暂缓', hint: '折中推进', effects: { 'reforms.tuigu': 12, publicSupport: 4, treasury: 12, 'officials.liwei': 6 }, log: '直隶清查诡寄寄名，当差之议暂缓。' },
        { label: '先办一府，验其可行再推行', hint: '最稳妥', effects: { 'reforms.tuigu': 6, publicSupport: 3, officialMorale: 4, mercy: 5 }, log: '顺天府先试清查田亩，行之有效。' },
        { label: '先劾举人某以立威，隐田之令乃下', hint: '知情方略——杀鸡儆猴', needMize: true, effects: { 'reforms.tuigu': 20, publicSupport: 6, officialMorale: 6, severity: 12, 'officials.liwei': 10, secretMemorials: 1 }, log: '直隶举人某先被劾充，直隶乃下清查隐田之令。' }
    ]
},
{
    year: 1725, month: 12,
    from: '领侍卫内大臣 平郡王 允禩',
    title: '为扩充宗学并请定宗室服制事',
    summary: '宗室子弟日繁而学额不足，请增额并严定服制。',
    body: '臣允禩谨奏：\n\n宗人府事，臣领有日。惟近日宗室子弟日繁，读书者日少。臣查宗学额数止三十人，而待补者已逾百人。诸王封爵子孙众多，僮仆成群，其贫困者与编户无异。\n\n又本朝服制，宗室与外藩旗人相混，出入宫禁不禁，耗费物力。\n\n臣请：\n\n一、扩充宗学，广收族中子弟俊秀者入学，仍以八旗子弟充补；\n二、定宗室服制，禁用马蹄袖、朝珠等物，出入禁中一体照旗人例；\n三、宗室贫困者，别给钱米，毋令为不肖；\n四、严核宗人府册籍，令各王府报明人口田产。\n\n伏乞圣裁。',
    zhupi: '知道了。宗学之事，着宗人府会同内务府详议具奏。服制旧例，朕自有区处。',
    mize: '密报：允禩府中近日所聚之人益发不类，内务府某员、宗室数人日夜聚集，语多怨望。\n\n又，先帝在位时，允禩于诸王中居第二，仪节每从尊今皇上御极，允禩居第三。臣尝闻其语：「从前在二阿哥前，如今在什么地方？」其言可见。\n\n再，宗室服制一事，实关体统，然必有不服者；皇上若令宗人府自为裁抑，则允禩必谓皇上轻宗室。此中机栴，全在皇上之一字。',
    options: [
        { label: '优容宗室，增学养士', hint: '以柔克刚，先收人心', effects: { publicSupport: 4, 'officials.yinsi': 12, officialMorale: 5, treasury: -20, mercy: 8 }, log: '扩充宗学，给宗室贫困者以钱米。' },
        { label: '厉行服制，裁减宗室用度', hint: '削其势而结怨', effects: { imperialPower: 12, 'officials.yinsi': -20, treasury: 15, officialMorale: -5, severity: 6 }, log: '严定宗室服制，裁减岁赐。' },
        { label: '密加察访，先事防范', hint: '防患于未然', effects: { imperialPower: 6, 'officials.yinsi': -6, secretMemorials: 2 }, log: '允禩府中所聚之人，具名密录。' },
        { label: '服制之事交宗人府自议，而以密折监听其议', hint: '知情方略——以其人之手削之', needMize: true, effects: { imperialPower: 14, 'officials.yinsi': -14, officialMorale: 6, secretMemorials: 2 }, log: '宗室服制交宗人府自议，皇上密听其辞。' }
    ]
},

/* ===================== 雍正四年 ===================== */
{
    year: 1726, month: 4,
    from: '大学士 张廷玉 等',
    title: '为允禩悖逆情形奏请处置事',
    summary: '宗室悖逆情形已明，请明正典刑，以正名分。',
    body: '臣张廷玉谨奏：\n\n皇上登极四载，宗政紊乱，悖逆之渐已非一日。臣等奉旨查核，情形如下：\n\n一、允禩于康熙末年，串联内外，妄称「二阿哥当立」。及皇上即位，允禩以「与我而已」之语凌人，二阿哥、十四王等在旁，闻之凛然。\n\n二、允禩在康熙末年八月，私向咸安宫行礼，为侍卫所阻。\n\n三、先帝大行，禩在诸王中仪节逾制；又于畅春园擅奏事务，同列诸王皆无。\n\n四、允禩年长，赐死不当，请皇上量情处置。\n\n臣等以为，名分不正，则上下无以自立。请旨明正典刑。\n\n伏乞圣裁。',
    zhupi: '知道了。诸王的事，朕自有处置。你且退下。',
    mize: '密报：允禩府中家人逾数十人，私与内外官往来，其出京私谒者数十家，皆有馈遗。又有僧人、道士出入其门。侍卫某因不肯私谒允禩，为其所恨。\n\n臣按：允禩之骄，已非一日。皇上若以恩典结之，彼益无所忌惮；若遽加显戮，恐宗室寒心。宜先削其党与羽翼，再定其名分。',
    options: [
        { label: '削籍夺爵，圈禁宗人府', hint: '剪除最大隐患，宗室震恐', effects: { imperialPower: 22, 'officials.yinsi': -40, officialMorale: 14, publicSupport: 6, severity: 10 }, log: '允禩削去王爵，改名阿其那，圈禁宗人府。' },
        { label: '留其爵而夺其权，迁居京郊', hint: '留一分余地', effects: { imperialPower: 12, 'officials.yinsi': -20, officialMorale: 5, mercy: 6 }, log: '允禩爵位未夺，迁居京郊，听候发落。' },
        { label: '暂留再观', hint: '养虎为患', effects: { imperialPower: -10, 'officials.yinsi': 15, secretMemorials: 1 }, log: '宗政之议暂缓，允禩气焰复炽。' },
        { label: '先劾其党与私谒之家，削羽翼而后定其名分', hint: '知情方略——次第剪除', needMize: true, effects: { imperialPower: 20, 'officials.yinsi': -34, officialMorale: 12, publicSupport: 4, severity: 8, secretMemorials: 2 }, log: '允禩私谒之家先被劾究，其党羽尽剪。' }
    ]
},
{
    year: 1726, month: 10,
    from: '云贵总督 鄂尔泰',
    title: '为经理苗疆并请改土归流事',
    summary: '土司骄横不法，苗民苦甚，请于滇黔要害之地改土归流。',
    body: '臣鄂尔泰谨奏：\n\n臣到任贵，访查苗疆情形。滇东、黔南各土司世守其土，子孙承袭，悉以私刑断狱，民命系于其手，冤无所申。\n\n有土司自雍正元年至今，擅杀人命二十余起，未经有司勘问；其地田赋本已入册，今复自收三五成，名曰「火耗」。\n\n臣以为非改土归流不可。惟其势须徐图：\n\n一、先于要害之地改设流官，量其地险，置兵设汛；\n二、苗民通言语者，循例编入民籍，与土司不相干属；\n三、土司愿改流者，量予优叙，许其子弟仍为土职；\n四、不愿改者，俟其罪状发露，再行处置。\n\n伏乞圣裁。',
    zhupi: '所奏是。改土归流，关系百年之治，务要经理得当，不可卤莽。卿与杨名时议定章程，朕批行之。',
    mize: '报：鄂尔泰在滇锐意有为，然性刚自用，与云贵提督杨名时意见龃龉。臣观二人皆非庸才，然同城而不同心，恐败事。\n\n又：土司中有一名安某，暗通准噶尔，已三年矣。臣所报即彼暗通之处。',
    options: [
        { label: '准其改土归流，分期推进', hint: '耗时多年，成效深远', effects: { 'reforms.tuigu': 25, publicSupport: 8, officialMorale: 10, 'officials.eertai': 18, treasury: -30 }, log: '滇黔要害之地改设流官，苗疆渐安。' },
        { label: '先办土司不法者，以罪取证', hint: '取证而后行，风险小', effects: { 'reforms.tuigu': 12, publicSupport: 4, treasury: -10, 'officials.eertai': 8, severity: 4 }, log: '先办不法土司数人，苗民始信朝廷无偏私。' },
        { label: '责其与提督和衷共济，毋得各行其是', hint: '先理人事', effects: { 'reforms.tuigu': 6, officialMorale: 6, 'officials.eertai': -5, mercy: 4 }, log: '鄂尔泰、杨名时奉旨会同办理，龃龉稍解。' },
        { label: '密拿通敌之土司安某，以其罪证服众', hint: '知情方略——以敌国为罪证', needMize: true, effects: { 'reforms.tuigu': 24, publicSupport: 9, officialMorale: 10, severity: 8, 'officials.eertai': 14, secretMemorials: 2 }, log: '通敌土司安某先被拿办，苗疆归流之议遂成。' }
    ]
},
