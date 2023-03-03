import React, { useState } from 'react';
import GamePoint from './components/GamePoint';
import QuestionModal, { QuestionType } from './components/QuestionModal';
import s from './index.module.scss';

export type Question = {
  name: string;
  type: QuestionType;
  content: string;
  data?: string;
};
const mok: Question[] = [
  {
    name: 'portal 2',
    type: 'picture',
    content: '',
    data: 'https://www.nme.com/wp-content/uploads/2020/07/072020-Portal-2-Valve.jpeg'
  },
  {
    name: 'por',
    type: 'text',
    content: '',
    data: 'https://www.nme.com/wp-content/uploads/2020/07/072020-Portal-2-Valve.jpeg'
  },
  {
    name: 'portal 4',
    type: 'audio',
    content: '',
    data: 'https://www.nme.com/wp-content/uploads/2020/07/072020-Portal-2-Valve.jpeg'
  },
  {
    name: 'portal 3',
    type: 'video',
    content: '',
    data: 'Uva19TXOi8o'
  }
];

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | undefined>(undefined);

  const openQuestion = (game: Question) => () => {
    setCurrentQuestion(game);
  };

  const closeModalHandler = () => {
    if (currentQuestion) setCurrentQuestion(undefined);
  };

  return (
    <div className={s.questions}>
      {mok.map((game, index) => (
        <GamePoint key={game.name} onClick={openQuestion(game)}>
          {index + 1}
        </GamePoint>
      ))}
      {!!currentQuestion && (
        <QuestionModal onClose={closeModalHandler} question={currentQuestion} />
      )}
    </div>
  );
};

export default Questions;
