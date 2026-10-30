/* ===================== 雍正十年 ===================== */
{
    year: 1732, month: 6,
    from: '陕西总督 岳钟琪',
    title: '为准噶尔大举入寇并急请援兵事',
    summary: '准噶尔十余万众越境犯西宁，鏖战告急，请发京兵内帑。',
    body: '臣岳钟琪谨奏：\n\n本年准噶尔部噶尔丹策零果率众十余万，自西北方向深入，直抵我西宁、宗哲、格尔术一带。臣与副将杨应琚等分路迎击，于宗哲大败之，斩获甚众。\n\n然敌众我寡，鏖战竟日，我军伤亡亦重。准噶尔已转而西趋，直扑西宁。臣与杨应琚合兵坚守，环城鏖战，胜负未分。\n\n臣请：调京师火器营、绿营兵四千，遣轻骑昼夜兼程驰援；并请发内帑以赏军士，将士离心之际，非厚赏不能久战。\n\n兵事瞬息，请速赐敕书。',
    zhupi: '所奏是。准噶尔敢如此，朕必以方略待之。援兵即日发出，内帑即发，火器军械毋惜。卿等勉力，朕当为卿等之后盾。',
    mize: '密报：臣按：宗哲一战，我军斩获数千，而准噶尔实亡者不及千人，其中大半为我军驱赶之虏民。战报多饰，将帅好名。\n\n又，西宁城中运使丁氏专权，督饷严酷，士卒怨之。准噶尔未至，已有一半军心浮动。\n\n又，皇上若以京兵四万驰援，则准噶尔必引众西走，恐我师深入而粮不继。此中机宜，惟皇上与大将军决之。',
    options: [
        { blindRisk: true, label: '尽发京畿精兵驰援，并厚赏军士', hint: '救燃之急，靡费甚巨', effects: { militaryStrength: 22, treasury: -90, imperialPower: 8, officialMorale: 12, severity: 4 }, log: '京畿劲旅驰援西宁，内帑犒赏三军。' },
        { label: '调兵数万，由将帅自行节制', hint: '将权下移，有尾大不掉之虞', effects: { militaryStrength: 14, treasury: -55, imperialPower: -6, 'officials.longkodo': 8 }, log: '援兵赴西，敕令诸将便宜行事。' },
        { label: '坚守不战，闭关以待其敝', hint: '耗尽敌力，代价是失地失民', effects: { integrity: 4, militaryStrength: 4, publicSupport: 4, treasury: -40, severity: 6 }, log: '西宁闭关固守，坚壁清野。' },
        { label: '先撤丁氏、散怨卒，以援兵当其锋而勿追深入', hint: '知情方略——先固内部再谈战', needMize: true, effects: { militaryStrength: 18, treasury: -60, officialMorale: 16, publicSupport: 3, integrity: 12, secretMemorials: 1 }, log: '西宁运使丁氏被劾罢，援兵至而不追，敌气自衰。' }
    ]
},
{
    year: 1732, month: 11,
    from: '云贵总督 鄂尔泰',
    title: '为滇南赈恤并请颁土司归流期限事',
    summary: '滇南大旱，苗民乏食，请赈济并定土司归流之期。',
    body: '臣鄂尔泰谨奏：\n\n本年滇南大旱，米价腾贵三倍，苗民乏食者数十万。臣已开仓赈济，饬各府州县设厂施粥，并准以工代赈，兴修水利。\n\n然仓储有限，赈济须请增拨。又黔省已改土归流之六十余处，请定期限：限内愿改者许其保留土职，仍纳赋役；限外仍恃险不法者，悉照内地例治罪。\n\n臣以为宽严之间，须有定则。\n\n伏乞圣裁。',
    zhupi: '所奏是。赈恤之事，着即拨银三十万两，并令各省常平仓核实出借。土司归流之限期，着即颁行，毋得再缓。',
    mize: '密报：云南之旱，起于去秋少雨，今夏又值沱雨；兼之九龙井盐场纠纷未结，盐价腾踊，米益贵。臣又闻：黔中苗民有「以夷制夷」旧案，官府不察，一味剿抚并用，恐激成他变。\n\n又，苗疆以工代赈，所修皆水利；而彼中苗民，不谙工价，若无总管约束，必生冒领。',
    options: [
        { label: '准其赈恤并颁限期，苗疆从严', hint: '救急兼立制', effects: { publicSupport: 11, 'reforms.tuigu': 15, treasury: -40, 'officials.eertai': 10, officialMorale: 6, severity: 5 }, log: '滇南赈济发粟，苗疆归流限期颁行。' },
        { label: '大发帑银赈济，归流从缓', hint: '先救人', effects: { publicSupport: 10, treasury: -55, 'reforms.tuigu': 6, 'officials.eertai': 6, mercy: 10 }, log: '发内帑三十万两赈滇南，归流之限暂缓。' },
        { label: '令地方自筹，止给常平仓米', hint: '省钱', effects: { publicSupport: -12, treasury: -10, 'reforms.tuigu': 8, severity: 4 }, log: '滇南就常平仓赈济，赈务不继。' },
        { label: '先理九龙井盐场，盐价一平则米价自落', hint: '知情方略——先解其结', needMize: true, effects: { publicSupport: 12, treasury: -25, 'reforms.tuigu': 12, 'officials.eertai': 8, integrity: 12, mercy: 8 }, log: '九龙井盐场争讼得决，滇南盐米之价俱平。' }
    ]
},

