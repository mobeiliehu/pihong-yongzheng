/* ===================== 雍正五年 ===================== */
{
    year: 1727, month: 3,
    from: '浙江巡抚 李卫',
    title: '为整饬浙省吏治事',
    summary: '浙省胥吏把持文移、官绅相结，请定清查之法。',
    body: '臣李卫谨奏：\n\n臣初莅浙省，见吏治之坏胜于他省。文书出于书办之手，钱粮操于衙役之手；州县官到任三月，案牍已积盈尺，尽为胥吏所卖。\n\n又浙人多业讼，讼师与官吏相结，一词到手，动辄千缗，民间受累。臣欲除弊而苦无良吏。\n\n臣请：\n\n一、清查省城各衙门积案，限半年清理；\n二、严禁吏胥讹索，拏获者照例枷号；\n三、州县每月具报钱粮出入，备御览；\n四、简选书吏，取年富力强者，考其字画，给以工食，岁终考绩。\n\n臣才力平常，惟有一腔为国之心，伏乞圣裁。',
    zhupi: '好。卿既有此心，尽管放胆去做。吏治一门，朕全权付卿。只一件，不要株连无辜，妄加罪罚。',
    mize: '密报：李卫到浙，一改官场旧习，士人初不服，其后畏其严，怨声渐息。惟李卫为人自用，好与同僚争，浙省臬司、藩司皆与龃龉；又其护短，府中胥役倚其势甚骄，有殴人者，府县不敢问。\n\n臣以为：皇上以吏治付李卫，是得其长；然其短在护短。若不预为防，流弊必自其门下出。',
    options: [
        { label: '准其清查，严办讹索胥吏', hint: '吏治肃清，然李卫树敌', effects: { officialMorale: 20, publicSupport: 7, treasury: 15, integrity: 14, 'officials.liwei': 12 }, log: '浙省积案清理，胥吏讹索之风为之一变。' },
        { label: '准其行事，并令巡抚互相节制', hint: '防一家独大', effects: { officialMorale: 12, publicSupport: 4, 'officials.liwei': -4 }, log: '李卫清查胥吏，同时各省巡抚一体查办。' },
        { label: '令其稍缓，先训后惩', hint: '手段偏软', effects: { officialMorale: 6, publicSupport: 3, treasury: -5, mercy: 6 }, log: '浙省积案分限清理，吏胥先行训诫。' },
        { label: '密授机宜，先查其府中胥役之横者，以清其源', hint: '知情方略——治其门内', needMize: true, effects: { officialMorale: 18, publicSupport: 8, integrity: 20, 'officials.liwei': 10, severity: 4, secretMemorials: 1 }, log: '李卫府中豪横胥役先遭查办，浙省吏治乃清。' }
    ]
},
{
    year: 1727, month: 8,
    from: '理藩院尚书 鄂尔达 等',
    title: '为请设驻藏大臣并定藏地经理事宜事',
    summary: '藏地需大员经理，请遣正卿二人驻藏，办理一切事务。',
    body: '臣等谨奏：\n\n藏地自达赖、班禅圆寂后，噶尔丹策零方蠢蠢欲动。此地虽隶版图，而政教之柄操于胡土克图之手，向无大员经理，恐生事端。\n\n臣等议：请遣正卿二人赴藏，一正一副，率兵三千，分驻前藏、后藏，办理一切事务；噶尔丹策零遣使来朝者，许其贸易，与以封号，俾其安分。\n\n所需经费约银二十万两，人马由青海、西宁拨给。\n\n伏乞圣裁。',
    zhupi: '所奏是。藏地关系边防，着即遣正卿二人驻藏，所需经费如数拨给，务令经理得法。',
    mize: '密报：准噶尔噶尔丹策零遣使求和，所求甚奢，索额鲁特、克什克特之地。臣等以为，此乃缓兵之计，许其贸易而不可许其地。惟使臣往来日密，恐边民与之私贩军械。\n\n又，藏地情形复杂，遣京员二人，未必熟悉；不如遣有边务经验而能谦抑者。',
    options: [
        { label: '照议，设驻藏大臣二人', hint: '经营西藏，费用不菲', effects: { imperialPower: 14, militaryStrength: 8, treasury: -35, publicSupport: 3 }, log: '遣正卿二人驻藏，前藏后藏各置汛兵。' },
        { label: '遣官而减兵，先观其变', hint: '省钱省兵', effects: { imperialPower: 6, militaryStrength: 3, treasury: -15 }, log: '遣官驻藏，兵额从减。' },
        { label: '许贸易而不遣驻藏大臣', hint: '省钱，但失先手', effects: { treasury: 10, militaryStrength: -10, imperialPower: -8 }, log: '许准噶尔通商，未遣驻藏大臣。' },
        { label: '准遣，而以熟悉边务者为正卿，不以京员充数', hint: '知情方略——择人重于择制', needMize: true, effects: { imperialPower: 16, militaryStrength: 10, treasury: -30, publicSupport: 3, integrity: 8 }, log: '驻藏大臣简派边务老手，藏地经理乃得其人。' }
    ]
},

