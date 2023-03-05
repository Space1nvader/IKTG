export type Answer = Record<string, boolean | never>;

export const getAnswersStorage = () => {
  const storage = localStorage.getItem('answers');

  if (storage) {
    return JSON.parse(storage) as Answer;
  }

  return {};
};