/* ===================== 雍正十一年 ===================== */
{
    year: 1733, month: 8,
    from: '刑部尚书 裴景馥 等',
    title: '为吕留良曾静案拟罪事',
    summary: '大逆之案拟罪已定，请旨核准处决之式。',
    body: '臣等谨奏：\n\n吕留良著述一案，著书已悉数销毁。门徒曾静、张熙及陈世运等七人，审拟凌迟处死；沈光世等发往军台；其余家属及徒党，概免追究。\n\n曾静投递书一案，虽其本人有可原之情，然其书传播于外，煽惑多人，非一人一时之事。若不严办，则后患无穷。\n\n臣等反复筹酌：\n\n一、曾静等，照律凌迟处死，枭首示众；\n二、张熙等，律应收监，俟减等；\n三、亲属免死，酌给口粮田亩，使其自活；\n四、仍许曾静家属与吕氏后人应试，一体除籍开科。\n\n伏乞圣裁。',
    zhupi: '此案重大，朕亲自阅牍。着照所拟，曾静、张熙等凌迟处死，枭首示众。亲属一概免罪，不在株连之列。',
    mize: '密报：曾静家属已远出湖南，寄匿江浙、四川等处。臣以为，若不严加缉捕，则律法之设，反为宵小所笑。\n\n又：此案株连之议，朝中分为两派。张廷玉主严，刑部官多主宽。年羹尧案未了，天下恐疑朝廷自相矛盾。\n\n又：江西陆生楠所著《存疑》一书，其书中多有诋毁本朝之语，与此案相类。皇上若不并究，则人以为宽；并究则人以为酷。',
    options: [
        { blindRisk: true, label: '照拟严办，立威于天下', hint: '震慑有力，江南士林寒心', effects: { integrity: 4, imperialPower: 15, publicSupport: 4, officialMorale: -12, severity: 16, 'officials.zhangTingyu': 8 }, log: '曾静、张熙等凌迟枭首，律法森然。' },
        { label: '杀一儆百，余者从宽发遣', hint: '折中', effects: { imperialPower: 8, publicSupport: 1, officialMorale: 2, mercy: 6 }, log: '曾静等处死，余党从宽发遣。' },
        { label: '缓刑一年，以观舆论', hint: '失律法之威', effects: { publicSupport: 6, imperialPower: -10, officialMorale: -8, mercy: 12 }, log: '此案暂行，俟明年再拟。' },
        { label: '并究陆生楠《存疑》一案，使之无可遁饰', hint: '知情方略——不留后患', needMize: true, effects: { integrity: 4, imperialPower: 18, publicSupport: 5, officialMorale: -14, severity: 20, secretMemorials: 2 }, log: '曾静等处死，陆生楠《存疑》一并销毁究办。' }
    ]
},
{
    year: 1733, month: 12,
    from: '内务府 圆明园工程',
    title: '为奏报圆明园工程事',
    summary: '圆明园已成宫室苑囿之盛，请增修殿宇并添设守卫。',
    body: '臣等谨奏：\n\n圆明园自雍正三年蒙皇上修建，今已成宫室苑囿，殿宇台榭相望，规制宏丽。诸景命名皆出御笔，海内仰观者莫不为非常。\n\n今请增修：\n\n一、增建殿宇楼阁数十所，工银请由内帑核给；\n二、添设守卫三千人，分隶八旗、包衣；\n三、园中工匠、匠役，照例保结，不得私募；\n四、园中舟船、什物，造册报部；\n五、园外河道，疏浚一次，以备舟行。\n\n伏乞圣裁。',
    zhupi: '知道了。工程之事，务要精工，不得浮报。守卫仍用内府人，朕另有裁处。',
    mize: '密报：圆明园之用银，近三年已逾百万，工部所报与实际不符者十之三四。营造之内臣，采买木石，每多虚价。臣又闻：皇上以圆明园为每日听政之所，然园外护卫仍沿用旧制，与紫禁城同，未免单薄。',
    options: [
        { label: '准予增修，并严核工银', hint: '园成而帑不虚耗', effects: { treasury: -40, officialMorale: 8, imperialPower: 4, publicSupport: -4, integrity: 12 }, log: '圆明园增修，而工银严核，工价一钱不虚。' },
        { label: '停工省帑，专心西陲军务', hint: '以战为先', effects: { treasury: 25, militaryStrength: 8, publicSupport: 4, mercy: 6 }, log: '圆明园增修之议暂停，帑银转备军需。' },
        { label: '照议增修，加固园防', hint: '享乐与安全兼顾', effects: { treasury: -70, imperialPower: 6, officialMorale: -6, severity: 2 }, log: '圆明园增修殿宇，守卫加至五千。' },
        { label: '增修而不加银，令工部以节余之银充之', hint: '知情方略——不另开新例', needMize: true, effects: { treasury: -15, officialMorale: 10, integrity: 14, imperialPower: 4 }, log: '圆明园增修，工银取之节余，内帑不多费一钱。' }
    ]
},

