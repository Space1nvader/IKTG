export type Answer = Record<string, boolean | never>;

export const getAchievementStorage = () => {
  const storage = localStorage.getItem('achievement');

  if (storage) {
    return JSON.parse(storage) as string[];
  }

  return [];
};
