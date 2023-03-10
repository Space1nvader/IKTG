import React from 'react';
// import Aside from 'components/Aside';
import About from 'components/About';
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
    <About />
    {/* <Aside /> */}
  </div>
);

export default QuestionsPage;