/* ===================== 雍正十二年 ===================== */
{
    year: 1734, month: 5,
    from: '吏部尚书 鄂尔泰 等',
    title: '为增广取士并请别立科目事',
    summary: '科目取士太隘、真才不得，请增额并别立科目。',
    body: '臣等谨奏：\n\n皇上锐意求才，而科目所取，童试入学，动辄数千；乡会中式之额，日增不减；而真能读书者，未必能中式。\n\n臣请：\n\n一、增广取士之额，宽一分登进之路；\n二、别立科目，择《四书》《五经》之外有益经济之学，别为取士；\n三、乡会中式之额，宁可从宽，不可过隘；\n四、严查捐纳之滥，公捐不得折实数。\n\n伏乞圣裁。',
    zhupi: '所奏是。取士之制，所以得天下之才，不可私心于科目。着吏部会同礼部详议具奏。',
    mize: '密报：捐纳之滥，已至有捐至「员外郎」而实不任事者。某部以捐务虚报，岁入银数十万，其实入库者不及一半。臣以为：此弊与吏治相表里，不清则仕途不清。\n\n又，皇上自即位以来，殿试多取翰詹，年年如此，而科目之额日增；士子以为只要工文章即可中式，吏事荒疏者亦登科目。',
    options: [
        { label: '准增额别科，并严禁捐纳', hint: '广收真才，士林大悦', effects: { officialMorale: 18, publicSupport: 7, treasury: 15, 'reforms.tuigu': 10, integrity: 12 }, log: '增广取士，别立科目，捐纳从严。' },
        { label: '仅增额，别科徐议', hint: '稳', effects: { officialMorale: 10, publicSupport: 4, treasury: 8 }, log: '乡会中式之额增广，别科暂缓。' },
        { label: '维持旧制，专意各省实务', hint: '不轻改制度', effects: { officialMorale: 4, treasury: 20 }, log: '取士之制仍旧，一意经理封疆。' },
        { label: '别立科目，取经济实用之学，并许吏员考试铨选之法', hint: '知情方略——真取实务之才', needMize: true, effects: { officialMorale: 22, publicSupport: 8, treasury: 10, integrity: 16, 'reforms.tuigu': 12, secretMemorials: 1 }, log: '别立实务科目，吏员考试铨选之法并行，仕途一新' }
    ]
},
{
    year: 1734, month: 11,
    from: '户部尚书 允禄 等',
    title: '为整顿钱法并请增铸制钱事',
    summary: '钱质私薄、销钱为利，请严禁私铸销钱并增铸制钱。',
    body: '臣等谨奏：\n\n铜钱者，所以通百物、便民用。年来私铸之弊渐炽：或掺杂铅锡，或剪边薄肉，一钱之铜，得钱三四。海内钱价日低，物价日昂。\n\n又江浙、湖广诸处，私销之厂，动以千计，毁钱铸器，一县之钱不足以供一厂之炉。\n\n臣请：\n\n一、私铸之罪，照例严处，不许宽纵；\n二、销钱之厂，悉行查禁，令州县具结永禁；\n三、增铸制钱，以足民用；\n四、各省钱价，着地方官随时酌定，务使钱与物价相称；\n五、收买之铜，悉由官给价，不许私买。',
    zhupi: '所奏是。钱法关系天下，不可不整。着各省严查私铸销钱，朕不吝重赏，亦不宽宥一字。',
    mize: '密报：查得某省私铸之案，其人系一已革职官员之子，藩司为之回护。臣另有一条证据在手，未敢遽发，请旨。\n\n又，铜价近来日昂，私商收买之数已过官价三倍。若不官给价收买，则私炉必不能禁，而增铸之铜亦将为所夺。',
    options: [
        { label: '严查到底，不论官绅一体究办', hint: '肃清钱法，触动人众', effects: { treasury: 25, publicSupport: 7, officialMorale: 12, 'reforms.tandin': 8, integrity: 14, severity: 8 }, log: '私铸销钱严查，江浙楚各省多设钱厂收其炉具。' },
        { label: '并准所奏，但许自首者免罪', hint: '网开一面以取证', effects: { treasury: 15, publicSupport: 4, officialMorale: 6, mercy: 6 }, log: '钱法严查，自首者免，首获者赏。' },
        { label: '止增铸制钱，查禁之事从缓', hint: '治标', effects: { treasury: -20, publicSupport: -6 }, log: '增铸制钱，私铸之查暂缓。' },
        { label: '官给价收买铜斤，使私无利可图', hint: '知情方略——釜底抽薪', needMize: true, effects: { treasury: 20, publicSupport: 8, officialMorale: 14, integrity: 18, 'reforms.tandin': 10, secretMemorials: 1 }, log: '官给价收买铜斤，私炉无利可图，钱法乃清。' }
    ]
},

