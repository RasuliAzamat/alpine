const hello_message = 'Ассаляму алейкум ва рахматуллахи ва баракятуху! Приветствую!'

const admins_cb = [
    {
        name: 'Азамат',
        username: 'rslazamat',
        isCryptobro: 'Это наш криптобрат — Азамат. Смело продолжай разговор )',
    },
    {
        name: 'Гусейн',
        username: 'zayntigr',
        isCryptobro: 'Это наш криптобрат — Гусейн. Смело продолжай разговор )',
    },
    {
        name: 'Ахмад',
        username: 'E_G_O_S',
        isCryptobro: 'Это наш криптобрат — Ахмад. Смело продолжай разговор )',
    },
    {
        name: 'Сулейман',
        username: 'suleyman_crypto',
        isCryptobro: 'Это наш криптобрат — Сулейман. Смело продолжай разговор )',
    },
    {
        name: 'Малик',
        username: 'Yusupov_Malik_1',
        isCryptobro: 'Это наш криптобрат — Малик. Смело продолжай разговор )',
    },
    {
        name: 'Дарья',
        username: 'dashaklei',
        isCryptobro: 'Это наша криптосестра — Дарья. Смело продолжай разговор )',
    },
    {
        name: 'Ахлиддин',
        username: 'im_fendy',
        isCryptobro: 'Это наш криптобрат — Ахлиддин. Смело продолжай разговор )',
    },
    {
        name: 'Евгений',
        username: 'EvgenyRerikh',
        isCryptobro: 'Это наш криптобрат — Евгений. Смело продолжай разговор )',
    },
    {
        name: 'Шамси',
        username: 'shamsee_a',
        isCryptobro: 'Это наш криптобрат — Шамси. Смело продолжай разговор )',
    },
    {
        name: 'Баке',
        username: 'Bake1111111',
        isCryptobro: 'Это наш криптобрат — Баке. Смело продолжай разговор )',
    },
    {
        name: 'Нурлан',
        username: 'nurekeT',
        isCryptobro: 'Это наш криптобрат — Нурлан. Смело продолжай разговор )',
    },
    {
        name: 'Расул',
        username: 'Rasul164',
        isCryptobro: 'Это наш криптобрат — Расул. Смело продолжай разговор )',
    },
    {
        name: 'Хава',
        username: 'she_wo1f',
        isCryptobro: 'Это наша криптосестра — Хава. Смело продолжай разговор )',
    },
    {
        name: 'Оззи',
        username: 'Ozzysndk',
        isCryptobro: 'Это наш криптобрат — Оззи. Смело продолжай разговор )',
    },
    {
        name: 'Ибрагим',
        username: 'salimgariev',
        isCryptobro: 'Это наш криптобрат — Ибрагим. Смело продолжай разговор )',
    },
    {
        name: 'Мухаммад',
        username: 'Kharalov_M',
        isCryptobro: 'Это наш криптобрат — Мухаммад. Смело продолжай разговор )',
    },
    {
        name: 'Валентина',
        username: 'dzlti',
        isCryptobro: 'Это наша криптосестра — Валентина. Смело продолжай разговор )',
    },
    {
        name: 'Расул',
        username: 'ARWORKEE',
        isCryptobro: 'Это наш спец по фундаментальному анализу — Расул. Смело продолжай разговор )',
    },
    {
        name: 'Иса',
        username: 'berkam060',
        isCryptobro: 'Это наш спец по техническому анализу — Иса. Смело продолжай разговор )',
    },
    {
        name: 'Андрей',
        username: 'MrRafinad',
        isCryptobro: 'Это наш криптобрат — Андрей. Смело продолжай разговор )',
    },
    {
        name: '',
        username: 'dndmv',
        isCryptobro: 'Это наш криптобрат по тестнетам и нодам. Смело продолжай разговор )',
    },
    {
        name: '',
        username: 'tre1kk',
        isCryptobro: 'Это наш криптобрат по тестнетам и нодам. Смело продолжай разговор )',
    },
    {
        name: 'Серега',
        username: 'rabineo',
        isCryptobro: 'Это наш криптобрат — Серега. Смело продолжай разговор )',
    },
]

const on_start_command = {
    id: 'start',
    replyText: `${hello_message} 
\nМеня зовут Альпине ) Меня разработали с целью помочь тебе эффективнее обучаться в сообществе КРИПТОБРАТ! 
\nЯ представляю из себя так называемый <b>roadmap</b> по учебным материалам на канале ) 
\nЗапусти команду /roadmap и начнем уже ))`,
}

const on_feedback_command = {
    id: 'feedback',
    replyText: 'Напиши, что думаешь по поводу меня, а я потом передам )',
}

const on_check_command = {
    id: 'check',
    replyText: 'Скинь мне username пользователя, который представился от имени КРИПТОБРАТ и я проверю его )',
}

const on_help_command = {
    id: 'help',
    replyText: `Вот список комманд, на которые меня запрогроммировали реагировать )
\n/start — Перезапущусь
/roadmap — Выведу roadmap
/check — Проверю ник незнакомца
/feedback — Связь с разработчиком
/help — Скину это сообщение еще раз )`,
}

