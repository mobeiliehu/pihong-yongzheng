/* ============================================================
   支线事件库
   SCHEDULED : {奏折序号(该折批完之后): [事件]} —— 按史实年月锚定
   RANDOM   : 随机灾异池（任何时点可触发，年月随当时）
   事件选项同样支持 needMize（阅邸报方知详情）—— 本版事件均为公开邸报，
   故一律可阅。
   ============================================================ */
const SCHEDULED = {

/* 元年八月大典之后 */
2: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1723, month: 11,
    from: '直隶总督 康熙 阿',
    title: '为直隶蝗蝻成灾事',
    summary: '保定、真定等处蝗蝻蔽天，晚禾尽毁，请赈济并免赋。',
    body: '臣阿谨奏：\n\n本月保定府属清苑、蠡县，及正定府属无极、灵寿等处，飞蝗蔽天，落地如雨，禾苗尽食。乡民捕蝗无力，惟有掘土掩埋。\n\n臣已驰驿往视，蝗势未已，米价已腾至平日三倍。秋成既坏，来岁必饥。\n\n臣请：\n\n一、即动常平仓米，設厂施粥；\n二、被灾州县，本年钱粮缓征；\n三、准百姓就地捕蝗，输蝗者照例给赏；\n四、饬有司，严禁胥吏借赈行勒索。',
    options: [
        { label: '准动常平仓赈济，并缓本年钱粮', hint: '活民为先，藩库受损', effects: { publicSupport: 8, treasury: -25, mercy: 12, severity: -4 }, log: '直隶蝗灾，准动常平仓赈济并缓征钱粮。' },
        { label: '发帑赈济，令捕蝗有司一体督责', hint: '费帑而速其平', effects: { publicSupport: 4, treasury: -45, officialMorale: 6, severity: 6 }, log: '直隶捕蝗，发帑赈济，有司督责甚严。' },
        { label: '责州县自行劝谕捐赈，不动公帑', hint: '省钱，然可致刁民扰乡', effects: { integrity: 4, treasury: 8, publicSupport: 3, officialMorale: -8, severity: 8 }, log: '直隶蝗灾，令州县劝谕捐赈，乡民颇受骚扰。' }
    ]
}],

/* 二年二月青海之后 */
5: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1724, month: 4,
    from: '江南河道总督 嵇曾筠 等',
    title: '为淮扬被水并请蠲赈事',
    summary: '江淮梅雨旬余，河湖并涨，淮扬诸州县田庐被淹，请赈。',
    body: '臣等谨奏：\n\n入夏以来，江淮梅雨旬余，淮扬各属河水与湖并涨，高邮、宝应、山阳、淮安一带，圩田淹没，民舍漂没者以千计。\n\n臣等已督率有司，驾船照户散米。然灾户太众，仓谷不赈。\n\n臣等请：\n\n一、动支常平仓，并请发帑银二十万两；\n二、被灾田亩，蠲免本年钱粮；\n三、准灾民渡江就食，并严禁官吏人贩粟、居奇；\n四、堤岸决口处，即行抢修，秋前完工。',
    options: [
        { label: '准发帑二十万两，并蠲免本年钱粮', hint: '救急最速，帑银大出', effects: { publicSupport: 10, treasury: -55, mercy: 14 }, log: '淮扬被水，发帑二十万两赈济并蠲免钱粮。' },
        { label: '先动常平仓，帑银俟灾情已明再议', hint: '分寸有度', effects: { publicSupport: 6, treasury: -20, mercy: 8 }, log: '淮扬先发常平仓米赈济，帑银俟核实再拨。' },
        { label: '蠲赋为主，赈济从简，以保国用', hint: '轻赈重免', effects: { publicSupport: 3, treasury: -8, mercy: 6, officialMorale: -4 }, log: '淮扬蠲免钱粮，赈事从简而行。' }
    ]
}],

