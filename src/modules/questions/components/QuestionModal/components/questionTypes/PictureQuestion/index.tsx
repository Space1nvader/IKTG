import React from 'react';
import { Question } from 'modules/questions';
import s from './index.module.scss';

const PictureQuestion: IFC<Question> = (props) => {
  const { type, data } = props;

  return (
    <div>
      {type} <img className={s.image} src={data} alt="question" />
    </div>
  );
};

export default PictureQuestion;
