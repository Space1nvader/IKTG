import { Question } from 'api/questions';
import { Actions } from './actions';

export const initialState: {
  question: Question;
  nextQuestion: Question;
} = {
  question: {
    name: '',
    type: 'text',
    content: '',
    message: ''
  },
  nextQuestion: {
    name: '',
    type: 'text',
    content: '',
    message: ''
  }
};

const currentQuestionReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: Actions
) => {
  switch (action.type) {
    case 'CURRENT_QUESTION/SET':
      return {
        ...state,
        question: action.payload
      };
    case 'NEXT_QUESTION/SET': {
      return { ...state, nextQuestion: action.payload };
    }
    case 'CURRENT_QUESTION/RESET':
      return initialState;
    case 'NEXT_QUESTION/RESET':
      return { ...state, nextQuestion: initialState.nextQuestion };
    default:
      return state;
  }
};

export default currentQuestionReducer;
