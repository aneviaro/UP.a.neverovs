var articleModel=(function () {
    var articles = [{
        id: "1",
        title: "В Минске троллейбус сбил 86-летнего пенсионера.",
        summary: "Наезд произошел днем 27 февраля на столичной улице Ванеева.",
        createdAt: new Date("2017-02-27T16:00:00"),
        author: "Antony",
        content: "— По предварительной информации, 86-летний мужчина начал переходить дорогу вне пешеходного перехода и попал под троллейбус, который отъезжал от остановочного пункта, — сказали в ГАИ.",
        imgSource:"https://img.tyt.by/620x620s/n/avto/0c/6/c5qsk20xqaaekcq.jpg",
        imgStatus:"1",
        tags: ["происшествие", "Минск"],
    },
    {
        id: "2",
        title: "Людям предлагают сдавать кровь в ожоговый центр, где лечат пострадавших со скидельской фабрики",
        summary: "Состояние женщин, пострадавших во время взрыва на сахарном комбинате в Скиделе, тяжелое, сохраняется угроза жизни, рассказал Дмитрий Мазолевский, заведующий ожоговым отделением больницы скорой медицинской помощи.",
        createdAt: new Date("2017-02-27T16:05:23"),
        author: "Max",
        content: "Трех пациенток доставили из Гродно в Минск в субботу, в 19.35, транспортировку они перенесли удовлетворительно.По словам Дмитрия Мазолевского, женщин неоднократно осматривал врачебный консилиум, к двум другим пострадавшим, которые продолжают лечение в Гродно, выезжали для консультаций специалисты из ожогового центра.",
        imgSource: "https://img.tyt.by/620x620s/n/03/7/vzryv-skidel-ozhogovyy_centr-fev2017-belta.jpg",
        imgStatus:"1",
        tags: ["происшествие", "Гродно"],
    },
    {
        id: "3",
        title: "МИД: Беларусь продолжит взаимодействие с ЕС для полной отмены санкций",
        summary: "Белорусская сторона продолжит взаимодействие с ЕС в целях полной отмены санкций, заявили в МИД Беларуси, комментируя решение Евросоюза продлить на год оружейное эмбарго в отношении нашей страны и санкции в отношении четырех чиновников. В МИД отметили, что изначально исходят из того, что санкции несправедливы и контрпродуктивны.",
        createdAt: new Date("2017-03-06T16:22:20"),
        author: "Dr.Cormier",
        content: "Белорусская сторона продолжит взаимодействие с ЕС в целях полной отмены санкций, заявили в МИД Беларуси, комментируя решение Евросоюза продлить на год оружейное эмбарго в отношении нашей страны и санкции в отношении четырех чиновников. В МИД отметили, что изначально исходят из того, что санкции несправедливы и контрпродуктивны.",
        imageSource:"https://img.tyt.by/620x620s/n/politika/0e/10/es_belarus_flag_20160309_tutby_phsl_001.jpg",
        imgStatus:"1",
        tags: ["политика", "Евросоюз"],
    },
    {
        id: "4",
        title: "Жильцы домов по Скорины собирают подписи против строительства",
        summary: "Жильцы домов на улице Скорины собирают подписи против строительства научно-технологического парка «БелБиоград». Проект входит в план детального планирования застройки района, который сейчас обсуждают в Первомайском районе.",
        createdAt: new Date("2017-02-28T17:00:19"),
        author: "Dr.Cormier",
        content: "Жильцы домов на улице Скорины собирают подписи против строительства научно-технологического парка «БелБиоград». Проект входит в план детального планирования застройки района, который сейчас обсуждают в Первомайском районе.",
        imageSource:"https://img.tyt.by/620x620s/n/nedvizhimost/0e/5/skoriny_proekt_mal.jpg",
        imgStatus:"1",
        tags: ["недвижимость", "Минск"],
    },
    {
        id: "5",
        title: "До 50%. Где минчанам искать скидки в марте",
        summary: "Столичные универмаги и торговые сети в марте продолжат делать скидки. Об акциях на непродовольственные товары и датах их проведения сообщает главное управление потребительского рынка Мингорисполкома.",
        createdAt: new Date("2017-03-02T09:50:50"),
        author: "Vitalik",
        content: "Столичные универмаги и торговые сети в марте продолжат делать скидки. Об акциях на непродовольственные товары и датах их проведения сообщает главное управление потребительского рынка Мингорисполкома.",
        imageSource:"https://img.tyt.by/620x620s/n/zamirovskiy/0b/2/skidki_cum_20151010_zam_tutby_phsl_1520.jpg",
        imgStatus:"1",
        tags: ["торговля","Минск"]
    },
    {
        id: "6",
        title: "Пенные вечеринки уже не в моде. Репортаж с деревенской дискотеки, куда приезжают городские",
        summary: "Деревня Плебановцы Волковысского района — совсем маленькая, несколько десятков сельских домов. Из развлечений — только магазин и клуб. Поздно вечером на улице, освещенной несколькими фонарями, пустынно и очень тихо — местечко, кажется, замерло в ожидании ночи. Но когда местные жители засыпают, в сельском клубе только-только начинается все самое интересное.",
        createdAt: new Date("2017-03-02T17:31:34"),
        author: "Vitalik",
        content: "Деревня Плебановцы Волковысского района — совсем маленькая, несколько десятков сельских домов. Из развлечений — только магазин и клуб. Поздно вечером на улице, освещенной несколькими фонарями, пустынно и очень тихо — местечко, кажется, замерло в ожидании ночи. Но когда местные жители засыпают, в сельском клубе только-только начинается все самое интересное.",
        imageSource: "https://img.tyt.by/620x620s/n/regiony/0f/7/grodno_pledy_36_.jpg",
        imgStatus:"1",
        tags: ["общество","Волковысск"]
    },
    {
        id: "7",
        title: "В 2017 году в столице хотят продать 18 неиспользуемых объектов недвижимости",
        summary: "В Минске в 2017 году планируется выставить на аукцион 18 неиспользуемых объектов недвижимости, сообщила сегодня на оперативном совещании в мэрии директор «Минскгоримущества» Галина Степуренко, сообщает БЕЛТА.",
        createdAt: new Date("2017-02-06T15:39:20"),
        author: "Dr.Cormier",
        content: "В Минске в 2017 году планируется выставить на аукцион 18 неиспользуемых объектов недвижимости, сообщила сегодня на оперативном совещании в мэрии директор «Минскгоримущества» Галина Степуренко, сообщает БЕЛТА.",
        imageSource: "https://img.tyt.by/620x620s/n/buryakina/0a/10/minskiy_ispolnitelnyy_komitet_20161209_bur_tutby_phsl_-4511.jpg",
        imgStatus:"1",
        tags: ["общество","Минск"]
    },
    {
        id: "8",
        title: "В Пинске расследуют гибель 14-летнего подростка, который жаловался на высокую температуру",
        summary: "Пинские следователи проводят проверку по факту гибели 14-летнего подростка, сообщила TUT.BY официальный представитель управления Следственного комитета по Брестской области Марина Дранькова.",
        createdAt: new Date("2017-03-06T23:00:17"),
        author: "Alexandra",
        content: "Пинские следователи проводят проверку по факту гибели 14-летнего подростка, сообщила TUT.BY официальный представитель управления Следственного комитета по Брестской области Марина Дранькова.",
        imageSource: "#",
        imgStatus:"0",
        tags: ["общество","Пинск"]
    },
    {
        id: "9",
        title: "Отметил 23 февраля: в Минске сильно пьяный водитель на Opel врезался в столб.",
        summary: "В Минске пьяный водитель на Opel врезался в столб, после чего попытался убежать. Об этом AUTO.TUT.BY рассказала представитель ГАИ Московского района Любовь Трепашко.",
        createdAt: new Date("2017-O3-06T12:29:00"),
        author: "Vitalik",
        content: "В Минске пьяный водитель на Opel врезался в столб, после чего попытался убежать. Об этом AUTO.TUT.BY рассказала представитель ГАИ Московского района Любовь Трепашко.",
        imageSource: "https://img.tyt.by/620x620s/n/avto/06/7/3_pyanyy_voditel_opel_stolb_20170227.jpg",
        imgStatus:"1",
        tags: ["происшествие","Минск"]
    },
    {
        id: "10",
        title: "В Орше проходят суды над задержанными из-за Марша нетунеядцев. Первое решение— 13 суток",
        summary: "13 марта в Орше начались суды над активистами и журналистами, которые были задержаны после прошедшего в воскресенье «Марша нетунеядцев».",
        createdAt: new Date("2017-02-13T20:39:12"),
        author: "Max",
        content: "Утром в понедельник в здании суда собрались представители прессы — ожидается, что сегодня будут судить за участие в несанкционированном митинге корреспондента «Радыё Свабода» Галину Абакунчик и корреспондента телеканала «Белсат» Екатерину Андрееву (Бахвалову), а также оппозиционного политика Павла Северинца.",
		imageSource: "https://img.tyt.by/620x620s/n/01/0/sud_orsha_zdanie.jpg",
        imgStatus:"1",
		tags: ["Орша", "оппозиция"]
    },
    {
        id: "11",
        title: "Солнце, дожди и мокрый снег. В Беларуси на неделе ожидается неустойчивая погода",
        summary: "На этой неделе в Беларуси сохранится повышенный температурный режим, а чередование областей повышенного атмосферного давления и фронтальных разделов обеспечит неустойчивый характер погоды, рассказала TUT.BY заместитель начальника службы метеорологических прогнозов Светлана Рыбакова",        createdAt: new Date("2016-03-06T23:29:19"),
        author: "Cosima",
        content: "Во вторник, 14 марта, погодные условия будет определять область повышенного давления, обойдется без существенных осадков, ночью и утром возможен слабый туман. Ночная температура будет в основном −3…+3 °С, при ясном небе может подмораживать до −4…−6 °С, а вот днем стараниями весеннего солнца воздух будет прогреваться, и температура достигнет отметок +4…+10 °С. Среднесуточная температура останется на 3−6 °С выше климатических показателей и будет больше соответствовать началу апреля",
        imageSource: "https://img.tyt.by/620x620s/n/regiony/shablony/03/0/pogoda_osen_oktyabr_mogilev_3_.jpg",
        imgStatus:"1",
        tags: ["Минск", "погода"]
    },
    {
        id: "12",
        title: "ЕС призывает освободить всех задержанных на акциях протеста в Беларуси",
        summary: "Евросоюз призывает власти Беларуси немедленно освободить всех задержанных в ходе акций протеста. Об этом заявила БелаПАН пресс-секретарь Европейской службы внешних действий Майя Кочиянчич, комментируя ситуацию с задержаниями и арестами в стране.",
        createdAt: new Date("2017-03-01T08:23:10"),
        author: "Alexandra",
        content: "«Задержания и приговоры мирным демонстрантам, в том числе лидерам оппозиционных движений, находятся в противоречии с объявленной Беларусью политикой демократизации, — отметила она. — Европейский союз остается приверженным стабильному, демократическому и процветающему будущему Беларуси на благо ее народа и продолжит свою работу над этой целью. Мы призываем к немедленному освобождению задержанных».",
        imageSource: "#",
        imgStatus:"0",
        tags: ["Минск", "оппозиция"]
    },
    {
        id: "13",
        title: "На торгах 13 марта рубль заметно снизился к евро",
        summary: "На Белорусской валютно-фондовой бирже 13 марта прошли очередные торги валютами.",
        createdAt: new Date("2017-02012T09:20:30"),
        author: "Max",
        content: "Доллар снизился на BYN0,0019 — до 1,9122 рубля.Евро вырос на BYN0,0164 — до 2,0456 рубля.Российский рубль упал на BYN0,0005 — до 3,2353 рубля за 100 российских рублей.",
        imageSource:"#",
        imgStatus:"0",
        tags: ["валюта"]
    },
    {
        id: "14",
        title: "Лукашенко навестил компании Виктора Прокопени и поддержал создание ИТ-страны",
        summary: "Президент Беларуси Александр Лукашенко обещает дальнейшую поддержку развитию в стране IT-сферы. Об этом, передает корреспондент БЕЛТА, глава государства заявил сегодня, посещая в Минске две компании одного из самых эффективных белорусских айтишников, Виктора Прокопени.",
        createdAt: new Date("2017-02-02T12:23:25"),
        author: "Antony",
        content: "Александр Лукашенко заверил, что со стороны государства и впредь будет оказываться необходимое содействие, в том числе в части принятия необходимых нормативных правовых актов, определяющих условия работы организаций в данном секторе экономики. Вместе с тем он подчеркнул, что одним из основных требований является прозрачность и законность процессов с точки зрения ведения бизнеса, вопросов налогообложения.",
        imageSource:"https://img.tyt.by/620x620s/n/prezident/05/4/prokopenya_guceriev_lukashenko_-_1.jpg",
        imgStatus:"1",
        tags: ["Минск", "право"]
    },
    {
        id: "15",
        title: "Азаренко будет тренироваться у бывшего наставника Шараповой",
        summary: "Экс-первая ракетка мира белоруска Виктория Азаренко будет тренироваться под руководством бывшего наставника Марии Шараповой американца Майкла Джойса.",
        createdAt: new Date("2017-02-18T12:40:28"),
        author: "Cat223",
        content: "Виктория Азаренко, которая в декабре 2016 года родила сына, планирует вернуться в WTA-тур предстоящим летом и рассчитывает выступить на US Open.Сейчас Виктория Азаренко занимает в мировом рейтинге 17-е место, однако по итогам марта не выступавшая с мая 2016-го белоруска покинет топ-100.",
        imageSource:"https://img.tyt.by/620x620s/n/buryakina/06/c/intervyu_viktoriya_azarenko_20161014_bur_tutby_phsl_-5180-2.jpg",
        imgStatus:"1",
        tags: ["спорт"]
    },
    {
        id: "16",
        title: "Белорусские биатлонисты в Контиолахти показали лучший в сезоне результат в смешанной эстафете",
        summary: "Смешанной эстафетой в финском Контиолахти завершился сегодня 8-й этап Кубка мира по биатлону. Команда Беларуси, заняв 11-е место, показала свой лучший в нынешнем сезоне результат в этой дисциплине.",
        createdAt: new Date("2017-02-12T11:33:00"),
        author: "Franko",
        content: "Ранее микст-эстафета проводилась в этом сезоне дважды. На стартовом этапе Кубка мира в Эстерсунде белорусская дружина заняла 14-е место, а на чемпионате мира в Хохфильцене показала свой худший эстафетный результат в истории, став 22-й среди 25 команд.",
        imageSource: "https://img.tyt.by/620x620s/n/sport/0b/6/krivko-11-12-2016-1.jpg",
        imgStatus:"1",
        tags: ["спорт", "Беларусь"]
    },
    {
        id: "17",
        title: "100 лет тому назад: как появился конвейер, целлофан и нержавеющая сталь",
        summary: "XX век был полон важнейших научно-технических открытий, многие из которых так или иначе используются и по сей день. Какие изобретения прошлого столетия больше всего повлияли на дальнейший ход истории и какое развитие они получили в XXI веке, читайте в новом цикле статей 42.TUT.BY «100 лет инноваций».",
        createdAt: new Date("2017-03-02T19:12:25"),
        author: "Investigator",
        content: "Важность этого изобретения можно сравнить с разработкой первых паровых двигателей — оно произвело настоящую промышленную революцию и позволило существенно сократить сроки и стоимость изготовления множества вещей. Речь идет о массовом поточном производстве — конвейере.",
        imageSource:"#",
        imgStatus:"0",
        tags: ["наука", "предпринимательство"]
    },
    {
        id: "18",
        title: "Анонсированные изменения в декрет №3 направлены на то, чтобы спустить его на тормозах?",
        summary: "9 и 10 марта Лукашенко провел два совещания, которые взбудоражили всю страну и экспертное сообщество. На них президент отреагировал на события в стране, а именно марши белорусов, которые вышли протестовать против декрета № 3.",
        createdAt: new Date("2017-03-01T20:12:10"),
        author: "Olga",
        content: "В очередной программе Сергея Чалого «Экономика на пальцах» мы провели подробный анализ услышанного на этих мероприятиях. По мнению Сергея, новшества направлены на то, чтобы ближе к концу года тихо отменить спорный декрет.Помогала автору журналистка портала Ольга Лойко.",
        imgSource:"",
        imgStatus:"0",
        tags: ["политика", "Минск"]
    },
    {
        id: "19",
        title: "Не пропустите розыгрыш билетов на концерт группы Ленинград в Минске",
		summary: "В обновленном приложении «Афиша TUT.BY» появился новый раздел — «Розыгрыши билетов». Теперь вы можете попытать удачу и участвовать в розыгрышах билетов в кино, на концерты, спектакли, фестивали и другие культурные мероприятия. Сегодня стартует розыгрыш билетов на концерт группы Ленинград, который состоится в «Минск-Арене» 19 марта. Участие в розыгрыше продлится до 16 марта.",
		createdAt: new Date("2016-12-01T10:23:49"),
        author: "Andrew",
        content: "Для участия в розыгрыше билетов на концерт группы Ленинград вам необходимо:1. скачать приложение «Афиша» для iOS или Android;2. открыть раздел «Розыгрыши» и нажать «Участвовать».",
        imgSource: "",
        imgStatus:"0",
        tags: ["Минск", "культура"]
    },
    {
        id: "20",
        title: "В Бресте трое анархистов получили еще по пять суток, но уже за мелкое хулиганство",
        summary: "13 марта в суде Ленинского района Бреста рассмотрели административные дела в отношении трех участников третьего марша нетунеядцев, который прошел 5 марта в Бресте.",
        createdAt: new Date("2017-03-13T10:23:49"),
        author: "Cat223",
        content: "Молодые люди участвовали в акции в рядах анархистов и 6 марта уже были осуждены на 5 суток по ст. 23.34 КоАП за участие в несанкционированном массовом мероприятии.",
        imageSource:"https://img.tyt.by/620x620s/n/regiony/05/b/brest_marsh_tunejadcy_2017_3.jpg",
        imgStatus:"1",
        tags: ["Брест", "право"]
    }
];

    var tags = ["Брест", "Минск", "Гомель", "Орша", "Беларусь", "Евросоюз", "Пинск", "Волковысск", "Гродно",
			"право", "культура", "общество", "политика", "наука", "предпринимательство", "спорт", "валюта", "оппозиция", "погода", "происшествие", "торговля", "недвижимость"
];

    function compareDate(firstArticle, secondArticle) {
    if (firstArticle.createdAt - secondArticle.createdAt < 0) {
        return 1;
    } else {
        return -1;
    }
}

    function getArticles(skip, top, filterConfiguration) {
    skip = skip || 0;
    top = top || 19;

    if (filterConfiguration !== undefined) {
        var author = filterConfiguration.author || "";
        var dateFrom = filterConfiguration.dateFrom || new Date(-8640000000000000);
        var dateTo = filterConfiguration.dateTo || new Date(8640000000000000);
        var _tags = filterConfiguration.tags || [];
        var imgStatus = filterConfiguration.imgStatus||"";
    }

    var _articles = articles;

    if (filterConfiguration !== undefined) {
        _articles = _articles.filter(function (article) {
            if (article.author.indexOf(author) > -1) {
                return true;
            } else {
                return false;
            }
        });

        _articles = _articles.filter(function (article) {
            if (article.createdAt >= dateFrom && article.createdAt <= dateTo) {
                return true;
            } else {
                return false;
            }
        });
        _articles = _articles.filter(function (article) {
            if (article.imgStatus.indexOf(imgStatus)> -1) {
                return true;
            } else {
                return false;
            }
        });

    }
    if (_tags !== undefined) {
        _articles = _articles.filter(function (article) {
            var count = 0;
            for (var i = 0; i < article.tags.length; i++) {
                for (var j = 0; j < _tags.length; j++) {
                    if (article.tags[i] === _tags[j]) {
                        count++;
                    }
                }
            }
            if (count === _tags.length) {
                return true;
            }
            return false;
        });
    }

    _articles = _articles.slice(skip, skip + top);

    _articles.sort(compareDate);

    return _articles;
}

    function getArticle(id) {
    if (id === undefined) {
        return undefined;
    } else {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                return articles[i];
            }
        }
    }
}

    function validateTags(_tags, tags) {
    for (var i = 0; i < _tags.length; i++) {
        if (tags.indexOf(_tags[i]) < 0) {
            return false;
        }
    }
    return true;
}

    function validateArticle(article) {
    if (
        typeof article.id === "string" && article.id.length > 0 && getArticle(article.id) === undefined &&
        typeof article.title === "string" && article.title.length > 0 && article.title.length < 100 &&
        typeof article.summary === "string" && article.summary.length > 0 && article.summary.length < 200 &&
        article.createdAt instanceof(Date) &&
        typeof article.author === "string" && article.author.length > 0 &&
        typeof article.content === "string" && article.content.length > 0 &&
        article.tags !== undefined && article.tags.length > 0 && validateTags(article.tags, tags)) {
        return true;
    } else {
        return false;
    }
}

    function addArticle(article, tags) {
    if (!validateArticle(article, tags)) {
        return false;
    }
    articles.push(article);
    return true;
}

    function editArticle(id, article) {
    var _article = getArticle(id);

    if (article.title !== undefined) {
        _article.title = article.title;
    }
    if (article.summary !== undefined) {
        _article.summary = article.summary;
    }
    if (article.content !== undefined) {
        _article.content = article.content;
    }
    if (article.imageSource !== undefined) {
        _article.imageSource = article.imageSource;
    }
    if (article.tags !== undefined) {
        _article.tags = article.tags;
    }

    if (validateArticleForEdition(_article)) {
        article.title = _article.title;
        article.summary = _article.summary;
        article.content = _article.content;
        article.imageSource = _article.imageSource;
        article.tags = _article.tags;
        return true;
    } else {
        return false;
    }
}

    function validateArticleForEdition(article) {
    if (
        typeof article.id === "string" && article.id.length > 0 &&
        typeof article.title === "string" && article.title.length > 0 && article.title.length < 100 &&
        typeof article.summary === "string" && article.summary.length > 0 && article.summary.length < 200 &&
        article.createdAt instanceof(Date) &&
        typeof article.author === "string" && article.author.length > 0 &&
        typeof article.content === "string" && article.content.length > 0 &&
        article.tags !== undefined && article.tags.length > 0 && validateTags(article.tags, tags)) {
        return true;
    } else {
        return false;
    }
}

    function removeArticle(id) {
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].id == id) {
            articles.splice(i, 1);
            return true;
        }
    }
    return false;
}

    function addTag(tag) {
    if (tags.indexOf(tag.toLowerCase()) < 0) {
        tags.push(tag.toLowerCase());
        return true;
    } else {
        return false;
    }
}

    function removeTag(tag) {
        var tagIndex = tags.indexOf(tag.toLowerCase());
        if (tagIndex >= 0) {
            tags.splice(tagIndex, 1);
            return true;
        } else {
            return false;
        }
    }
    return {
    getArticles: getArticles,
    getArticle: getArticle,
    editArticle: editArticle,
    removeArticle: removeArticle,
    addArticle: addArticle,
    addTag: addTag,
    removeTag: removeTag,
    };
}());