/* 二年五月积欠之后 */
5: [{
    tag: '言官', tagName: '邸报 · 言官',
    year: 1724, month: 8,
    from: '监察御史 彭启丰',
    title: '为参奏年羹尧骄纵并请处其僭越事',
    summary: '御具奏：羹尧奏事用「便宜」，逾制僭越，请朝廷处之。',
    body: '臣彭启丰谨奏：\n\n臣伏见川陕总督年羹尧，自平青海以来，奏事必用「便宜」二字，谕阁臣、批属官亦复如此。\n\n又其父年逾六旬，皇上赐衔一等公，而年羹尧又请为祖父母父母建坊；其府第在西安，僭用九楹，门前列戟；其仆从骑者千余，皆佩刀，出入以黄骑马。\n\n臣又闻，西宁军中号令皆出年羹尧之门，部司凡事先呈其私第，然后入奏。\n\n年羹尧固有功，然功已至此，恐尾大不掉，害及国家。臣不敢不言。',
    options: [
        { label: '交该部议处，姑不深究', hint: '息争而养其骄', effects: { 'officials.nianGengyao': 8, imperialPower: -6, severity: -4 }, log: '御史劾年羹尧，奉旨交部议处，不予深究。' },
        { label: '留中不发，密令查其僭越诸事', hint: '暗查以取证', effects: { 'officials.nianGengyao': -6, imperialPower: 8, secretMemorials: 1 }, log: '年羹尧僭越诸事，密交科道查核。' },
        { label: '即调年羹尧入京，以抚臣代其任', hint: '釜底抽薪，然边将解体', effects: { 'officials.nianGengyao': -20, militaryStrength: -8, imperialPower: 10, severity: 6 }, log: '年羹尧奉调入京，川陕另简大员。' }
    ]
}],

/* 三年八月直隶之后 */
9: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1725, month: 10,
    from: '山东巡抚 岳濬',
    title: '为东省亢旱并请蠲赈事',
    summary: '山东自春不雨，蝗后继之以旱，秋粮绝望，请赈。',
    body: '臣岳濬谨奏：\n\n东省自春徂夏不雨，六月以后又遭飞蝗，秋禾荡然。臣历巡东昌、曹州、济宁三府，百姓以草根树皮为食者甚众。\n\n臣已劝谕富室捐赈，然杯水车薪。\n\n臣请：\n\n一、准动常平仓米，并请发帑赈济；\n二、准贫民就食河南、江南，俟麦熟乃还；\n三、被灾州县，本年钱粮并缓一年；\n四、严禁胥吏下乡索赈扰民，一经查出即行枷号。',
    options: [
        { label: '准发帑并准就食河南、江南', hint: '救活最速，路费浩繁', effects: { publicSupport: 9, treasury: -50, mercy: 14 }, log: '山东大旱，准发帑赈济，并准灾民就食河南、江南。' },
        { label: '蠲缓钱粮一年，赈事责诸有司', hint: '以宽赋为主', effects: { publicSupport: 4, treasury: -10, mercy: 10, officialMorale: -4 }, log: '山东被灾州县钱粮蠲缓一年，赈事责诸有司。' },
        { label: '严催积欠，不许蠲免', hint: '库帑为重', effects: { integrity: 4, treasury: 30, publicSupport: 4, severity: 12 }, log: '山东积欠照旧追比，灾民无告。' }
    ]
}],

