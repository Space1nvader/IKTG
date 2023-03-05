import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Question, questions } from 'api/questions';
import { getAnswersSelector } from 'store/answers/selectors';
import {
  resetCurrentQuestionAction,
  resetNextQuestionAction,
  setCurrentQuestionAction,
  setNextQuestionAction
} from 'store/questions/actions';
import { currentQuestionSelector } from 'store/questions/selectors';
import GamePoint from './components/GamePoint';
import QuestionModal from './components/QuestionModal';
import s from './index.module.scss';

const Questions = () => {
  const currentQuestion = useSelector(currentQuestionSelector);
  const dispatch = useDispatch();
  const answers = useSelector(getAnswersSelector);

  const openQuestion = (game: Question) => () => {
    dispatch(setCurrentQuestionAction(game));
  };

  useEffect(() => {
    if (currentQuestion.name) {
      const index = questions.indexOf(currentQuestion);

      const nextQuestions = questions.slice(index + 1);
      // Находим первый вопрос на который не дели ответ
      const nextQuestion = nextQuestions.find((question) => !answers[question.name]);

      if (nextQuestion) {
        dispatch(setNextQuestionAction(nextQuestion));
      } else {
        dispatch(resetNextQuestionAction());
      }
    }
  }, [currentQuestion.name]);

  const closeModalHandler = () => {
    dispatch(resetCurrentQuestionAction());
  };

  return (
    <div className={s.questions}>
      {questions.map((game, index) => {
        const isAnswered = answers[game.name];

        return (
          <GamePoint
            key={game.name}
            title={isAnswered ? game.name : ''}
            answered={isAnswered}
            onClick={openQuestion(game)}
          >
            {index + 1}
          </GamePoint>
        );
      })}
      {!!currentQuestion.name && <QuestionModal onClose={closeModalHandler} />}
    </div>
  );
};

export default Questions;
