import React from 'react';
import { Question } from 'modules/questions';

const TextQuestion: IFC<Question> = (props) => {
  const { type } = props;

  return <div>{type}</div>;
};

export default TextQuestion;