/* 四年四月允禩之后 */
11: [{
    tag: '宗室', tagName: '邸报 · 宗室',
    year: 1726, month: 7,
    from: '宗人府 宗令 允禄',
    title: '为宗室请安并请复爵宥过事',
    summary: '宗室诸王以先帝旧行请安，乞复爵宥过，请皇上裁夺。',
    body: '臣允禄谨奏：\n\n臣宗人府，谨按宗室例，具奏请安。\n\n今有宗室数人，以皇上践阼以来宗政未遑，请上御极之期，一同入朝请安。其间有允祉、允禟旧部，为允禩、允禟乞情者；有以先帝在日曾赐伊等封典，请予保留者。\n\n臣等不敢擅决。惟宗室之情，虽有亲疏，朝廷之法，贵在划一。\n\n伏乞圣裁。',
    options: [
        { label: '准其入朝请安，然不复爵、不宥过', hint: '施恩而守法', effects: { imperialPower: 10, 'officials.yinsi': -10, publicSupport: 4, mercy: 6 }, log: '宗室入朝请安，允之；复爵宥过之请不许。' },
        { label: '一概不许，着令闭门守法', hint: '严 shuts the door', effects: { imperialPower: 14, 'officials.yinsi': -16, officialMorale: 6, severity: 10 }, log: '宗请安之请不许，着闭门守法。' },
        { label: '许其请安，并宽其禁锢之家属', hint: '以德服人', effects: { imperialPower: -4, 'officials.yinsi': 10, publicSupport: 3, mercy: 12 }, log: '许宗室入朝请安，宽其家属之禁。' }
    ]
}],

/* 五年八月驻藏之后 */
14: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1727, month: 10,
    from: '陕西总督 岳钟琪',
    title: '为青海被雪并边民乏食事',
    summary: '青海各部大雪压倒帐房，牲畜毙者过半，请赈其口粮。',
    body: '臣岳钟琪谨奏：\n\n青海各部自十月起大雪连旬，积雪三尺，蒙古帐房为雪压倒者甚多，牲畜毙者过半。番民乏食，渐有流亡入边者。\n\n臣已令沿边各厅发仓赈济，然仓廪有限，而番民数万。\n\n臣请：\n\n一、准动西宁各厅仓储，并请拨内帑十万两；\n二、准于边地开仓，俟来岁丰稔归还；\n三、准流亡番民就地安插，勿令聚而生事；\n四、牧丁口粮，着该管官按口给发，毋得中饱。',
    options: [
        { label: '准发内帑十万两，并准边地开仓', hint: '救急安边，岁后须还', effects: { publicSupport: 7, militaryStrength: 8, treasury: -40, mercy: 12 }, log: '青海大雪，准发内帑十万两，并开边仓赈济。' },
        { label: '令该管官自筹，止给旧存口粮', hint: '不另费帑', effects: { militaryStrength: 3, treasury: -8, publicSupport: -8, officialMorale: -6 }, log: '青海雪灾，令该管官自筹赈济。' }
    ]
}],

/* 六年七月巡台之后 */
15: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1728, month: 9,
    from: '福建巡抚 蓝鼎元',
    title: '为台疆飓风并请蠲免事',
    summary: '台湾飓风大作，禾稼庐舍多损，请免其租、赈其灾。',
    body: '臣蓝鼎元谨奏：\n\n七月内台地飓风大作，屋瓦飞、禾稼折，沿海尤甚，番社房屋倒者甚多。\n\n臣已遣官查勘，计全台被灾者十之三四，岁终恐无获。\n\n臣请：\n\n一、准蠲免被灾州县本年租谷；\n二、准动台湾仓米赈济番民；\n三、准商船贩米往台者免其关税；\n四、番社头目 loss 死亡者，许其保结补给。',
    options: [
        { label: '准蠲免并准商船免税运米往台', hint: '番汉俱济，海关少收', effects: { publicSupport: 8, 'reforms.tuigu': 8, treasury: -15, mercy: 10 }, log: '台湾飓风，准蠲免租谷，并许商船免税运米。' },
        { label: '准蠲免，赈济止用台仓', hint: '照例', effects: { publicSupport: 4, treasury: -8, mercy: 6 }, log: '台湾飓风，准蠲免租谷，以台仓赈济。' }
    ]
}],

