import { Answer, getAnswersStorage } from 'api/storage/getAnswers';
import { Actions } from './actions';

export const initialState: Answer = getAnswersStorage();

const answerReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case 'ANSWER/SET':
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default answerReducer;