const on_roadmap_command = {
    id: 'roadmap',
    replyText: `И так, я поделила материал на несколько частей, ознакомься ниже )
\n\n<b>— Введение в криптовалюты</b>
Что такое криптовалюта? Регистрация на бирже и покупка первых монет. Торговая система и правильный психологеский настрой на старте пути.
\n<b>— Сделки</b>
Спотовая торговля. Что такое ордер, виды и как публиковать? Риск/мани-менеджмент. Долгосрочный крипто-портфель. Технический анализ.
\n<b>— Арбитраж</b>
Как заниматься арбитражем криптовалют? Какие мошеннические схемы есть и как себя обезопасить?
\n<b>— Тестнеты, Ноды</b>
Что это такое и как их проходить? Какой профит? Инструменты для повышения эффективности от прохождения.
\n<b>— Полезные материалы</b>
Инструменты для анализа крипто-проектов. Книги, статьи и видеообзоры на самые разные тематики криптовалюты.
\n<b>— Ответы на частозадаваемые вопросы</b>
Сообщество КРИПТОБРАТ существует почти год, и очень часто задаются одни и те же вопросы ( Пройдись по ним, пожалуйста, прежде чем спросить в чате )
\n\nА теперь, можешь тыкнуть внизу на кнопку схожую своим названием с интерсующей тебя темой ))`,
}

const on_introduction_action = {
    id: 'introduction',
    btnText: 'Введение в криптовалюты',
    replyText: `<b>Введение в криптовалюты</b>
\n<a href="https://t.me/c/1775060674/78/34941">Экскурсия в КРИПТОБРАТ</a>
\n<a href="https://t.me/c/1775060674/76/129">Вводный урок</a>
<a href="https://t.me/c/1775060674/76/127">Презентация к уроку</a>
\n<a href="https://t.me/c/1775060674/76/134">Регистрация аккаунта на бирже, обзор платформы и покупка USDT</a>
<a href="https://t.me/c/1775060674/76/132">Презентация к уроку</a>
\n<a href="https://t.me/c/1775060674/76/140">Хранение криптоактивов</a>
<a href="https://t.me/c/1775060674/76/141">Презентация к уроку</a>
\n<a href="https://t.me/c/1538360654/24">Словарь</a>
\n\nДалее — изучи как зарабатывать c нами на крипте в краткосрочном и долгосрочном периодах 👇🏻👇🏻👇🏻`,
}

const on_orders_action = {
    id: 'orders',
    btnText: 'Сделки',
    replyText: `<b>Сделки</b>
\nПро краткосрочные сделки:
\n<a href="https://t.me/c/1775060674/76/138">Спотовая торговля от А до Я</a>
<a href="https://t.me/c/1775060674/76/136">Презентация к уроку</a>
\n<a href="https://t.me/c/1775060674/76/21728">Как заходить в сделку</a>
<a href="https://t.me/c/1775060674/76/21727">Как выходить из сделки</a>
<a href="https://t.me/c/1538360654/70">Что такое стоп-лосс и как его рассчитывать</a>
\n<a href="https://t.me/c/1775060674/1067">Новые сделки публикуем в этом топике</a>
<a href="https://t.me/c/1775060674/74">Для сделок отдельный чат</a>
\nПосмотрев <a href="https://t.me/c/1775060674/88">уроки по тех-анализу</a>, ты найдешь ответ на вопрос "почему именно эта монета" и сможешь самостоятельно их находить
\n\nПро долгосрочные сделки:
\n<a href="https://t.me/c/1775060674/77/10594">Актуальный инвестиционный портфель от КРИПТОБРАТ</a>
Как закупать монеты на долгосрок — <a href="https://t.me/c/1775060674/74/14973">рекомендация 1</a>, <a href="https://t.me/c/1775060674/77/29996">рекомендация 2</a>
\nЗа публикациями на тему ивестций следи в <a href="https://t.me/c/1775060674/77">этом</a> топике
\n\n\nТепер, давай рассмотрим какие еще активные способы заработка есть. На очеради - Тестнеты, Ноды 👇🏻👇🏻👇🏻`,
}

const on_testnets_action = {
    id: 'testnets',
    btnText: 'Тестнеты, Ноды',
    replyText: `<b>Тестнеты, Ноды</b>
\nЧто это такое и зачем они нужны — <a href="https://t.me/c/1775060674/76/143">аудио</a>, 
<a href="https://t.me/c/1538360654/52">презентация</a>
<a href="https://t.me/c/1538360654/274">Какой профит с этого можно получить</a>
\n<a href="https://t.me/c/1538360654/263">Мультиаккинг для повышения профита</a>
\nЗа актуальными тестнетами следи в <a href="https://t.me/c/1775060674/68">этом</a> топике
Если возникнут трудности при прохождении, то задавай их <a href="https://t.me/c/1775060674/5390">сюда</a>
\n\nДругой пример активного заработка — арбитраж криптовалют 👇🏻👇🏻👇🏻`,
}

