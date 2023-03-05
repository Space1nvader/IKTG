import React from 'react';
import s from './index.module.scss';

const AnswerDescription: IFC = (props) => {
  const { children } = props;

  return (
    <div className={s.description}>
      <h5 className={s.title}>Correct!</h5>
      {children}
    </div>
  );
};

export default AnswerDescription;
