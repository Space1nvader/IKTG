import React from 'react';
import s from './index.module.scss';

const QuestionContent: IFC = (props) => {
  const { children } = props;

  return <div className={s.question}>{children}</div>;
};

export default QuestionContent;