const on_arbitrage_action = {
    id: 'arbitrage',
    btnText: 'Арбитраж',
    replyText: `<b>Арбитраж</b>
\n<a href="https://t.me/c/1775060674/66/663">Словарь арбитражника</a>
\nМошенники и как обезопасичть себя — <a href="https://t.me/c/1775060674/66/1188">рекомендация 1</a>, <a href="https://t.me/c/1775060674/66/1187">рекомендация 2</a>
\n<a href="https://t.me/c/1775060674/66/1498">Обзор бирж</a>
Подробнее про Binance — <a href="https://t.me/c/1775060674/66/1956">обзор 1</a> 
<a href="https://t.me/c/1775060674/66/13878">обзор 2</a>
\n<a href="https://t.me/c/1775060674/66/7105">Всё о дропах и работе с ними</a>
\nАктуальные связки находятся в <a href="https://t.me/c/1775060674/66">этом</a> топике 
Вопросы по арбитражу задаются <a href="https://t.me/c/1775060674/1991">тут</a>`,
}

const on_useful_action = {
    id: 'useful',
    btnText: 'Полезные материалы',
    replyText: `<b>Полезные материалы</b>
\nПсихология трейдинга — <a href="https://t.me/c/1538360654/540">публикация 1</a>, <a href="https://t.me/c/1538360654/172">публикация 2</a>, <a href="https://t.me/c/1538360654/198">публикация 3</a>,
<a href="https://t.me/c/1538360654/222">Жажда наживы</a> 
<a href="https://t.me/c/1775060674/107/32867">Самоучитель трейдера</a>
\nТорговая система и почему она так важна — <a href="https://t.me/c/1538360654/230">аудиозапись от Исы</a>, <a href="https://t.me/c/1775060674/76/105">статья от Расула</a>, 
<a href="https://t.me/c/1538360654/549">Риск-менеджмент</a>
\nФундаментальный анализ — <a href="https://t.me/c/1538360654/91">часть 1</a>, <a href="https://t.me/c/1538360654/112">часть 2</a>
Токеномика — <a href="https://t.me/c/1538360654/405">часть 1</a>, <a href="https://t.me/c/1538360654/408">часть 2</a> 
<a href="https://t.me/c/1775060674/107/569">Полезные сервисы для отслеживания крипто-проектов</a>
\nКнига <a href="https://t.me/c/1775060674/107/947">Технический анализ: Полный курс, Джек Д. Швагер</a>
Книга <a href="https://t.me/c/1775060674/107/5845">Антихрупкость. Насим Талеб</a>
\n\nНовые полезные материалы публикуются в <a href="https://t.me/c/1775060674/107">этот</a> топик`,
}

const on_faq_action = {
    id: 'faq',
    btnText: 'Ответы на частозадаваемые вопросы',
    replyText: `<b>Ответы на частозадаваемые вопросы</b>
\nПубликации с вопрос-ответами — <a href="https://t.me/c/1538360654/16">Публикация 1</a> 
<a href="https://t.me/c/1538360654/122">Публикация 2</a> 
<a href="https://t.me/c/1775060674/78/4973">Публикация 3</a> 
<a href="https://t.me/c/1538360654/50">Публикация 4</a>
\nАМА-сессии (от недавних к старым ) — <a href="https://t.me/c/1538360654/845">Сессия 1</a> 
<a href="https://t.me/c/1538360654/828">Сессия 2</a> 
<a href="https://t.me/c/1538360654/730">Сессия 3</a> 
<a href="https://t.me/c/1538360654/679">Сессия 4</a> 
<a href="https://t.me/c/1538360654/630">Сессия 5</a>
\n<a href="https://binance.com/ru/support/faq/что-такое-комиссия-за-спотовую-торговлю-на-binance-и-как-она-рассчитывается-e85d6e703b874674840122196b89780a">Комиссии binance при торговле на споте</a>
\n<a href="https://t.me/c/1775060674/74/35505">Как купить монету THORSwap</a>
\n<a href="https://t.me/c/1619495339/63004">Про дозволенность монет по Исламу</a>
\n<a href="https://t.me/c/1619495339/54679">Что означает "Безубыток"</a>
\n<a href="https://t.me/c/1538360654/801">Как пользоваться рефералкой</a>
\nПочему нельзя заходить в сделки ниже точки входа — <a href="https://t.me/c/1538360654/485">причина 1</a>, <a href="https://t.me/c/1619495339/53290">причина 2</a>
\nКак понять, что сделка актуальна — <a href="https://t.me/c/1775060674/11265/37695">способ 1</a>, <a href="https://t.me/c/1775060674/11265/37697">способ 2</a>, <a href="https://t.me/c/1775060674/11265/37707">способ 3</a>
\n<a href="https://t.me/c/1775060674/11265/11573">Торговые сессии</a>`,
}

module.exports = { hello_message, admins_cb, on_start_command, on_check_command, on_help_command, on_feedback_command, on_roadmap_command, on_introduction_action, on_orders_action, on_testnets_action, on_arbitrage_action, on_useful_action, on_faq_action }