/* ===================== 雍正六年 ===================== */
{
    year: 1728, month: 7,
    from: '福建巡抚 蓝鼎元',
    title: '为奏请设巡台御史事',
    summary: '台湾孤悬海外，番汉杂处，请设巡台御史巡历弹压。',
    body: '臣蓝鼎元谨奏：\n\n臣前任台湾道，遍历台疆，谨陈其要：\n\n一、台地幅员千里，隶福建一府管辖，官少吏弱，鞭长莫及；\n二、汉番杂处，番社未化者十之七，近年番人出山，扰及汉民；\n三、官以三年为满，交代不清，贪墨自肥，其去后亦有为民称善者；\n四、更有一种陋规，官取于番，吏增其数，番民受害最烈。\n\n臣以为非设巡台御史不可。御史秩卑而权重，可巡历全省、纠劾官吏，且不预地方钱粮，不至与抚臣争权。\n\n伏乞圣裁。',
    zhupi: '所奏是。台湾孤悬海外，非有大员巡察不足以肃清奸弊。着于台湾设巡台御史二人，以道、府兼衔巡历，按年具奏。',
    mize: '密报：台湾知府某，名为出巡安抚，实则按户摊派，每甲派银二两，番民苦之。番社耆老曾有呈文，为胥吏所匿。臣又闻：巡台御史之设，皇上之意已定，今尚未行，而台中已风闻，人人自危。\n\n臣以为：宜先遣密使访查实情，俟御史到任，一并究办，方不至有司闻风先改。',
    options: [
        { blindRisk: true, label: '准设巡台御史二人，彻查积弊', hint: '台岛肃清，怨及一时', effects: { publicSupport: 7, 'reforms.tuigu': 15, treasury: -10, officialMorale: 8, integrity: 12 }, log: '台湾设巡台御史，陋规之弊得除。' },
        { label: '准设御史，先查官不查民', hint: '稳妥，积弊除而不尽', effects: { 'reforms.tuigu': 8, publicSupport: 3, officialMorale: 5, mercy: 5 }, log: '巡台御史到任，先劾不法官吏。' },
        { label: '暂不设御史，先遣大员查案', hint: '走一步看一步', effects: { 'reforms.tuigu': 4, treasury: -5 }, log: '遣大员赴台查案，御史之议暂缓。' },
        { label: '先遣密使访查，罪状既实，然后设御史并劾之', hint: '知情方略——先取证，后设官', needMize: true, effects: { publicSupport: 8, 'reforms.tuigu': 16, officialMorale: 10, integrity: 16, severity: 6, secretMemorials: 1 }, log: '密使先得台中实情，御史至，罪案并劾。' }
    ]
},
{
    year: 1728, month: 11,
    from: '大学士 张廷玉',
    title: '为吕留良著述及曾静张某事',
    summary: '湖南曾静张某引吕留良著述投递营中，请旨查办。',
    body: '臣张廷玉谨奏：\n\n湖南考生曾静、张熙，投书川陕总督岳钟琪营中，劝其「成佛作祖」，并引吕留良所著《自知录》语，妄称「华夷之辨」甚严，语多悖逆。曾静、张熙现已拿获，解送京师。\n\n臣查吕留良，浙江崇德人，讲学著书，门徒甚众。已故。著书中有「诛五百万也胜似一百万」等语，为门人曾静所诵。\n\n此非一人一事，乃著书立说、惑世坑人。臣请：\n\n一、严查吕留著述及门徒，一并究办；\n二、张熙等解京严讯；\n三、查办不可株连，不可滥及无辜；\n四、书板焚毁，令地方官查禁销毁。\n\n伏乞圣裁。',
    zhupi: '知道了。吕留良著述，着即严查销毁。其门徒曾静等，押解来京讯问，毋得株连无辜。此案重大，卿须亲自督办。',
    mize: '密报：此案牵动江浙士林，江南士子人心惶惶。臣闻有人劝皇上「从宽」以安人心，亦有人劝「从严」以绝后患。臣以为：此案之要，不在一人之生死，而在诸王之态度——宗人府诸王，多有以此案为言者。\n\n又，此案若株连太广，则读书人皆闭口不言，皇上此后所得者，将只有告发之词。',
    options: [
        { blindRisk: true, label: '从严办理，销毁著述，追究门徒', hint: '绝祸根，然江南人心不安', effects: { integrity: 4, imperialPower: 16, officialMorale: -10, publicSupport: 3, severity: 14, 'officials.zhangTingyu': 10 }, log: '吕留良著述悉数销毁，门徒严办。' },
        { label: '审慎办理，诛其身而宽其党', hint: '取折中之策', effects: { imperialPower: 8, publicSupport: 2, officialMorale: 3, mercy: 8 }, log: '曾静等下狱论罪，株连者从宽。' },
        { label: '交地方查办，不复株连', hint: '最宽之策', effects: { publicSupport: 7, imperialPower: -6, officialMorale: -6, mercy: 12 }, log: '吕留良案交地方查办，从宽完结。' },
        { label: '诛首恶、焚书板，而明诏各省「不得株连」以安士林', hint: '知情方略——宽其党以收人心', needMize: true, effects: { imperialPower: 14, publicSupport: 6, officialMorale: 6, severity: 6, 'officials.zhangTingyu': 8 }, log: '曾静等严办，而诏令各省毋得株连，江南士林稍安。' }
    ]
},

