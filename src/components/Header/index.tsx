import React from 'react';
import { useSelector } from 'react-redux';
import { questions } from 'api/questions';
import { correctAnswersSelector } from 'store/answers/selectors';
import s from './index.module.scss';

const Header = () => {
  const answersArray = useSelector(correctAnswersSelector);

  return (
    <div className={s.header}>
      <h4 className={s.title}>
        IKTG <span className={s.fullname}>- I KNOW THIS GAME</span>
      </h4>
      <div className={s.counter}>
        {answersArray.length}/{questions.length}
      </div>
    </div>
  );
};

export default Header;