/* ===================== 雍正十三年 ===================== */
{
    year: 1735, month: 3,
    from: '大学士 张廷玉 等',
    title: '为鄂尔泰病笃乞骸骨并请预定继任事',
    summary: '鄂尔泰病笃，请准其休养，并简大员交代苗疆方略。',
    body: '臣等谨奏：\n\n云贵总督鄂尔泰，自任事以来，经理西南，苗疆之政赖以大定。今其自上年秋间咳血不止，近益笃，饮食不进，形容枯槁，医者言已无时日。\n\n其恳请乞骸骨。臣等公同计议，宜准其休养，以全其功。惟苗疆新定，方略不可中辍，请预简大员一二人，先赴滇黔交代方略，俟其病愈，尚可商榷。\n\n又鄂尔泰所举之人如杨名时等，上试用之外，别无他议。\n\n伏乞圣裁。',
    zhupi: '知道了。着准鄂尔泰在任养病，朝廷事有紧急，召来奏对。苗疆交代，着杨名时先行赴任，不必待朕再旨。',
    mize: '密报：鄂尔泰病笃，其家已置办身后之物，田宅之数，较入滇时增至三倍。臣又闻：鄂尔泰所办苗疆一案，耗银数十万，而苗疆并未大安。案卷之中，或有不尽实之处。\n\n然其功亦不可没。臣以为：功过俱在史册，惟皇上裁之。\n\n又，鄂尔泰与怡亲王素不相能；今怡亲王已薨，皇上若不早定其继，黔中必有争。',
    options: [
        { label: '准其致仕，厚给恤典', hint: '保全功臣体面', effects: { officialMorale: 10, 'officials.eertai': 10, treasury: -20, publicSupport: 3, mercy: 8 }, log: '鄂尔泰致仕归里，赐银不给。' },
        { label: '留任待死，交代后事', hint: '不放人，功高而不终', effects: { 'reforms.tuigu': 10, officialMorale: -6, 'officials.eertai': -10, severity: 6 }, log: '鄂尔泰留任待疾，苗疆方略交代而后去。' },
        { label: '其功其过，一并付史馆核实', hint: '留一笔明白账', effects: { officialMorale: 14, publicSupport: 3, integrity: 14, secretMemorials: 1 }, log: '鄂尔泰平苗一案，交史馆核实立传。' },
        { label: '不问功过，先简杨名时赴黔，以防苗疆生变', hint: '知情方略——先安其局', needMize: true, effects: { 'reforms.tuigu': 16, publicSupport: 6, officialMorale: 8, 'officials.eertai': 6, integrity: 8 }, log: '杨名时先赴滇黔接任，苗疆如故。' }
    ]
},
{
    year: 1735, month: 5,
    from: '直隶总督 李卫',
    title: '为田文镜病故并请旌表廉吏事',
    summary: '田文镜病故河南任上，请赠恤并旌表天下清官。',
    body: '臣李卫谨奏：\n\n河南巡抚田文镜，于本月病卒于任所，年七十。臣亲至其家，见其室无余财，惟旧衣数件、俸银账册而已。\n\n其在山西、河南两任，共行火耗归公之法，清查亏空，严惩贪墨，吏民至今称之。然其性峻急，劾人不择贤不肖，怨者亦多。\n\n臣请：\n\n一、赠太子少保，予祭葬，如其意；\n二、于河南立祠，与李敏、于成龙诸先贤同祀；\n三、于各省旌表清官，以风劝末俗。',
    zhupi: '知道了。田文镜清慎，朕所深知。准予祭葬，立祠于河南。旌表清官之事，交吏部定例。',
    mize: '密报：田文镜所行火耗归公，其所以能行者，因其在山西有年羹尧为其撑腰；及在河南，则赖皇上之力为之后盾。继任者若不知所以然，则前功尽弃。\n\n又：田文镜与鄂尔泰不和，其死，鄂之党中或有言。皇上若此时旌表田文镜，恐鄂尔泰之党不安；然若不旌，则河南百姓不服。',
    options: [
        { label: '厚赠立祠，并定火耗归公之成例', hint: '让改革成为制度而非个人', effects: { 'reforms.huohao': 26, publicSupport: 7, officialMorale: 14, treasury: -20, integrity: 12 }, log: '田文镜立祠河南，火耗归公著为成例。' },
        { label: '厚赠立祠，不另立新例', hint: '守成', effects: { officialMorale: 8, publicSupport: 3, 'reforms.huohao': 8, treasury: -15 }, log: '田文镜立祠河南，朝野追思。' },
        { label: '成例可立，而祠不必建', hint: '省帑且免地方攀附', effects: { 'reforms.huohao': 18, officialMorale: 6, treasury: 8, integrity: 8 }, log: '火耗归公著为成例，河南不建生祠。' },
        { label: '立祠而缓其神位，以待身后定谥', hint: '知情方略——两存其平', needMize: true, effects: { 'reforms.huohao': 22, publicSupport: 8, officialMorale: 10, treasury: -10, mercy: 6 }, log: '河南为田文镜立祠而缓题神位，其谥俟公议。' }
    ]
},
{
    year: 1735, month: 8,
    from: '诸王大臣 全体',
    title: '为请上尊号并预议建储事',
    summary: '在位日久，中外同庆，请上尊号并早定储位。',
    body: '臣等谨奏：\n\n皇上御宇十三年，励精图治，宵旰不遑。今海宇承平，仓库有余，兆民称庆。\n\n群工以谓宜上尊号曰「敬天勤民皇帝」，以彰功德；并宜早建储贰，以安宗社之心。\n\n臣等不敢擅决，恭候圣裁。\n\n（奏本附：诸王大臣等咸以皇上春秋鼎建，不宜遽言传位，然储贰之事，终不可不议。）',
    zhupi: '尊号不必。朕一生不为虚名。储贰之事，朕自有安排，汝等毋得妄议。',
    mize: '密报：皇上龙体不豫已久，宫中医药皆出于内大臣之手，外廷所知者少。怡亲王允祥已薨，皇上失一臂膀。皇上四子中，弘历长于诸子，然其人外圆滑而内有城府。诸王大臣于储事之上，观望者多，异议者亦不少。\n\n又：皇上此数月，召大臣，语及身后者再四，而每次皆言「朕自有安排」。若皇上真有安排，则储事可定；若竟无安排，则国家之祸在此一举。',
    options: [
        { label: '固辞尊号，仍密定储贰', hint: '不居虚名，稳宗社', effects: { imperialPower: 14, publicSupport: 4, officialMorale: 8, secretMemorials: 1 }, log: '上尊号固辞，储贰之事密定于内阁与宗人府。' },
        { label: '受尊号以安人心，储事再议', hint: '取现实之稳', effects: { publicSupport: 9, imperialPower: -4, officialMorale: 4, treasury: -30 }, log: '皇上受尊号「敬天勤民皇帝」，储事暂缓。' },
        { label: '一切不问，专心养病', hint: '拖', effects: { imperialPower: -12, officialMorale: -8, publicSupport: -4 }, log: '尊号与储事俱搁置，皇上专意调摄。' },
        { label: '密召张廷玉、允禄等定密诏，预作两手之备', hint: '知情方略——先定密诏再示人', needMize: true, effects: { imperialPower: 16, publicSupport: 6, officialMorale: 10, 'officials.zhangTingyu': 10, secretMemorials: 2 }, log: '储贰密诏预拟两稿，藏之御前。' }
    ]
},
{
    year: 1735, month: 10,
    from: '大学士 张廷玉 等',
    title: '为皇上大行并颁遗诏事',
    summary: '皇上大行，谨奉遗诏，谨拟尊谥庙号。',
    body: '臣等谨奏：\n\n皇上大行于雍正十三年八月二十三日寅时。臣等哀恸无已。\n\n遗诏付托：着皇四子弘历继位，是为乾隆皇帝。\n\n遗诏之中，朕另有数行付托，嘱军机大臣、大学士等善辅冲子，勿得专权，勿得结党。\n\n臣等伏读遗诏，痛绝失声。谨拟尊谥号曰「毅皇帝」，庙号曰「世宗」，拟谥法如下：\n\n刚毅决断、内外兼优、曰毅。\n\n伏乞裁定。',
    zhupi: '知道了。尊谥庙号，照所拟。朕之身后事，付托诸卿。朕一生所经营者，尽在平反宗室、清理积弊、刷新治三事。诸卿善守之，勿坠。',
    mize: '（密折）臣张廷玉谨奏：先帝一朝，十三载之功，毁誉在朝廷。今上已定，奴才等惟有尽心而已。\n\n附：先帝曾自言「朕一生为是不够勤勉」，又言「朕得年羹尧之力，亦受年羹尧之累」。此二语，臣记之。',
    options: [
        { blindRisk: true, label: '准谥毅皇帝、庙号世宗', hint: '盖棺定论', effects: { imperialPower: 10, publicSupport: 7, officialMorale: 12, treasury: -40 }, log: '尊谥毅皇帝，庙号世宗，葬清西陵泰陵。' },
        { label: '典礼从厚，命儒臣纂修实录，以彰十三年之功', hint: '身后之名，付之史笔', effects: { publicSupport: 10, officialMorale: 16, imperialPower: 4, treasury: -30 }, log: '敕修世宗实录，礼官奏仪从厚。' }
    ]
}
];