/* 七年六月摊丁之后 */
17: [{
    tag: '言官', tagName: '邸报 · 言官',
    year: 1729, month: 8,
    from: '河南巡抚 田文镜',
    title: '为摊丁之议士绅呈诉事',
    summary: '豫晋士绅联名呈诉摊丁「名为不加赋、实为增派」，请皇上裁夺。',
    body: '臣田文镜谨奏：\n\n摊丁入亩之议既行，河南、山西士绅联名呈诉者不下千人，其辞曰：丁银向由无地之民分摊，今改为有田者分摊，是「以有田之家代无田之民纳银」，名为不加赋，实为增派。\n\n臣窃谓：田多者出银多，田少者出银少，此乃正理。且丁银本为代丁之钱，一经摊归，编户齐一，逃户自返。\n\n然绅民之争，臣不敢不奏，请旨训谕。\n\n伏乞圣裁。',
    options: [
        { label: '明谕「丁银摊入田赋，贫民得免」之意，颁行天下', hint: '正面宣示，推行愈速', effects: { 'reforms.tandin': 18, publicSupport: 9, officialMorale: -6, severity: 6 }, log: '摊丁之议明谕天下，绅民之争遂定。' },
        { label: '曲徇绅情，略为变通，摊丁之额暂缓加增', hint: '折中，推稍缓', effects: { 'reforms.tandin': 8, publicSupport: 2, officialMorale: 4, mercy: 8 }, log: '摊丁之额暂缓加增，俟后再议。' },
        { label: '严旨申斥，究为首阻挠者', hint: '峻法推行，众怨集于皇上', effects: { integrity: 4, 'reforms.tandin': 22, publicSupport: 3, officialMorale: -10, severity: 14 }, log: '摊丁申斥遵旨，究办阻挠为首之徒。' }
    ]
}],

/* 八年三月士民当差之后 */
19: [{
    tag: '民变', tagName: '邸报 · 民变',
    year: 1730, month: 6,
    from: '直隶总督 李卫',
    title: '为直隶绅士聚众抗差事',
    summary: '保定一带绅士聚众鼓噪，拒纳当差，请旨处置。',
    body: '臣李卫谨奏：\n\n保定府属清苑、完县等处，绅士聚众鼓噪，拒纳当差，砸毁粮局，拥塞县门。臣已遣兵围拿，获首事者数名。\n\n然臣不敢遽办：此輩皆本地望族，其子多在京为官，若绳以法，恐激成大乱。\n\n臣请：\n\n一、先拿首事、胁从者，宽胁从而罚首恶；\n二、准当差之数，分为五等，士绅与庶民同例而不加倍；\n三、晓谕各府：皇上之意在均平，不在困士。\n\n伏乞圣裁。',
    options: [
        { label: '准其所议，罚首恶而宽胁从，当差分等', hint: '以退为进，保住新政', effects: { 'reforms.tuigu': 16, publicSupport: 8, officialMorale: 8, mercy: 10, severity: -4 }, log: '直隶抗差事，首恶数人枷号，胁从者免，当差分等行。' },
        { label: '尽捕为首者，族有从前有官者一并究办', hint: '雷霆震慑，众怨归朕', effects: { integrity: 4, 'reforms.tuigu': 10, publicSupport: 4, officialMorale: -8, severity: 16 }, log: '直隶抗差为首者尽捕究办，其党亦追。' },
        { label: '令抚臣便宜处置，毋庸奏请', hint: '授权地方，自担干系', effects: { integrity: 4, 'reforms.tuigu': 6, publicSupport: 2, 'officials.liwei': 6, severity: 6 }, log: '直隶抗差事，着李卫便宜处置。' }
    ]
}],