/* ===================== 雍正七年 ===================== */
{
    year: 1729, month: 6,
    from: '山东巡抚 金世宗 等',
    title: '为请颁摊丁入亩并定地丁一册事',
    summary: '丁银摊入田赋，贫民无丁则无税，请天下一体遵行。',
    body: '臣等谨奏：\n\n我朝定鼎，滋生人丁永不加赋，此圣祖仁皇帝之仁政也。然丁银虽不加，而丁银之额仍在，其徭役仍派之于人，虽无增赋之名，实有增役之实。\n\n且丁银与田赋一经摊归，贫苦无田之民，岁岁完纳，名为不加赋，实不免困。臣等议：\n\n一、将丁银摊入田赋之内，按亩分派；\n二、无论男女，一概编入坊厢；\n三、此后生出之丁，永不加赋；\n四、地丁一册之法，通行各省，岁终造报户口田亩之数。\n\n伏乞圣裁。',
    zhupi: '所奏是。丁银摊入田赋，贫民得免，着颁行各省，永为定例。',
    mize: '密报：摊丁入亩，行之不难，难在有田之家。以往丁银由无地者分摊，今改为有田者分摊，田多者出银多，故乡绅必怨。臣闻河南、山西已有士绅联名呈诉。\n\n又，此政若行，逃户、匿丁之弊自解，而保甲、里甲之额亦须重定；地方官必借重定之机，趁机摊派。皇上宜明定「摊丁之银不得别派」之条，堵其口实。',
    options: [
        { blindRisk: true, label: '颁行天下，无丁不纳', hint: '最彻底，触动人多', effects: { 'reforms.tandin': 30, publicSupport: 10, officialMorale: -8, treasury: 10, mercy: 12, secretMemorials: 1 }, log: '摊丁入亩颁行各省，编户之数岁增。' },
        { label: '先于无丁州县试行，再行天下', hint: '先易后难', effects: { 'reforms.tandin': 16, publicSupport: 6, officialMorale: 3 }, log: '摊丁入亩先于无丁之州县试行。' },
        { label: '行于贫多田少之省，暂缓东南', hint: '避硬骨头', effects: { 'reforms.tandin': 8, publicSupport: 3, officialMorale: -3 }, log: '摊丁入亩先行于贫瘠之省，东南暂缓。' },
        { label: '颁行，并明定「摊丁银不得别派」一条以杜浮收', hint: '知情方略——先堵旁路', needMize: true, effects: { 'reforms.tandin': 32, publicSupport: 12, officialMorale: 6, treasury: 12, mercy: 10, integrity: 12, secretMemorials: 1 }, log: '摊丁入亩颁行，并定「不得别派」之条，浮收之弊自减。' }
    ]
},
{
    year: 1729, month: 9,
    from: '怡亲王 允祥',
    title: '为西陲军务请设军机房事',
    summary: '西北用兵，文书由内阁封缄迂缓，请于隆宗门内设军机房。',
    body: '臣允祥谨奏：\n\n西陲用兵，军事文书由内阁代为封缄，辗转迟滞。臣与大将军等筹议，於隆宗门内设军机房，选内阁中书、军机章京若干，缮写军令、密旨，径行发往。前后五日可至，最速者三日至。\n\n此举不过为便于办事，非欲立一衙门。凡军机大臣，皆由皇上亲选；一切文书仍由内阁发出，不敢擅专。\n\n伏乞圣裁。',
    zhupi: '所奏是。军机处之设，原不过为办理军务敏捷，并无别用。朕将大小官员，一概交伊等权宜。',
    mize: '密报：怡亲王病势沉重，时时昏迷，然以军务为念，夜不释卷。臣查其子弘昼已有风流之习，行为不检，时人侧目。\n\n又，军机处之设，不过抄写邸报、随旨写谕耳，廷寄不过由内阁传出之别耳，此众人共知者也。皇上宜自明其无他用，使内外释然；否则臣恐流言四起，为权臣之口实。',
    options: [
        { label: '准设军机房，简选谨密之臣', hint: '军令疾如风，权柄更重', effects: { imperialPower: 15, militaryStrength: 14, 'officials.yunxiang': 15, officialMorale: 6 }, log: '隆宗门内设军机房，军令朝发夕至。' },
        { label: '准设，但一切仍由内阁会签', hint: '防军机权重', effects: { imperialPower: 8, militaryStrength: 8, officialMorale: 4 }, log: '军机房设，文书仍由内阁会签。' },
        { label: '缓设，俟西事平定再议', hint: '稳而进', effects: { militaryStrength: -6, imperialPower: -4 }, log: '军机房之议暂缓。' },
        { label: '准设，并明诏「军机处不过办事之便，并无别用」', hint: '知情方略——先自证其公', needMize: true, effects: { imperialPower: 16, militaryStrength: 14, officialMorale: 10, publicSupport: 4, 'officials.yunxiang': 12 }, log: '军机房既设，明诏其无他用，流言遂息。' }
    ]
},

