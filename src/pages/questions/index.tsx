import React from 'react';
import Aside from 'components/Aside';
import Header from 'components/Header';
import Questions from 'modules/questions';
import s from './index.module.scss';

const QuestionsPage = () => (
  <div className={s.page}>
    <div className={s.content}>
      <Header />
      <div className={s.questions}>
        <Questions />
      </div>
    </div>
    <Aside />
  </div>
);

export default QuestionsPage;
