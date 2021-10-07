import { CategoryName } from "./categories"

/* eslint-disable max-len */
export interface INewsArticle {
  source:      Source;
  author:      string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  string;
  publishedAt: Date | string;
  content:     string;
  category?: CategoryName
}

export interface Source {
  id:   string | null;
  name: string;
}

type Status = 'ok' | 'error'

export interface ISource {
  id:          string;
  name:        string;
  description: string;
  url:         string;
  category:    CategoryName;
  language:    string;
  country:     string;
}

export interface INewsResponse {
  articles: INewsArticle[],
  status: Status,
  totalResults: number,
  message?: string,
  code?: number,
}

export interface ISourcesResponse {
  status: Status,
  sources: ISource[]
}

export const tstData:INewsArticle[] = [
  {
    source: {
      id: null,
      name: "Electrek"
    },
    author: "Blair Altland",
    title: "Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    description: "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    url: "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    urlToImage: "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2021-10-05T18:00:04Z",
    content: "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    source: {
      id: "svenska-dagbladet",
      name: "Svenska Dagbladet"
    },
    author: "Julia Brzezinska",
    title: "Komfort på topp – men eldrift dröjer",
    description: "Mercedes nya C-klass bjuder på den finaste dieselmotorn och den bästa komforten i segmentet. Laddhybrider med tio mils räckvidd och snabbladdning är på ingång, men än så länge saknas en verklig utmanare till Tesla Model 3 – med ren eldrift.",
    url: "https://www.svd.se/komfort-pa-topp--men-eldrift-drojer",
    urlToImage: "https://svd.vgc.no/v2/images/d7bd6709-e69c-4bbe-b745-d6d884501d26?h=630&q=80&upscale=true&w=1200&s=b3e294a6ad22509b7fc3aa06e59762ec38f9b2dd",
    publishedAt: "2021-10-05T18:00:00Z",
    content: "Designmässigt är Mercedes och Volvo långt ifrån varandra. Om Volvo anspelar på minimalism med skandinavisk drivvedskänsla placerar nya C-klassen mig i en hotellobby i Gulfområdet med exklusiva läders… [+351 chars]"
  },
  {
    source: {
      id: null,
      name: "Gazeta.ru"
    },
    author: "Газета.Ru",
    title: "Гейтс впервые за 30 лет не вошел в первую тройку списка Forbes",
    description: "Основатель компании Microsoft Билл Гейтс впервые с начала последнего десятилетия прошлого века не вошел в первую тройку самых богатых американцев по оценке журнала Forbes.\n\nЛидером рейтинга стал основатель Аmazon Джефф Безос, владеющий ...",
    url: "https://www.gazeta.ru/business/news/2021/10/05/n_16643515.shtml",
    urlToImage: "https://img.gazeta.ru/files3/376/13411376/20191010_gaf_u55_141-pic905-895x505-80068.jpg",
    publishedAt: "2021-10-05T17:46:24Z",
    content: "Microsoft       Forbes.\r\n mazon , $201 . Tesla SpaceX,  $190,5 , — Facebook  $134,5 .  $500 , Microsoft   .\r\n , 400  $1,8  —  $500  ,   . $100 .\r\n , ,   , —  $26   $36 .\r\n , $7  - Facebook.\r\n   Faceb… [+59 chars]",
  },
  {
    source: {
      id: null,
      name: "Mediafax.ro"
    },
    author: "Daniel Contescu",
    title: "Pandemia a pus Dacia pe butuci în Marea Britanie. Scăderi mari ale vânzărilor pentru marca românească",
    description: "Vânzările Dacia în Marea Britanie au scăzut cu aproape 27% în septembrie. Vânzările de maşini noi în Marea Britanie au scăzut cu 34,4% luna trecută, la 215.312 vehicule, cel mai redus nivel înregistrat în septembrie din ultimii 23 de ani.",
    url: "https://www.mediafax.ro/economic/pandemia-a-pus-dacia-pe-butuci-in-marea-britanie-scaderi-mari-ale-vanzarilor-pentru-marca-romaneasca-20288647",
    urlToImage: "https://storage0.dms.mpinteractiv.ro/media/1/1/1686/20288647/1/5459722-mediafax-foto-stefan-birlodeanu.jpg?width=640",
    publishedAt: "2021-10-05T17:34:10Z",
    content: "Deficitului de semiconductori i a impactului pandemiei sunt motivele care au dus la nivelul sczut al vânzrilor, a anunat mari Asociaia Productorilor i Comercianilor de Automobile din Regatul Unit (SM… [+907 chars]"
  },
  {
    source: {
      id: null,
      name: "CarScoops"
    },
    author: "Thanos Pappas",
    title: "Move Over Porsche, Toyota Has Dropped A Nürburgring Edition Corolla Sedan",
    description: "This Toyota Corolla that was introduced in Thailand must be the slowest Nürburgring-badged vehicle on sale.",
    url: "https://www.carscoops.com/2021/10/move-over-porsche-toyota-has-dropped-a-nurburgring-edition-corolla-sedan/",
    urlToImage: "https://www.carscoops.com/wp-content/uploads/2021/10/2022-Toyota-Corolla-Altis-Nurburgring-Edition.jpg",
    publishedAt: "2021-10-05T17:30:01Z",
    content: "The Green Hell is the go-to destination for almost all performance-oriented models – either for their development or for setting lap time records, as Tesla did recently with their Model S Plaid sedan… [+2279 chars]"
  },
  {
    source: {
      id: null,
      name: "CleanTechnica"
    },
    author: "Johnna Crider",
    title: "It Looks Like Tesla Paid Off Its $1.4 Billion China Loan Agreement For Giga Shanghai Early",
    description: "In December 2019, Tesla was granted a $1.4 billion loan from Chinese banks for Giga Shanghai. The five-year loan was partially used to roll over previous debts. The rest of the money would go towards Giga Shanghai and Tesla China’s operations. The interest ra…",
    url: "https://cleantechnica.com/2021/10/05/it-looks-like-tesla-paid-off-its-1-4-billion-china-loan-agreement-for-giga-shanghai-early/",
    urlToImage: "https://cleantechnica.com/files/2019/10/Tesla-Shanghai-Gigafactory-General-Assembly.png",
    publishedAt: "2021-10-05T17:27:31Z",
    content: "In December 2019, Tesla was granted a $1.4 billion loan from Chinese banks for Giga Shanghai. The five-year loan was partially used to roll over previous debts. The rest of the money would go towards… [+2507 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Insider Monkey Team",
    title: "Why These 10 Stocks Are in the Spotlight on Tuesday",
    description: "In this article we will take a look at the some of notable stocks in the spotlight today. You can skip our detailed analysis of these stocks and go to read...",
    url: "https://finance.yahoo.com/news/why-10-stocks-spotlight-tuesday-171911633.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/F2Klq8XtUnkmgklGjFHYEw--~B/aD0yMjU7dz0zMDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/39d601efd77f52e779a5207a1aba4fa5",
    publishedAt: "2021-10-05T17:19:11Z",
    content: "In this article we will take a look at the some of notable stocks in the spotlight today. You can skip our detailed analysis of these stocks and go to read Why These 5 Stocks Are in the Spotlight on … [+4069 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Abigail Fisher",
    title: "Should I Buy NetEase, Inc (NTES)?",
    description: "In this article we will take a look at whether hedge funds think NetEase, Inc (NASDAQ:NTES) is a good investment right now. We check hedge fund and...",
    url: "https://finance.yahoo.com/news/buy-netease-inc-ntes-171554930.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/4be2tJZY2G8V1rl0TxaDdw--~B/aD02MDA7dz00MjQ7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/a80aefe3c456c3d89874c4bad81c2fd1",
    publishedAt: "2021-10-05T17:15:54Z",
    content: "In this article we will take a look at whether hedge funds think NetEase, Inc (NASDAQ:NTES) is a good investment right now. We check hedge fund and billionaire investor sentiment before delving into … [+6729 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Abigail Fisher",
    title: "Do Hedge Funds Love Teladoc Health, Inc (TDOC)?",
    description: "Most investors tend to think that hedge funds and other asset managers are worthless, as they cannot beat even simple index fund portfolios. In fact, most...",
    url: "https://finance.yahoo.com/news/hedge-funds-love-teladoc-health-171548715.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/aTwy5fE19cZBIxFA7A9DxA--~B/aD02MDA7dz00NzM7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/22e3bdc703ab18f9bef8d63b70756a6b",
    publishedAt: "2021-10-05T17:15:48Z",
    content: "Most investors tend to think that hedge funds and other asset managers are worthless, as they cannot beat even simple index fund portfolios. In fact, most people expect hedge funds to compete with an… [+6788 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Asma UL Husna",
    title: "Hedge Funds Are Souring On Lyft, Inc. (LYFT)",
    description: "A whopping number of 13F filings filed with U.S. Securities and Exchange Commission has been processed by Insider Monkey so that individual investors can...",
    url: "https://finance.yahoo.com/news/hedge-funds-souring-lyft-inc-171545653.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/ie.b0yHszlz2RuFH2K_lVg--~B/aD00OTk7dz01MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/306608dd7da541f74f7e2a85548c3255",
    publishedAt: "2021-10-05T17:15:45Z",
    content: "A whopping number of 13F filings filed with U.S. Securities and Exchange Commission has been processed by Insider Monkey so that individual investors can look at the overall hedge fund sentiment towa… [+6331 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Abigail Fisher",
    title: "Hedge Funds Are Warming Up To SBA Communications Corporation (SBAC)",
    description: "The latest 13F reporting period has come and gone, and Insider Monkey is again at the forefront when it comes to making use of this gold mine of data. We at ...",
    url: "https://finance.yahoo.com/news/hedge-funds-warming-sba-communications-171542058.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/O_Xs2R6hu02kkSZYp9LTig--~B/aD02MDA7dz00NzE7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/2a0b3a0d2f33e16e254e856660c74636",
    publishedAt: "2021-10-05T17:15:42Z",
    content: "The latest 13F reporting period has come and gone, and Insider Monkey is again at the forefront when it comes to making use of this gold mine of data. We at Insider Monkey have plowed through 873 13F… [+6618 chars]"
  },
  {
    source: {
      id: null,
      name: "Electrek"
    },
    author: "Fred Lambert",
    title: "Tesla is building Model Y bodies with single front and rear castings, a manufacturing first",
    description: "In an auto manufacturing first, Tesla has started building Model Y bodies with two giant single casting pieces for the front and back of the electric SUV. Tesla has been preparing to start production of the Model Y at two new factories, Gigafactory Berlin and…",
    url: "https://electrek.co/2021/10/05/tesla-building-model-y-bodies-single-front-rear-castings-manufacturing-first/",
    urlToImage: "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/Tesla-Model-Y-body-Texas.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    publishedAt: "2021-10-05T17:12:59Z",
    content: "In an auto manufacturing first, Tesla has started building Model Y bodies with two giant single casting pieces for the front and back of the electric SUV.\r\nTesla has been preparing to start productio… [+2609 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC"
    },
    author: "Keris Lahiff",
    title: "Tesla bucks market sell-off in past month, and Oppenheimer charts where stock heads next",
    description: "Tesla has managed to shake off weakness that has plagued the rest of the high-growth and tech stocks over the past month. Here's what's next.",
    url: "https://www.cnbc.com/2021/10/05/tesla-shares-higher-in-past-month-oppenheimer-charts-stock-moves.html",
    urlToImage: "https://image.cnbcfm.com/api/v1/image/106952586-1633450981122-TSLA.png?v=1633450986",
    publishedAt: "2021-10-05T17:12:08Z",
    content: "Tesla has managed to shake off weakness that has plagued the rest of the high-growth and tech stocks over the past month.\r\nThe electric-vehicle maker has risen 7% over that stretch, while the QQQ Nas… [+1887 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Abigail Fisher",
    title: "Here is What Hedge Funds Think About The Liberty SiriusXM Group (LSXMA)",
    description: "Most investors tend to think that hedge funds and other asset managers are worthless, as they cannot beat even simple index fund portfolios. In fact, most...",
    url: "https://finance.yahoo.com/news/hedge-funds-think-liberty-siriusxm-170942499.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/SBpFWX.lh.oX6aFaV0mE8Q--~B/aD01NDA7dz01MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/9af12bcb9e9e0d6708801d9054c6dd3b",
    publishedAt: "2021-10-05T17:09:42Z",
    content: "Most investors tend to think that hedge funds and other asset managers are worthless, as they cannot beat even simple index fund portfolios. In fact, most people expect hedge funds to compete with an… [+6691 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Debasis Saha",
    title: "Hedge Fund Sentiment Is Stagnant On Elanco Animal Health Incorporated (ELAN)",
    description: "Although the masses and most of the financial media blame hedge funds for their exorbitant fee structure and disappointing performance, these investors have ...",
    url: "https://finance.yahoo.com/news/hedge-fund-sentiment-stagnant-elanco-170938087.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/9r9gVC8MF1r9TBe4vfM5vg--~B/aD04MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/1e5caf63df736eee1c4ac7c54bb34176",
    publishedAt: "2021-10-05T17:09:38Z",
    content: "Although the masses and most of the financial media blame hedge funds for their exorbitant fee structure and disappointing performance, these investors have proved to have great stock picking abiliti… [+6893 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Asma UL Husna",
    title: "Do Hedge Funds Love Vulcan Materials Company (VMC)?",
    description: "Last year we predicted the arrival of the first US recession since 2009 and we told in advance that the market will decline by at least 20% in (Recession is ...",
    url: "https://finance.yahoo.com/news/hedge-funds-love-vulcan-materials-170934216.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/ivrb8FIdcDY6hZDf.iMEzA--~B/aD02MDA7dz00MzI7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/7a723550985266f1a78e8a75f031110c",
    publishedAt: "2021-10-05T17:09:34Z",
    content: "Last year we predicted the arrival of the first US recession since 2009 and we told in advance that the market will decline by at least 20% in (Recession is Imminent: We Need A Travel Ban NOW). In th… [+6648 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Debasis Saha",
    title: "Do Hedge Funds Love Chubb Limited (CB)?",
    description: "Although the masses and most of the financial media blame hedge funds for their exorbitant fee structure and disappointing performance, these investors have ...",
    url: "https://finance.yahoo.com/news/hedge-funds-love-chubb-limited-170930375.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/0xLTur_Is8hOwqAh10jaGA--~B/aD03Mzg7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/e8a0a6a09538be4e0bf666bebed4b447",
    publishedAt: "2021-10-05T17:09:30Z",
    content: "Although the masses and most of the financial media blame hedge funds for their exorbitant fee structure and disappointing performance, these investors have proved to have great stock picking abiliti… [+6288 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Debasis Saha",
    title: "Is 3M Company (MMM) Going to Burn These Hedge Funds?",
    description: "Last year we predicted the arrival of the first US recession since 2009 and we told in advance that the market will decline by at least 20% in (Recession is ...",
    url: "https://finance.yahoo.com/news/3m-company-mmm-going-burn-170926152.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/vbJMylGMS9mnXSesqp2gtw--~B/aD03NjI7dz01OTQ7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/da5326c312025765cdec1150b48aa5f6",
    publishedAt: "2021-10-05T17:09:26Z",
    content: "Last year we predicted the arrival of the first US recession since 2009 and we told in advance that the market will decline by at least 20% in (Recession is Imminent: We Need A Travel Ban NOW). In th… [+6310 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Debasis Saha",
    title: "Parker-Hannifin Corporation (PH) Fell Out Of Favor With Hedge Funds",
    description: "After several tireless days we have finished crunching the numbers from nearly 900 13F filings issued by the elite hedge funds and other investment firms...",
    url: "https://finance.yahoo.com/news/parker-hannifin-corporation-ph-fell-170922212.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/JHvETdigvJCNdeKw8s0w4A--~B/aD03NzI7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/ce5b7a84019f92c68a44a40942e27d60",
    publishedAt: "2021-10-05T17:09:22Z",
    content: "After several tireless days we have finished crunching the numbers from nearly 900 13F filings issued by the elite hedge funds and other investment firms that we track at Insider Monkey, which disclo… [+6158 chars]"
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment"
    },
    author: "Debasis Saha",
    title: "Hedge Funds Are Buying Dollar Tree, Inc. (DLTR)",
    description: "While the market driven by short-term sentiment influenced by the accommodative interest rate environment in the US, virus news and stimulus spending, many...",
    url: "https://finance.yahoo.com/news/hedge-funds-buying-dollar-tree-170919748.html",
    urlToImage: "https://s.yimg.com/uu/api/res/1.2/nb10_1KAHYA3zVO0p7ITyQ--~B/aD04MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/239ddc19bbe41a48b1cb990bca4e2ba0",
    publishedAt: "2021-10-05T17:09:19Z",
    content: "While the market driven by short-term sentiment influenced by the accommodative interest rate environment in the US, virus news and stimulus spending, many smart money investors are starting to get c… [+6737 chars]"
  }
]