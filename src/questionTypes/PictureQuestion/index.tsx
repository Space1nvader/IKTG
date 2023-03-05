import React, { useEffect, useState } from 'react';
import { Question } from 'api/questions';
import QuestionTitle from '../components';
import s from './index.module.scss';

const PictureQuestion: IFC<Question> = (props) => {
  const [isLoading, setLoading] = useState(false);
  const { data, content } = props;

  useEffect(() => {
    setLoading(true);
  }, [data]);

  const loadedHandler = () => {
    setLoading(false);
  };

  return (
    <div className={s.picture}>
      <QuestionTitle>{content || 'Что за игра изображена на скриншоте?'}</QuestionTitle>
      <div className={`${s.imageWrapper} ${isLoading ? s.loading : ''}`}>
        <img onLoad={loadedHandler} className={s.image} src={data} alt="question" />
      </div>
    </div>
  );
};

export default PictureQuestion;
