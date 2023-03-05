import { Question } from 'api/questions';
import { Store } from 'store';

export const currentQuestionSelector = (state: Store): Question => state.currentQuestion.question;

export const nextQuestionSelector = (state: Store): Question => state.currentQuestion.nextQuestion;
