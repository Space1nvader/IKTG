import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Button';
import { getAnswersSelector } from 'store/answers/selectors';
import { setCurrentQuestionAction } from 'store/questions/actions';
import { currentQuestionSelector, nextQuestionSelector } from 'store/questions/selectors';
import s from './index.module.scss';

const QuestionControls = () => {
  const answers = useSelector(getAnswersSelector);
  const nextQuestion = useSelector(nextQuestionSelector);
  const currentQuestion = useSelector(currentQuestionSelector);
  const dispatch = useDispatch();

  const isAnswered = answers[currentQuestion.name];

  const setNextGameHandler = () => {
    dispatch(setCurrentQuestionAction(nextQuestion));
  };

  return (
    <div className={s.controls}>
      <Button disabled>Share</Button>

      <Button
        className={`${s.button} ${isAnswered ? s.answered : ''}`}
        onClick={setNextGameHandler}
        data-text="Skip"
      >
        Next game
      </Button>
    </div>
  );
};

export default QuestionControls;
