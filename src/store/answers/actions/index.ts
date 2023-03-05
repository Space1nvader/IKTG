import { ActionType } from 'typesafe-actions';
import { Answer } from 'api/storage/getAnswers';
import { setAnswerStorage } from 'api/storage/setAnswer';

export const setAnswerAction = (payload: Answer) => {
  setAnswerStorage(payload);

  return {
    type: 'ANSWER/SET',
    payload
  };
};

export type Actions = ActionType<typeof setAnswerAction>;