/* 九年月西陲预警之后 */
21: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1731, month: 10,
    from: '陕西总督 岳钟琪',
    title: '为军中疫疠并请给药事',
    summary: '西宁军中大疫，死者数百，请给药并许军中自防。',
    body: '臣岳钟琪谨奏：\n\n入秋以来，西宁城中及沿边营堡疫疠大作，士卒中染病者日以百计，殁者已数百人。医家云：此由秋燥水涸，秽气入人。\n\n臣已令各营将病者别居，给以医药，然仓中药品将尽。\n\n臣请：\n\n一、准由内地发医药二十万剂，并遣医士；\n二、准病卒给恤；\n三、各营宜预作防疫之制，毋俟既病而后治。',
    options: [
        { label: '准发医药遣医，并准病卒给恤', hint: '安军心，费帑', effects: { militaryStrength: 14, treasury: -25, officialMorale: 8, mercy: 8 }, log: '西宁军中大疫，发医药遣医，病卒给恤。' },
        { label: '止遣医药，兵丁病殁照例抚恤', hint: '省帑', effects: { militaryStrength: 6, treasury: -10, publicSupport: -4 }, log: '西宁军中大疫，遣医药不满，兵丁病殁照例抚恤。' }
    ]
}],

/* 十年六月西宁战之后 */
23: [{
    tag: '民生', tagName: '邸报 · 民生',
    year: 1732, month: 8,
    from: '户部尚书 允禄 等',
    title: '为京师米贵并请禁囤积平粜事',
    summary: '西边用兵，京师米价腾贵，奸商囤积居奇，请平粜并禁囤。',
    body: '臣等谨奏：\n\n西陲用兵，粮运浩繁，京师米价由每石一钱增至三钱，米铺闭门者有之。\n\n臣等访得奸商某某等，藉官籴之便，暗积居奇，每俟价昂而发；又有多牙行拦贩，抬高市价。\n\n臣等请：\n\n一、动京仓米平粜于市，毋得令价再昂；\n二、查禁囤积，囤户照例治罪；\n三、严禁铺户歇业，闭者重罚；\n四、禁一切捐输，以杜浮费。',
    options: [
        { label: '准动京仓平粜，并查办囤积奸商', hint: '市价即平，商贾怨', effects: { publicSupport: 9, treasury: -20, integrity: 14, severity: 6 }, log: '京师米贵，准动京仓平粜，奸商囤积者枷号。' },
        { label: '令各处官籴照旧，市价听其自然', hint: '不与民争利', effects: { treasury: 12, publicSupport: -8, mercy: 8 }, log: '京师米价，官籙如旧，不与民争利。' }
    ]
}],

/* 十一年八月吕留良拟罪之后 */
25: [{
    tag: '言官', tagName: '邸报 · 言官',
    year: 1733, month: 10,
    from: '江南道监察御史 某',
    title: '为江南士子呈词乞恩事',
    summary: '江南士子为曾静等呈词，乞皇上宽其刑，请示。',
    body: '臣谨奏：\n\n吕留良一案拟罪，严决在即。乃者江南士子数百人联名呈词，乞皇上「以好生为念」，言曾静等虽狂悖，然曾受父师之训，非有意悖逆；且其书已行于世，诛之恐无益。\n\n臣以为，律法者所以治天下，非所以快一人之忿。若众人呈词而许之，则此后人人得以「舆论」挠国法；若不许，则恐江南士林人人自危，弃举业而失业。\n\n伏乞圣裁。',
    options: [
        { label: '不允所请，刑照原拟', hint: '法立而心寒', effects: { integrity: 4, imperialPower: 14, publicSupport: 3, severity: 12, officialMorale: -8 }, log: '江南士子呈词不许，吕留良一案刑照原拟。' },
        { label: '许其呈词，然刑期稍宽，俟秋后执行', hint: '法与情两全', effects: { imperialPower: 8, publicSupport: 4, officialMorale: 4, mercy: 10 }, log: '许士子呈词，吕留良一案俟秋后执行。' },
        { label: '宽其家属田产，许其应试，第减等处分', hint: '留一线生机', effects: { publicSupport: 9, imperialPower: 4, officialMorale: 2, mercy: 14 }, log: '吕留良家属减等，宽其田产，仍许应试。' }
    ]
}],