/* ===================== 雍正八年 ===================== */
{
    year: 1730, month: 3,
    from: '大学士 张廷玉',
    title: '为请严定士民一体当差并清查各省亏空事',
    summary: '绅衿仍不充当差，请通饬各省一体遵行，并令清核亏空。',
    body: '臣张廷玉谨奏：\n\n皇上前降谕旨：士民一体当差。此一旨未行，而天下已传诵。\n\n在直隶、河南、山东，绅士则仍不充差。臣查其故：一则州县畏其威势，一则积欠之户藉以拖延。臣以为，此宜自上而下，一经严旨，不许展缓。\n\n臣又请：凡文武官员之子孙，一体编入坊厢，与庶民同例；其仕宦之家，除一子仍袭原荫外，余子归农。\n\n再者，饬查各省仓库、钱粮、驿传、亏空，令藩臬道三司互结，用其清。\n\n伏乞圣裁。',
    zhupi: '所奏是。士民一体当差，朕意已决，着各省巡抚严加奉行，敢有阳奉阴违者，朕实查之。',
    mize: '密报：各省亏空之数，江南居其半。臣查其源，官多以报销核销为名，任意虚填。皇上若不复查，岁出之数必逾岁入之数，他日有事，仓储不给。\n\n又，士民一体当差最难行于江苏、浙江，然非此二省先改，他省必借口「彼处尚行旧例」而观望。',
    options: [
        { label: '严旨推行，并清查各省亏空', hint: '雷厉风行，可得实数', effects: { 'reforms.tuigu': 22, publicSupport: 7, officialMorale: 8, treasury: 30, integrity: 14, secretMemorials: 1 }, log: '士民一体当差通行各省，各省亏空限期清理。' },
        { label: '只行当差，亏空缓查', hint: '分步推进', effects: { 'reforms.tuigu': 14, publicSupport: 4, treasury: 8 }, log: '士民一体当差通行各省，亏空之查暂缓。' },
        { label: '令先核款项，后行差役', hint: '以利动之，减少阻力', effects: { 'reforms.tuigu': 10, treasury: 20, officialMorale: 6, mercy: 5 }, log: '各省先核款项，明确当差之数。' },
        { label: '先于江苏、浙江破例举办，一省成功则天下从之', hint: '知情方略——先难后易', needMize: true, effects: { 'reforms.tuigu': 24, publicSupport: 9, officialMorale: 10, treasury: 15, integrity: 10, severity: 6, secretMemorials: 1 }, log: '苏浙二省先办当差，天下闻风而行。' }
    ]
},
{
    year: 1730, month: 10,
    from: '云贵总督 鄂尔泰',
    title: '为云南苗疆情形及改土归流成效奏',
    summary: '改土归流三载，土司多已归顺，请定长久之制与经费。',
    body: '臣鄂尔泰谨奏：\n\n改土归流三载，滇东黔南共改土归流六十余处，设府厅州县二十有奇，安插苗民五千余户。\n\n昔之苗民，纳粮则私加火耗，词则投土司，官不过问。今则官收其赋、刑有专司、苗民得与汉民同编，数年之内，苗疆大安。\n\n然臣不敢恃功：\n\n一、已改之土司，其旧日爪牙多有仍在暗处煽惑；\n二、新设流官，伍保、里长皆系土司旧人，不可深信；\n三、经费出自公帑，岁支渐增，若不另筹其源，他日难以为继。\n\n臣请以耗羡所得之三成专供苗疆经费，俾其长久。\n\n伏乞圣裁。',
    zhupi: '所奏是。改土归流，朕从不计一时之功，只要十年之后苗民安堵。经费即如卿议，耗羡三成划归苗疆，不得挪移。',
    mize: '密报：鄂尔泰之功，皇上信之，然其性骄，与督抚同者多不能久处。臣闻云南、贵州二省因一款银归属，鄂尔泰与两省巡抚争讼年余，至今未决。此事若不早断，苗疆之政必受牵累。\n\n又：新设流官之中，汉人多不谙苗俗，苗民怨之；此皇上所当知。',
    options: [
        { label: '准行，并断鄂尔泰与黔抚之争', hint: '保改革，防内耗', effects: { 'reforms.tuigu': 18, publicSupport: 8, officialMorale: 10, 'officials.eertai': 10, treasury: -15 }, log: '苗疆经费定额专给，黔抚之讼得断。' },
        { label: '准行，鄂尔泰专主其事', hint: '效率高，风险高', effects: { 'reforms.tuigu': 22, 'officials.eertai': 15, officialMorale: -5, publicSupport: 4, severity: 4 }, log: '苗疆之事悉听鄂尔泰专主。' },
        { label: '另简贤员分抚，削鄂尔泰之权', hint: '换将', effects: { 'reforms.tuigu': 8, 'officials.eertai': -20, officialMorale: 6 }, log: '黔抚另简贤员，苗疆之政分归两省。' },
        { label: '断其争而不分其权，并令新任流官皆谙苗俗者为之', hint: '知情方略——折中而补其短', needMize: true, effects: { 'reforms.tuigu': 22, publicSupport: 10, officialMorale: 10, 'officials.eertai': 12, mercy: 8, treasury: -10 }, log: '苗疆经费专给，流官改用谙苗俗者，苗疆大安。' }
    ]
},

