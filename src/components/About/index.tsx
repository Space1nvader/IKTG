import React from 'react';
import s from './index.module.scss';

const About = () => (
  <div className={s.about}>
    <button className={s.trigger} type="button">
      About
    </button>
    <div className={s.content}>
      <div className={s.text}>
        Стараюсь добавлять вопросы и обновлять их содержимое по возможности
        <br />
        <br />
        Если вы столкнулись с багом или неточностью в вопросах, а так же если у вас есть любые
        предложения и комментарии предложения - можете оставлять их в репозитории на github <br />
        <br />
        <a href="https://github.com/Space1nvader/IKTG">Исходный код приложения</a> - Осторожно в
        исходных файлах есть спойлеры к ответам
      </div>
    </div>
  </div>
);

export default About;
