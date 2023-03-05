import { combineReducers } from 'redux';
import answerReducer from './answers';
import currentQuestionReducer from './questions';

export const rootReducer = combineReducers({
  currentQuestion: currentQuestionReducer,
  answers: answerReducer
});
