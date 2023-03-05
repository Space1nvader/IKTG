import React from 'react';
import { Question } from 'api/questions';
import QuestionTitle from '../components';
import s from './index.module.scss';

const TextQuestion: IFC<Question> = (props) => {
  const { content, data } = props;

  return (
    <div className={s.text}>
      <QuestionTitle>{content || 'Из какой игры эта фраза?'}</QuestionTitle>
      {data}
    </div>
  );
};

export default TextQuestion;
