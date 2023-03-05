import { getAchievementStorage } from './getAchievement';

export const setAchievementStorage = (achievement: string) => {
  const achievements = getAchievementStorage();

  localStorage.setItem('achievement', JSON.stringify([...achievements, achievement]));
};
