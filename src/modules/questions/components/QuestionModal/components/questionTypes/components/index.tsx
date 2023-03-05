import React from 'react';
import s from './index.module.scss';

const QuestionTitle: IFC = (props) => {
  const { children } = props;

  return <h4 className={s.title}>{children}</h4>;
};

export default QuestionTitle;