/* 十二年五月取士之后 */
27: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1734, month: 7,
    from: '陕西巡抚 嵇曾筠',
    title: '为陕甘饥荒并请赈济事',
    summary: '陕甘连年不登，米价腾贵，乏食者众，请发帑赈济。',
    body: '臣嵇曾筠谨奏：\n\n陕甘二省，去岁今岁，甘肃河西尤苦不登，米价腾至平日五倍，贫民掘草根以食，甚至有鬻子者。\n\n臣已开常平仓，然仓中存数已虚，报表皆云「仓储空虚」，此必有虚报。\n\n臣请：\n\n一、准发内帑三十万两，遣官赈济；\n二、准以工代赈，兴修渠堰；\n三、严禁粮商囤积，犯者立枷；\n四、虚报仓储之州县，即行参处。\n\n伏乞圣裁。',
    options: [
        { label: '准发内帑三十万两，并查虚报仓储之州县', hint: '赈与查并重', effects: { publicSupport: 9, treasury: -45, integrity: 16, mercy: 10, severity: 6 }, log: '陕甘饥荒，发内帑三十万两赈济，并参处虚报仓储之州县。' },
        { label: '准发内帑二十万两，余以工代赈', hint: '省帑而以工养民', effects: { publicSupport: 7, treasury: -30, mercy: 8 }, log: '陕甘饥荒，发内帑二十万两，以工代赈兴修渠堰。' },
        { label: '令有司自行劝捐赈济，朝廷不另发帑', hint: '不费帑而民受累', effects: { integrity: 4, publicSupport: 3, treasury: 5, severity: 8 }, log: '陕甘饥荒，令有司劝捐赈济，朝廷不另发帑。' }
    ]
}],

/* 十三年三月鄂尔泰之后 */
29: [{
    tag: '边事', tagName: '邸报 · 边事',
    year: 1735, month: 4,
    from: '贵州巡抚 金德瑛',
    title: '为苗疆土司旧部煽动作乱事',
    summary: '已改土司旧部煽动苗民抗据流官，请调兵剿抚。',
    body: '臣金德瑛谨奏：\n\n本月苗疆台江、丹江一带，有已改土司之旧，藉「复其世职」为名，煽动苗民抗据流官，焚掠村寨，戕害土弁。\n\n臣已调土兵守御，惟兵力单薄。\n\n臣请：\n\n一、调邻近各省兵力协剿，并请发火器；\n二、限一月而平，毋得扰及良苗；\n三、贼首必擒，胁从之苗，愿抚者仍编为民籍。\n\n伏乞圣裁。',
    options: [
        { label: '准调兵进剿，限一月而平', hint: '兵威既定，苗民复惊', effects: { integrity: 4, 'reforms.tuigu': 10, militaryStrength: 8, publicSupport: 2, officialMorale: 4, severity: 12 }, log: '苗疆乱事，调兵进剿，限一月而平。' },
        { label: '专以抚为主，先谕以自新，逾限再剿', hint: '宽而活民，亦恐养奸', effects: { 'reforms.tuigu': 6, publicSupport: 4, mercy: 12, treasury: -10 }, log: '苗疆乱事，着先行招抚，逾限再剿。' },
        { label: '责成鄂尔泰未病时旧臣杨名时专办，朝廷不另发兵', hint: '不增兵而专责之', effects: { 'reforms.tuigu': 10, publicSupport: 2, militaryStrength: -4, treasury: -5 }, log: '苗疆乱事，着杨名时专办，朝廷不另发兵。' }
    ]
}],