var articlesRenderer = (function () {
    var pieceOfNewsTemplate;
    var headlinersTemplate;
    var actuallypieceOfNewsTemplate;
    var actuallyListNode;
    var latestListNode;
    var headlinersListNode;

    function init() {
         pieceOfNewsTemplate = document.querySelector("#pieceofnews_template");
         headlinersTemplate = document.querySelector("#headliner_template");
         actuallypieceOfNewsTemplate = document.querySelector("#actually_pieceofnews_template");
         actuallyListNode = document.querySelector(".actually");
         latestListNode = document.querySelector(".latest_news");
         headlinersListNode = document.querySelector(".headliners_list");
    }
    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }
    function renderHeadliner(article){
    var _headlinersTemplate = headlinersTemplate;

    _headlinersTemplate.content.querySelector(".headliner").dataset.id = article.id;
    _headlinersTemplate.content.querySelector(".preview_img").setAttribute("src", article.imageSource);
    _headlinersTemplate.content.querySelector(".headliners_h3").textContent = article.title;
    var tags = _headlinersTemplate.content.querySelector(".tags");
    tags.innerHTML = "";
    article.tags.forEach(function(tag){
        var item = document.createElement("a");
        item.innerHTML = "<a href=\"\">" +"#"+ tag + "</a>"+" ";
        tags.appendChild(item);
    });
    return _headlinersTemplate.content.querySelector(".headliner").cloneNode(true);
    }
    function renderPieceOfNews(article){
        var _pieceOfNewsTemplate = pieceOfNewsTemplate;

        _pieceOfNewsTemplate.content.querySelector(".pieceofnews").dataset.id = article.id;
        _pieceOfNewsTemplate.content.querySelector(".pieceofnews_h4").textContent = article.title;
        _pieceOfNewsTemplate.content.querySelector(".pieceofnews_summary").textContent = article.summary;
        _pieceOfNewsTemplate.content.querySelector(".author_date").textContent ="by"+" "+ article.author+","+" "+formatDate(article.createdAt);
        var tags = _pieceOfNewsTemplate.content.querySelector(".tags");
        tags.innerHTML = "";
        article.tags.forEach(function(tag){
            var item = document.createElement("a");
            item.innerHTML = "<a href=\"\">"+"#" + tag + "</a>"+" ";
            tags.appendChild(item);
        });
        return _pieceOfNewsTemplate.content.querySelector(".pieceofnews").cloneNode(true);
    }
    function renderActuallyPieceOfNews(article){
        var _actuallypieceOfNewsTemplate = actuallypieceOfNewsTemplate;

        _actuallypieceOfNewsTemplate.content.querySelector(".pieceofnews").dataset.id = article.id;
        _actuallypieceOfNewsTemplate.content.querySelector(".pieceofnews_h4").textContent = article.title;
        _actuallypieceOfNewsTemplate.content.querySelector(".pieceofnews_summary").textContent = article.summary;
        _actuallypieceOfNewsTemplate.content.querySelector(".author_date").textContent =" by"+" "+ article.author+","+" "+formatDate(article.createdAt);
        var tags = _actuallypieceOfNewsTemplate.content.querySelector(".tags");
        tags.innerHTML = "";
        article.tags.forEach(function(tag){
            var item = document.createElement("a");
            item.innerHTML = "<a href=\"\">"+"#" + tag + "</a>"+" ";
            tags.appendChild(item);
        });
        return _actuallypieceOfNewsTemplate.content.querySelector(".pieceofnews").cloneNode(true);
    }
    function renderHeadlinersArticles(_headliners){
    return _headliners.map(function(article){
        return renderHeadliner(article);
    })
    }function renderLatestArticles(latest){
        return latest.map(function(article){
            return renderPieceOfNews(article);
        })
    }
    function renderActuallyArticles(actually){
        return actually.map(function(article){
            return renderActuallyPieceOfNews(article);
        })
    }

    function insertHeadlinersArticlesToDOM(articles){
    var articlesNodes = renderHeadlinersArticles(articles);
    articlesNodes.forEach(function(node){
        headlinersListNode.appendChild(node);
    })
    }
    function insertLatestToDOM(articles){
        var articlesNodes = renderLatestArticles(articles);
        articlesNodes.forEach(function(node){
            latestListNode.appendChild(node);
        })
    }
    function insertActuallyToDOM(articles){
        var articlesNodes = renderActuallyArticles(articles);
        articlesNodes.forEach(function(node){
            actuallyListNode.appendChild(node);
        })
    }
    function removeHeadlinersFromDOM(){
    headlinersListNode.innerHTML= "";
    }
    function removeLatestFromDOM(){
        latestListNode.innerHTML= "";
    }
    function removeActuallyFromDOM(){
        actuallyListNode.innerHTML="";
    }
    return{
    init:init,
    insertHeadlinersArticlesToDOM:insertHeadlinersArticlesToDOM,
    insertLatestToDOM: insertLatestToDOM,
    insertActuallyToDOM: insertActuallyToDOM,
    removeHeadlinersFromDOM:removeHeadlinersFromDOM,
    removeLatestFromDOM:removeLatestFromDOM,
    removeActuallyFromDOM:removeActuallyFromDOM,
    };
    }());


function renderArticles() {
        articlesRenderer.removeHeadlinersFromDOM();
        articlesRenderer.removeLatestFromDOM();
        articlesRenderer.removeActuallyFromDOM();
        var latest = articleModel.getArticles(0,10);
        var _headliners = articleModel.getArticles(7,2,{imgStatus:"1"});
        var actually = articleModel.getArticles(11,19);
        articlesRenderer.insertHeadlinersArticlesToDOM(_headliners);
        articlesRenderer.insertLatestToDOM(latest);
        articlesRenderer.insertActuallyToDOM(actually);
}
function startApp() {
    articlesRenderer.init();
    renderArticles();
}
document.addEventListener('DOMContentLoaded', startApp);