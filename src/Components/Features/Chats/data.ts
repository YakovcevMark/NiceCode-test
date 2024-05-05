const emptyAvatar = require("../../../assets/imgs/emptyAvatar.svg") as string;
type Chat = {
    contactId: number;
    additionalChatInfo?: {
        hasProblem?: boolean;
        hasMessage?: boolean;
    };
};
export type AdditionalChatInfo = {
    hasProblem?: boolean;
    hasMessage?: boolean;
};
type Contact = {
    avatar: string;
    fullName: string;
    sex: "муж" | "жен" | "Пока не определился :)";
    age: number;
};
export const contacts: Contact[] = [
    {
        avatar: "https://s3-alpha-sig.figma.com/img/b988/8459/6d2fe04ae5132311272ef05c2caa99a3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-hId04ElNyn2gsRPwJYmlg5nukSXsgvhBLONrtV7UdU4nVQZFDdogMbOIILGj9gVM6BBLFrY1NbYfe776NZN2Qv56zshlUjshCdSdOPUL~TeN~aPABwImCxs~OHNOmJ3PJ-azgh0~f9PjRQN7PFcvh7ZypV-E3faef-K27bQ3zs0B523ePMrYQMTpK8YUQdxI7NUXVHR~c-MJe2SnzQPDr34bV5r3Uywvd5ZL3HNqYLO7KmB6CY7fXhQ1r~u2saTQwumQybe76VCc5lC2yM1pWURHXrx9Mmqc6GYkD8cjw0bUttKGlVUkjlG0yeh2OSJ0ZRUpGbOTdg-3X1D8KpKw__",
        fullName: "Игошина Кравцова Александра",
        sex: "жен",
        age: 23
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/c044/5de2/79e699f381822f5ea9181dc5f3e7d756?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvA1HxtmsbSHlyqAbWAqUPrtVguMbZEfpJ6vHeUhDY8ByjIFKcYBJADBUi~SaZM7e4qQDH~W4kE4D4mS679EK7cDWHnfblTRHso7dJMeFb9xXB9-Q0-eIOYfjTqViyTLZiL5oB~zOdkD05N9fdI3u7X-edGlu53i62IFdlsOuknHMEO~wjoxzeXhEnlIQyc4WlEFL-ZaifCrSGbwi9ctZfAjnRyIrTqoTNcXEcRd8bGyy7eyJaaMBKN85mW~X1Ce~9EfZ0wgFekQn~fJm2cGNk472UgNaPpJKp41ib4xX9Q8IV2w4S4jJZ~fC8B6dsaTNM~W0fGh0mxVLVhqyYWHJA__",
        fullName: "Петров Рожков Денис",
        sex: "муж",
        age: 30
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/bc10/3cee/da08e71ad1b350272e5ada61baf436da?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFwhISi5v0FUozP-eftQvAC9mwNKN~qt5w2~i5haB5FqvOyhOhMa1-7c90dGdzPkLqSn4nKbZhu2woKPFCUnf5rJqYSA2RN328LiDzL~2VOxAAevVyq7~mS0cGieETojCBW0kCtzP0P6vcEsV2uC25EPIkD15wL3wF~cemEByTyn0AufxpoDr~uTht1pUMo4dOY-VderJmmGpLVt5bFgJEfFyOIceVpZUCVhuGCo6Evq1rmZeOxEONMDt0szsQltNGf6QCrF67K8JYd1sdPenvaNaXOPoZlv6YdJlpUjFeRqCqEexWZFCJ2IcMjvQ2C--6dnosBeMz~jHci6H~RYVg__",
        fullName: "Иванова Диброва Алевтина",
        sex: "жен",
        age: 24
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/3ee2/06f3/26eec9971fe2e43d37bed9fa0b200d25?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j7qRCwARv~-Z2-4wYwXaI97r1mMw5P8CABQZwp6nYi12xMBDwx6Kg~7jI5-caB7a9fOKuxEj7R1rt5QAdjEwVsR4Sa8y3Rl6Pf-syC5tXeuue6CcVb3hw9sa4dy-FiOJ9aH5qxYFruqdtrxYTEVrhLuYl0gPSlNqMDAvv~lOsijQt~aGOOnSAgKLTBQ8IDrmMNBUmaFA8NI6M2FMAJzHh0IZFR~RI8Xevkvskfbq1hXxzOEOPluXmfbCdPnhHydoQJN3xGj-F78OLH6oT78IYMOkvJtBGPiAelNtmBNK9KitruGvGjOUo9pnqG7zjhftmCQ3qksXiCANrMPPDPPG4w__",
        fullName: "Ведьмаков Иванов Дмитрий",
        sex: "муж",
        age: 23
    },
    {
        avatar: emptyAvatar,
        fullName: "nosikov@list.ru",
        sex: "Пока не определился :)",
        age: 2
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/6cd0/dbe9/5ac4989eaccc1948137c47c97467154c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DuW7dfViH1ZzTC74Ww7FIAcKQnZv~~HMqlNU5p2q2mlnkP6I1jz51EO3PLShfpL5F-b60bq2kn1A~ksKcWjnfb-38gDngTqYbZ3L2227D1Gfk6KVTmzODw6i0PPMaoTxTuPem9j65QgrOM0hZUD-vlG7KnVwZFShfyGwPV7Szgj~3R12p69YHuWw3e2m5HVq4J4vhGwONW9l-HO9WuIiCXpyRV8vw5w~7-W0w-EQedUiMkUY-B8eRZHskTZgtqsrmK6bb13XP2cqwtLuzejomwskETTo6z~h27ta~zL-SriQEOsZJzo7dC2YMA0g2fr7ySBF27Mc3VnpDSxeJfAXJA__",
        fullName: "Фамильный Форс Александр",
        sex: "муж",
        age: 33
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/f68f/a607/96efff3c3b6e580910f2be50d7f5cadc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-CXfa6VC4GcBBWwAA7HUMktAEYw5m54Kkx0ZNPXEPYCuU~RnD1VrZ9w2iqXc-3ErkPpz~Nb8bWwoT5nCHdGllBbxtN8vIe1S74JRfg-OFQ66256rLMLiCNIJekcWqHrR9LtJ-KOyePuGNUhCIAr7wWZdWwljeHt5gwbgiR96YKdFw6ydVxN-gaCGBU76qIhzLs7BTndlHcDMXWtICcgLibxfr9AFM0-8C8u0qnlvY2YhSc9NQFGImDtrP418eLqLxyhy5qbu9ao4Be7yYIeb~f7PtWFedOVwljRBuglSrtyltL0XMjnHT-4Y7uMcgD2I5Bt8U1W4HIfXhu1IB16XA__",
        fullName: "Мухамедов Ахмедов Артур",
        sex: "муж",
        age: 57
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/c86b/f4b9/69642e5ffcd34f094d2d15e4357cee3d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ApF85C2SswJg9PZ8CHPwai4JBpuxUVtvWXGB8z6eoBedqMP8I6MOoS5iSPr6Im3dbg3Js-QtS2AKsU6p1fxFHAmtK3WvUPOsj8XTa5jui~GAr5lAjI4ipMHF8sLLhzJLZLfW2jk8w2iygO4QU-AxFtReVlATT7qxn7JVu3nLrWgLAEHEEUybQX9mIPvjiFFykFivO2Jak2oIic52mkZP-FW5-TcWWBEsaJZCd1ymxl-wWqBijYk13Vl11qe5CgAfBUKfqr0W1WqCdQM2KortAjZUj5NYz95Fjbb7lDJSNtBDWSsCEgfvh9uS3-ZUq41UGBP5r2vtcgmFrQybiDSUmQ__",
        fullName: "Хитов Блажевич Игорь",
        sex: "муж",
        age: 63
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/71a7/3b63/6fcbc01c69abdb81f13d00635698063f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hx9ygS~-qveVQhQbqtV8CDNjP806oqozUFegD7etCl0yUUTyUk-YfwlmrTmcoAjsJe-Eqw1qTD43dUnUZSECibEjFgvJ4dThv2STBXXCx-6M2C~wLY1li1viHvzT0aPJazqNYtLTfeXPs7k14FLh1i20cbq~VWuAax7vGWCIr13F7h5oOjAG-DaBNaTn2nz6IJB7ZfkQ88xVcg8rhrYUiuZJ8AZ3mVOs4EFRkN7nHSUD5MwDpOu2BAdaB3dOMl6zRD8T2S5vzNvZnhR20EFNnUFKoGjlP7EBsL6qc4~WH0nk2lw4i1vhXzPOOMih-uwuWBY2X8HA9rXwZEp98v6nKw__",
        fullName: "Меригольд Валиева Руфина",
        sex: "жен",
        age: 31
    },
    {
        avatar: "https://s3-alpha-sig.figma.com/img/40af/c90f/ec9f5ca3590dba67fb935e2d5279f2c9?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uq-5OaHOdQ3~QENrV1PUn7JIXQ9PkqmQvBHHe1qYjvFxmpWP8Nhg6zR2Hfrk912L710F30ubbXtpXDHbtWsvw6MbY0SJ9fGtApGpBp6ekQbaxHf4C9D8~M-iG13WikIHQ9XEKFNGTXAGC117ugydyrcuwnuSRpsoeW5CQpTvEeYlrRxhBytX9Yyl6hnoqiaewpq4ozlRyHPZHMRS2Sk54lHX3cHnTzTXw3G5jSLLkXs2R1QWj66uPYDvay4cAJ6eqZ33nmoQXgoZjv6O~c97uXvDSM8K8GsaRWuz5ontwTxYPm48glSRCynF0nWIwnNwmY9h7GcNK4~efjwn7zPDvQ__",
        fullName: "НадоелоПридумывать Волошина Виктория",
        sex: "жен",
        age: 28
    }
];

export const chats: Chat[] = [
    {
        contactId: 0,
        additionalChatInfo: {hasMessage: true}
    }, {
        contactId: 1
    }, {
        contactId: 0,
        additionalChatInfo: {hasProblem: true}
    },
    {contactId: 2},
    {contactId: 3},
    {contactId: 4},
    {contactId: 5},
    {contactId: 6},
    {contactId: 7},
    {contactId: 8},
    {contactId: 9},
    {contactId: 9},
    {contactId: 9},
    {contactId: 9},
];