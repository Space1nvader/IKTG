import React from 'react';
import Aside from 'components/Aside';
import Header from 'components/Header';
import Questions from 'modules/questions';
import s from './index.module.scss';

const QuestionsPage = () => (
  <div className="questionsPage">
    <Header />
    <div className={s.content}>
      <Questions />
      <Aside />
    </div>
  </div>
);

export default QuestionsPage;