/* 十三年五月田文镜之后 */
30: [{
    tag: '灾异', tagName: '邸报 · 灾异',
    year: 1735, month: 7,
    from: '江苏巡抚 尹继善',
    title: '为江南大水并漕运迟误事',
    summary: '苏松湖熟被淹，漕粮船不得运，请赈济并改运。',
    body: '臣尹继善谨奏：\n\n入夏以来，江浙梅雨，苏松湖熟之地大被水灾，圩岸冲决者数十处，米熟未割而田已成泽国。\n\n漕运因此迟误，粮船积于湖口，例限已迫。\n\n臣请：\n\n一、准动常平仓米赈济，并请拨粳米十万石；\n二、漕运准予展限，改由海运，以速其行；\n三、被灾田亩蠲免本年钱粮；\n四、严禁州县借蠲赋之名加派。',
    options: [
        { label: '准发粳米十万石，漕运改海运并展限', hint: '两难之事并解，费帑而民安', effects: { publicSupport: 9, treasury: -50, mercy: 12, militaryStrength: 4 }, log: '江南大水，发粳米十万石，漕运改海运以速行。' },
        { label: '准蠲免钱粮，赈济以常平仓米为限', hint: '省帑', effects: { publicSupport: 4, treasury: -15, mercy: 8 }, log: '江南大水，蠲免钱粮，以常平仓米赈济。' },
        { label: '漕运照限，不许展期，违者严参', hint: '保漕期而失民命', effects: { integrity: 4, treasury: 25, publicSupport: 4, severity: 12 }, log: '江南大水，漕运仍照旧限，不许展期。' }
    ]
}]

};

