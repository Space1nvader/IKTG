import { getAnswersStorage, Answer } from './getAnswers';

export const setAnswerStorage = (answer: Answer) => {
  const answers = getAnswersStorage();

  localStorage.setItem('answers', JSON.stringify({ ...answers, ...answer }));
};
