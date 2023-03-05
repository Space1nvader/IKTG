import { ActionType } from 'typesafe-actions';
import { Question } from 'api/questions';

export const setCurrentQuestionAction = (payload: Question) => ({
  type: 'CURRENT_QUESTION/SET',
  payload
});

export const setNextQuestionAction = (payload: Question) => ({
  type: 'NEXT_QUESTION/SET',
  payload
});

export const resetCurrentQuestionAction = () => ({
  type: 'CURRENT_QUESTION/RESET'
});

export const resetNextQuestionAction = () => ({
  type: 'NEXT_QUESTION/RESET'
});

export type Actions = ActionType<typeof setCurrentQuestionAction | typeof setNextQuestionAction>;