/* 随机灾异池：任何时点可触发 */
const RANDOM_EVENTS = [
    {
        tag: '灾异', tagName: '邸报 · 灾异', random: true,
        from: '钦差监粮御史',
        title: '为仓场失火事',
        summary: '常平仓失火，积谷被焚，请查究并补仓。',
        body: '臣谨奏：\n\n本月某处常平仓失火，焚毁谷米若干，石数与例额不符。\n\n臣查该处仓吏，近有重修仓廪之议，料价甚昂；又值仓中谷少，恐有抽粜之弊。\n\n臣请：\n\n一、准动帑补仓；\n二、准该处官吏交部严议；\n三、州县常平仓岁终一体报实，毋得虚额。',
        options: [
            { label: '准补仓，并将该处官吏交部严议', hint: '赈恤兼究弊', effects: { treasury: -12, publicSupport: 4, integrity: 12, severity: 8 }, log: '某处常平仓失火，准补仓，该处官吏交部严议。' },
            { label: '只准补仓，官吏免议', hint: '宽事省扰', effects: { treasury: -12, publicSupport: 2, mercy: 6 }, log: '某处常平仓失火，准动帑补仓而已。' }
        ]
    },
    {
        tag: '灾异', tagName: '邸报 · 灾异', random: true,
        from: '各州县 驿传',
        title: '为疫疠盛行事',
        summary: '闾阎之间疫疠盛行，请给药并禁聚众。',
        body: '臣谨奏：\n\n近月某处疫疠盛行，里巷之间室九病，医者亦多染而不救。\n\n臣已设局施药，然药资不足；且城隍庙会聚集多人，恐为传染之媒。\n\n臣请：\n\n一、准发药材，并令禁止赛会；\n二、准疫死之家给恤；\n三、令邻近州县毋得 sells 米与他处。',
        options: [
            { label: '准发药禁会，并给恤疫死之家', hint: '防疫恤民', effects: { publicSupport: 6, treasury: -15, mercy: 12, officialMorale: 6 }, log: '某处疫疠，准发药材、禁赛会，给恤疫死之家。' },
            { label: '禁会而已，药资令地方自筹', hint: '不费帑', effects: { publicSupport: 1, treasury: -5, mercy: 4, officialMorale: -4 }, log: '某处疫疠，禁止赛会，药资令地方自筹。' }
        ]
    },
    {
        tag: '灾异', tagName: '邸报 · 灾异', random: true,
        from: '钦天监',
        title: '为地震并请蠲恤事',
        summary: '某处地震，民房倾压，请查灾并免赋。',
        body: '臣谨奏：\n\n本月某处地震，声闻数十里，压毁民房甚多，伤人若干。\n\n臣已驰往赈给，然屋瓦木材无价，贫民露处。\n\n臣请：\n\n一、准给银修屋；\n二、准蠲免本年钱粮；\n三、令有司查报灾情，不得隐瞒虚报。',
        options: [
            { label: '准给银修屋并蠲免钱粮', hint: '费帑安民', effects: { publicSupport: 7, treasury: -25, mercy: 12 }, log: '某处地震，准给银修屋并蠲免钱粮。' },
            { label: '止蠲免钱粮，修屋之事听民自便', hint: '省帑', effects: { publicSupport: -4, treasury: -5, mercy: 4 }, log: '某处地震，准蠲免钱粮，修屋听民自便。' }
        ]
    },
    {
        tag: '民生', tagName: '邸报 · 民生', random: true,
        from: '江南道监察御史',
        title: '为盐价腾踊并请禁私盐事',
        summary: '两淮盐价腾贵，私盐充斥，请查禁并减价。',
        body: '臣谨奏：\n\n两淮盐价每斤腾至八文，贫民食盐过半。臣访得私盐贩子由某处入江，岁入私盐数十万斤，盐商反苦于无贩。\n\n臣请：\n\n一、严缉私盐；\n二、减盐价，毋许盐棍引户囤积；\n三、贫民食盐之费，取之常平，毋得加派。',
        options: [
            { label: '准查禁私盐并减盐价', hint: '民悦而盐课稍损', effects: { publicSupport: 8, treasury: -20, integrity: 10, mercy: 8 }, log: '两淮盐价腾踊，准查禁私盐并减盐价。' },
            { label: '只禁私盐，盐价听盐课定之', hint: '保课', effects: { treasury: 12, publicSupport: 2, integrity: 8 }, log: '两淮严禁私盐，盐价仍旧。' }
        ]
    },
    {
        tag: '灾异', tagName: '邸报 · 灾异', random: true,
        from: '河道总督',
        title: '为河工决口事',
        summary: '某处河堤决口，淹没数十村，请抢修并赈济。',
        body: '臣谨奏：\n\n本月某处河堤决口，淹没田亩村落数十，漂没人口无算。\n\n臣已率夫抢修，费银已逾十万，而下游之险未解。\n\n臣请：\n\n一、准发银抢修，并请增夫役；\n二、被淹州县蠲免钱粮；\n三、准于附近州县借夫给饷，事毕照数发还。',
        options: [
            { label: '准发银抢修并蠲免钱粮', hint: '塞决口为先', effects: { publicSupport: 7, treasury: -40, mercy: 8 }, log: '某处河堤决口，准发银抢修并蠲免钱粮。' },
            { label: '责成河道官自行筹办，仅准借夫', hint: '不另发帑', effects: { treasury: -12, publicSupport: -6, officialMorale: -6 }, log: '某处河堤决口，责成河道官自行筹办，准借夫给饷。' }
        ]
    },
    {
        tag: '言官', tagName: '邸报 · 言官', random: true,
        from: '监察御史',
        title: '为劾某官虚销事',
        summary: '御史纠劾某官虚销冒领，请旨查办。',
        body: '臣谨奏：\n\n臣访闻某省某官，于养廉银、火耗归公款项之下，多列名目，虚销冒领，岁至数千。\n\n臣尚未得实据，不敢遽劾，然风闻已久，恐成积弊。\n\n臣请：\n\n一、准令该省布政使细查账目；\n二、准臣密访，得实即劾。',
        options: [
            { label: '准其密访查劾', hint: '除弊于未萌', effects: { treasury: 10, integrity: 12, officialMorale: 6, secretMemorials: 1 }, log: '御史奉旨密访虚销之案。' },
            { label: '令布政使例行查账，不必密访', hint: '省事', effects: { treasury: 4, integrity: 6, officialMorale: 2 }, log: '御史所劾，令该省布政使例行查账。' }
        ]
    }
];
