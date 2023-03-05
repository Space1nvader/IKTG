import { QuestionType } from 'modules/questions/components/QuestionModal';

export type Question = {
  name: string;
  type: QuestionType;
  content?: string;
  data?: string;
  message: string;
};

export const questions: Question[] = [
  {
    name: 'Minecraft',
    type: 'audio',
    message: 'Лучше этой игры - только копатель онлайн'
  },
  {
    name: 'Diablo III',
    type: 'text',
    data: '"Постой и послушай"',
    message:
      'На самом деле данную фразу много где использовали в Blizzard-коммьюнити, но ее автором считается персонаж из вселенной Diablo 3 - Декард Каин. Декард Каин часто использует фразу — «Постой немного и послушай», что может свидетельствовать о том, что герои не уделяют ему должного внимания. '
  },
  {
    name: "Sid Meier's Civilization V",
    type: 'picture',
    data: 'https://sun9-52.userapi.com/impg/VucGzlCnl6lDDXuWFP7Tz08YrS8wo_CJm_K1Lw/Bh4CDVeAmX0.jpg?size=2404x1548&quality=96&sign=6fe571571b76ca7c3fd64fd1e21ce9c4&type=album',
    message: 'Ницше писал: «Гегель — это вкус». Так вот Civilization — это тоже вкус, игровой вкус.'
  },
  {
    name: 'Crysis',
    type: 'video',
    message: 'До сих пор не тянет'
  },
  {
    name: 'Uncharted 4',
    type: 'video',
    data: 'Uncharted',
    message: 'Том Холанд из мира видеоигр'
  },
  {
    name: 'Ori and the blind forest',
    type: 'picture',
    data: 'https://www.denofgeek.com/wp-content/uploads/2020/02/2015-03-31_00024.jpg',
    message:
      'Ori and the Blind Forest представляет собой красочный экшен-платфомер. Игра повествует об истории юного сироты, которому предначертана судьба героя. Отличительные особенности — непередаваемая атмосфера и отличный саундтрек.'
  },
  {
    name: 'Rise of Nations',
    type: 'picture',
    data: 'https://cdn.mos.cms.futurecdn.net/0b7a830ae2665254bde157946e41c99e-1200-80.jpg',
    message: 'Цивилизация в реальном времени.'
  },

  {
    name: 'Postal 2',
    type: 'audio',
    data: 'Postal 2',
    message:
      'Postal 2 — это шутер от первого лица 2003 года, разработанный компанией Running with Scissors. Она является продолжением игры 1997 года Postal и была выпущена для Microsoft Windows в апреле 2003 года. Postal 2, как и ее предшественница, получила известность благодаря высокому уровню насилия, стереотипам и черного юмора.'
  },
  {
    name: 'Space Rangers',
    type: 'picture',
    data: 'https://sun9-19.userapi.com/impg/nj88rwOY0VFy5RQOmAXcMWpNR_stwC9SG37GXg/j_4GOd-pF6g.jpg?size=1138x826&quality=96&sign=810b829e823eddf44f3f67e917b6e855&type=album',
    message:
      'Космические рейнджеры 2 - эталонный представитель жанра RPG, уровень которого мало кто может повторить.'
  },

  {
    name: 'L.A. Noire',
    type: 'video',
    message: 'А я думал это Мафия'
  },
  {
    name: 'Duke Nukem',
    type: 'text',
    data: 'Hail to the King baby!',
    message: 'Карточка? Хуй тебе в нос а не карточка'
  },
  {
    name: 'Overwatch',
    type: 'picture',
    data: 'https://sun9-44.userapi.com/impg/f3XjViY78ulUfcl7jqUydtCWuC5rTdwbUyzfjA/wgYU_xnjNNs.jpg?size=2560x1576&quality=96&sign=1ef9b8caa9bcfdd5760d11d8d7bc8904&type=album',
    message: 'Дамы и господа, заводите моторы!'
  },

  {
    name: 'Need For Speed: Underground 2',
    type: 'picture',
    data: 'https://sun9-22.userapi.com/impg/U8jI21nPsiXKX6B269wjL6lKLF-rRg_LXdGezQ/uRdXoXpS9T0.jpg?size=572x610&quality=96&sign=b6bc19327122cbf47a0158f921e65615&type=album',
    message: 'Игра вышедшая именно тогда, когда должна была выйти.'
  },

  {
    name: 'World of Warcraft',
    type: 'picture',
    data: 'https://preview.redd.it/oise4ur2a1h01.png?auto=webp&s=c6bcb3e8e1b39d1bb416b24b2b7a7a727eb392e2',
    message: 'Небо над долиной призрачной луны(Warlords of draenor)'
  },
  {
    name: 'Half-Life 2',
    type: 'audio',
    message: 'Проснитесь и пойте, Мистер, Фриман'
  },

  {
    name: 'Dota 2',
    type: 'picture',
    data: 'https://sun9-12.userapi.com/impg/iVnSLGf3_kbC5txfX4AIyG8GYek5S2UcCSSMMA/BEjiezgpT3w.jpg?size=1286x794&quality=95&sign=eef11e1a42d6aa34eec254ade772828a&type=album',
    message: 'LOL > Dota'
  },
  {
    name: 'Fallout 4',
    type: 'text',
    data: ' В 1945 году мой прапрадед служил в армии и гадал, вернётся ли он домой к жене и сыну, которого он ещё ни разу не видел. Его желание сбылось, когда США завершили Вторую мировую войну, сбросив на Хиросиму и Нагасаки атомные бомбы. Мир замер в ожидании ядерного апокалипсиса. Но случилось чудо: мы стали использовать атомную энергию не в военных, а в мирных целях. То, что раньше казалось уделом фантастов: бытовые роботы, машины на термоядерном топливе, портативные компьютеры — всё это стало реальностью. Но уже в XXI веке американская мечта рассеялась как дым. Годы бездумного потребления привели к истощению запасов всех природных ресурсов. Мир затрещал по швам. Сейчас 2077 год. Человечество стоит на пороге новой мировой войны. И мне страшно. Страшно за себя, за жену, за маленького сына. За время, проведённое в армии, я кое что понял...',
    message: 'Война всегда одна'
  },
  {
    name: 'Dark Souls III',
    type: 'picture',
    data: 'https://steamuserimages-a.akamaihd.net/ugc/941709786935031715/CCC2837E14204E96B7653B3522A18D4FE4DB5F2B/?imw=910&imh=1024&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    message:
      'Анор Лондо (англ. Anor Londo) — локация в игре Dark Souls. Легендарный заброшенный город Богов. Анор Лондо находится в горах, над Крепостью Сена. Высокие стены, окружающие город, можно увидеть практически отовсюду'
  },
  {
    name: 'Serious Sam',
    type: 'audio',
    content: 'Вот и думай',
    message:
      'Серия Serious Sam давно стала классикой и считается гордостью ПК (хотя постоянно пыталась перебраться на консольный рынок). Её игровой процесс завораживает благодаря большому количеству разнообразных монстров, трудных передряг и харизматичному главному герою, в честь кого игра и получила своё название.'
  },
  {
    name: 'Portal 2',
    type: 'picture',
    data: 'https://vanschneider.com/blog/content/images/size/w1000/wp-content/uploads/2017/01/1A2R05lDbzxpAZwW51-wb4w.jpeg',
    message: 'The cake is a lie'
  },
  {
    name: 'Dark Souls II',
    type: 'picture',
    data: 'https://sun9-45.userapi.com/impg/JBmXZor1CaUmyZS6PC8EHlRlkgPVgp30hHyK2A/zvuw567xYzw.jpg?size=2560x1693&quality=96&sign=bde1df81a86da12085864b490d595073&type=album',
    message:
      'Ко́шка — домашнее животное, одно из наиболее популярных «животных-компаньонов». С точки зрения научной систематики, домашняя кошка — млекопитающее семейства кошачьих отряда хищных.'
  },

  {
    name: 'Far Cry 3',
    type: 'audio',
    message: 'Far Cry Primal - вот что такое настоящее безумие'
  },
  {
    name: 'Nier',
    type: 'picture',
    data: 'https://sun9-1.userapi.com/impg/qyJ9fjFX8pJf4a5qaziuRSlBELEPIY5n6Yd1uw/B-HbJ3QO38g.jpg?size=1424x874&quality=96&sign=21fcc7f5d316715eae5e8dc341e07afb&type=album',
    message: 'Пройди игру 10 раз, что бы осознать на сколько Кодзима гениален'
  },

  {
    name: 'Metal Gear',
    type: 'audio',
    message:
      'Вас заметили. Звук обнаружения, который получил обширную популярность среди игрового коммьюнити был взял из игры Metal Gear'
  },
  {
    name: 'Dead cells',
    type: 'picture',
    data: 'https://sun9-19.userapi.com/impg/wp2VKEqDZXHuXY4Xn5E4VBoABwevO5cfLF2hCQ/D8Yic11dzNU.jpg?size=1544x964&quality=96&sign=0e3bb726b6dc8ecd7fbeb6a9292a58b0&type=album',
    message: 'Убей. Умри. Научись. Повтори.'
  },
  {
    name: 'Divinity: Original Sin 2',
    type: 'text',
    content: 'Один из отзывов к этой игре в Steam гласит...',
    data: 'Ограбил кота. поговорил с крысой и помог завести ей отношения с черепахой.  А потом пошел и убил краба-отшельника, питающегося драконами',
    message: 'Я хочу чтоб ты разделся. Сейчас же'
  },

  {
    name: 'I Wanna Be the Boshy',
    type: 'video',
    message:
      'Ничего не скажешь игра супер!Когда она только вышла это действительно для меня было нечто.В подобные игры до нее еще не играла. Настоящая жизнь, мир героя, сюжет, противники, бои - все в этой игре исключительное! А как передана атмосфера того средневековья, какая завораживающая музыка! От меня высшая оценка!'
  },
  {
    name: "No Man's Sky",
    type: 'picture',
    data: 'https://sun9-40.userapi.com/impg/jBLb0x_TbNTiaZ2coeGlhpMhROV89Hg30J3rnA/9eUCrH-Zm_U.jpg?size=2294x1386&quality=96&sign=a8046578d9ee5905c610a583fdaf62ce&type=album',
    message: 'На E3 все так и было'
  },

  {
    name: 'Sims 4',
    type: 'picture',
    data: 'https://sun9-42.userapi.com/impg/OZVHfMnVe8-WiELQau03BrnHKExqHOT9r0f11A/D-I2nJdWyfs.jpg?size=2034x1328&quality=96&sign=04846243f38e1c40e12ea33c1707037c&type=album',
    message:
      'Великие умы нашего времени глаголили: Если вам надоела ваша дивчушка то поставьте ей на комп симс или линягу'
  },
  {
    name: 'Grand Theft Auto: Vice City',
    type: 'audio',
    message: 'Здарова! Я Рико! А это ты тот чувак с большими cojones??'
  },

  {
    name: 'League of legends',
    type: 'picture',
    data: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMTvun1XR5Ok0jZtpabYopmPDqsRFzgJZBvq4ojfYfrgMF7rxeGMJcXI4778TtpqeZ-vM&usqp=CAU',
    message: 'DOTA > LOL'
  },
  {
    name: 'Hearthstone',
    type: 'audio',
    message: 'Добро пожаловать в мою таверну!'
  },
  {
    name: 'PlayerUnknown',
    type: 'picture',
    data: 'https://pbs.twimg.com/media/DVSVvIeVAAABXTO?format=jpg&name=large',
    message: 'Это как Арма, только со сковородой'
  },
  {
    name: 'The Simpsons: Hit & Run',
    type: 'picture',
    data: 'https://sun9-9.userapi.com/impg/Dwh8AykYBMpElZ4M-PK_2f0v-JV4hIKQdPPm-g/Ks8kQEWBHhk.jpg?size=1378x760&quality=96&sign=1041e22b03c93ee3a35294c38f5ff02b&type=album',
    message: 'Кстати, на википедии написано, что это автосимулятор'
  },

  {
    name: 'Старый хуй',
    type: 'text',
    content: 'Продолжи фразу',
    data: 'Ламберт, Ламберт - хер моржовый! Ламберт, Ламберт...',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eum fugit at quas illum ex maxime natus, culpa cum dicta repellendus blanditiis nulla officiis voluptatum non voluptate delectus debitis facilis!'
  }
];
