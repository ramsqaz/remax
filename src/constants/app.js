export const CONTENTS = {
    MAIN: 'main',
    ABOUT_COMPANY: 'about-company',
    TECHNOLOGIES: 'technologies',
    ADVANTAGES: 'advantages',
    EDUCATION: 'education',
    REQUEST: 'request',
    OFFICES: 'offices',
};

export const SCROLL_NAVS = [
    {
        content: CONTENTS.MAIN,
        // label: "Главная",
        key: "main",
    },
    {
        content: CONTENTS.ABOUT_COMPANY,
        // label: "RE/MAX",
        key: "remax",
    },
    {
        content: CONTENTS.TECHNOLOGIES,
        // label: "Технологии",
        key: "technologies",
    },
    {
        content: CONTENTS.ADVANTAGES,
        // label: "Преимущества",
        key: "advantages",
    },
    {
        content: CONTENTS.EDUCATION,
        // label: "Обучение",
        key: "education",
    },
    {
        content: CONTENTS.OFFICES,
        // label: "Офисы",
        key: "offices",
    },
];

export const LOCALES = {
    RU: "ru",
    KZ: "kz",
};

export const LOCALES_OPTIONS = [
    {
        value: LOCALES.KZ,
        label: "Қазақша",
    },
    {
        value: LOCALES.RU,
        label: "Русский",
    },
];