/* ===================== 雍正九年 ===================== */
{
    year: 1731, month: 6,
    from: '陕西总督 岳钟琪',
    title: '为西陲预警并请预筹粮械事',
    summary: '准噶尔部渐整军备，请预筹粮械、坚壁清野。',
    body: '臣岳钟琪谨奏：\n\n准噶尔部自去秋以来，商胡、驼马渐集于额鲁特一带，其众十万，粮械俱备。\n\n臣先已密奏，今据探报，其遣使来朝，索额鲁特、克什克特之地，词甚倨傲。臣以为，此来为缓我之计。\n\n臣请预筹三事：\n\n一、哈密、吐鲁番、甘肃各城，增兵筑城，储粮备薪；\n二、内地沿边，乡民归并村寨，坚壁清野；\n三、闭关不与通市，以绝其侦探。\n\n若彼果来，来则击之。',
    zhupi: '所奏是。预筹诸事，朕嘉汝之忠。但闭关之议，尚可斟酌——一纸绝之，恐激其志。着户部先备粮饷，兵部先核器械。',
    mize: '密报：准噶尔探营已达我边二千里，而沿途一无可知。臣查此非我不察，乃无人肯实报；边将多以「据称」二字塞责，粮饷则虚冒。\n\n又，甘肃沿边诸营，其额数与实数相去甚远，缺额之饷，往往照额支销，一无下落。皇上若不先核额，仓廪虚耗。',
    options: [
        { label: '断不闭关，且增兵筑城，坚壁清野', hint: '示以强硬，需大费帑', effects: { militaryStrength: 16, treasury: -70, publicSupport: -6, imperialPower: 6 }, log: '沿边增兵筑城，坚壁清野，边备大举。' },
        { label: '闭关绝市，同时密令诸将整军', hint: '以时间换空间', effects: { militaryStrength: 8, treasury: -35, imperialPower: 4 }, log: '闭关不与通市，诸边密整军实。' },
        { label: '照常互市，以观其变', hint: '省帑而失先机', effects: { treasury: 15, militaryStrength: -10, imperialPower: -6 }, log: '西陲照常互市，边情未增警惕。' },
        { label: '闭关，并先核各省营额，缺者补、虚者黜', hint: '知情方略——清虚额以实军', needMize: true, effects: { militaryStrength: 18, treasury: -45, officialMorale: 12, integrity: 16, secretMemorials: 1 }, log: '甘肃营额核实，缺额补足、虚冒者黜，边军始实。' }
    ]
},
{
    year: 1731, month: 11,
    from: '大学士 张廷玉',
    title: '为西陲军需及请用廷寄密旨事',
    summary: '军兴日久，度支日增，请定专款并请以廷寄直达将帅。',
    body: '臣张廷玉谨奏：\n\n西陲军兴以来，度支日增，部库所出已逾四百万两，而西运之费居其半。\n\n臣以为，用兵之道，饷胜于兵。若饷不继，虽百万之师无以行。臣请：\n\n一、于各省加派之外，另留京饷十五万两，专备西征；\n二、军机处行廷寄，直达行军将帅，不经内阁，手续从速；\n三、军需报销，着该部严核，毋得滥销。\n\n伏乞圣裁。',
    zhupi: '所奏是。廷寄之事，朕已有旨。军机大臣，你们可放手去办。',
    mize: '密报：西运之费，半为沿途州县所侵蚀。臣查粮台报销，运一石至边，费银七两，而实到不及五石。此中大半入私。若不严究，帑银虚掷。\n\n又：廷寄直达将帅，此制一立，则内阁之权归军机，久之恐成尾大不掉。此皇上所当自留意者。',
    options: [
        { label: '严核报销，追赔侵吞', hint: '得银而不失将心', effects: { treasury: 35, militaryStrength: 8, officialMorale: 12, integrity: 16, 'officials.zhangTingyu': 8 }, log: '西运军需严核，追赔沿途侵蚀之银。' },
        { label: '姑宽不究，先保军行', hint: '权宜之策', effects: { militaryStrength: 14, treasury: -25, officialMorale: -8 }, log: '军期紧迫，军需报销从宽。' },
        { label: '另遣大员专理军需', hint: '换手即清', effects: { treasury: 20, militaryStrength: 6, officialMorale: 8, secretMemorials: 1 }, log: '另遣大员专理西运军需。' },
        { label: '严核报销，并定「廷寄与内阁文书并行、不得废内阁」之条', hint: '知情方略——既行其便，又防其权', needMize: true, effects: { treasury: 30, militaryStrength: 12, officialMorale: 12, integrity: 12, 'officials.zhangTingyu': 8 }, log: '廷寄与内阁并行，军需严核追赔。' }
    ]
},
