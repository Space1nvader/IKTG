import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { questions } from 'api/questions';
import { getAchievementStorage } from 'api/storage/getAchievement';
import { setAchievementStorage } from 'api/storage/setAchievement';
import { correctAnswersSelector } from 'store/answers/selectors';
import { achievements, AchievementsType } from './achievementsList';
import s from './index.module.scss';

const Achievement = () => {
  const [currentAchievement, setCurrentAchievement] = useState<AchievementsType | null>(null);

  const answersArray = useSelector(correctAnswersSelector);

  const setShowAchievementHandler = (value: AchievementsType) => {
    setCurrentAchievement(value);
    setTimeout(() => {
      setCurrentAchievement(null);
    }, 7000);
  };

  const setAchievementHandler = () => {
    const receivedAchievements = getAchievementStorage();

    if (answersArray.length === 1 && !receivedAchievements.includes('1')) {
      setAchievementStorage('1');
      setShowAchievementHandler('1');
    }

    if (answersArray.length === questions.length && !receivedAchievements.includes('all')) {
      setAchievementStorage('all');
      setShowAchievementHandler('all');
    }
  };

  useEffect(() => {
    setAchievementHandler();
  }, [answersArray.length]);

  const currentAchievementData = currentAchievement ? achievements[currentAchievement] : null;

  return currentAchievement && currentAchievementData ? (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      onClick={() => setCurrentAchievement(null)}
      className={s.achievement}
      src={currentAchievementData.image}
      alt={currentAchievementData.title}
    />
  ) : null;
};

export default Achievement;
