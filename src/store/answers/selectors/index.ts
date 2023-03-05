import { Answer } from 'api/storage/getAnswers';
import { Store } from 'store';

export const getAnswersSelector = (state: Store): Answer => state.answers;

export const correctAnswersSelector = (state: Store): string[] =>
  Object.entries(state.answers).reduce<string[]>((targetArray, [name, value]) => {
    if (value) {
      return [...targetArray, name];
    }

    return targetArray;
  }, []);
