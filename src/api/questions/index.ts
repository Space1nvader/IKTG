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
    content: 'Музыку из какой игры вы слышите?',
    message: 'Лучше этой игры - только копатель онлайн'
  },
  {
    name: 'Diablo',
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
    data: 'Что за игра показана на видео?',
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
    data: 'https://sun9-56.userapi.com/impg/6tP4cuU9OpBCQ9ccJS123Gx_UGz4_VqxQAZlLQ/DbjGubByCz8.jpg?size=2192x1286&quality=96&sign=fee441512db2a54f6c9fb617bc3adc37&type=album',
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
    name: 'Genshin impact',
    type: 'picture',
    data: 'https://sun9-68.userapi.com/impg/nOH2FPRhXJI4e_k2R90fZji30yJrgemDxiSKFQ/atOY4QDXkF8.jpg?size=2560x1560&quality=96&sign=b3469eca66637b9f565adac05b4a9eeb&type=album',
    message: 'Достойная игра для достойных мужчин'
  },

  {
    name: 'Cyberpunk 2077',
    type: 'audio',
    message:
      'Знаешь, Ви, походу над тобой попросту издеваются. Спорим, все эти точки на карте складываются в один огромный философический х*й?'
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
    data: 'https://sun9-47.userapi.com/impf/c624825/v624825705/dc90/PHwsIQarc-k.jpg?size=1920x1080&quality=96&sign=c847333782caa27baf8e7a1a1b9819af&type=album',
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
    message: 'LOL > DOTA'
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
    data: 'https://i1.wp.com/gameplaying.info/wp-content/uploads/2016/11/dark-souls-3-sirris-quest.jpg?fit=854%2C480&ssl=1',
    message: 'Да есть там сюжет!'
  },
  {
    name: 'FINAL FANTASY XV',
    type: 'picture',
    data: 'https://sun9-69.userapi.com/impg/0BKaGo0boBdtlU7z7OloNVUUz6TA909eoFVPFw/YNhQGrrG6Vo.jpg?size=1658x884&quality=96&sign=394b7d3a2d50fefd57f84a616fc62161&type=album',
    message: 'Вы может и не играли в эту игру, но Синди ты точно узнаешь, верно?'
  },

  {
    name: 'Serious Sam',
    type: 'audio',
    content: 'Вот и думай',
    message:
      'Серия Serious Sam давно стала классикой и считается гордостью ПК (хотя постоянно пыталась перебраться на консольный рынок). Её игровой процесс завораживает благодаря большому количеству разнообразных монстров, трудных передряг и харизматичному главному герою, в честь кого игра и получила своё название.'
  },
  {
    name: 'Among Us',
    type: 'audio',
    message: 'А ты там скачивал или загружал файлы?'
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
    name: 'The Elder Scrolls V: Skyrim',
    type: 'audio',
    message: 'Я украл твой сладкий рулет'
  },
  {
    name: 'Fortnite',
    type: 'picture',
    data: 'https://fortnitegames.ru/wp-content/uploads/2020/08/stroitelstvo-fortnajt1.jpg',
    message: 'Да он не для школьников! Просто у него аудитория такая.'
  },

  {
    name: 'Старый хуй',
    type: 'text',
    content: 'Продолжи фразу',
    data: 'Ламберт, Ламберт - хер моржовый! Ламберт, Ламберт...',
    message: 'Ну че малютки все еще бегаете за Йеннифер?'
  }
];
