import React, { useEffect, useState } from 'react';
import { Question } from 'api/questions';
import IconButton from 'components/IconButton';
import { Icons } from 'components/Icons';
import QuestionTitle from '../components';
import s from './index.module.scss';

const PictureQuestion: IFC<Question> = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [isZoom, setZoom] = useState(false);
  const { data, content } = props;

  useEffect(() => {
    setLoading(true);
  }, [data]);

  const loadedHandler = () => {
    setLoading(false);
  };

  const zoomImage = (value: boolean) => () => {
    setZoom(value);
  };

  const keypressHandler = () => {
    zoomImage(false)();
  };

  useEffect(() => {
    document.addEventListener('keydown', keypressHandler);

    return () => {
      document.removeEventListener('keydown', keypressHandler);
    };
  }, []);

  return (
    <div className={s.picture}>
      <QuestionTitle>{content || 'Что за игра изображена на скриншоте?'}</QuestionTitle>
      <div className={`${s.imageWrapper} ${isLoading ? s.loading : ''}`}>
        <button title="zoom" type="button" onClick={zoomImage(true)} className={s.trigger}>
          <img onLoad={loadedHandler} className={s.image} src={data} alt="question" />
        </button>
      </div>
      {isZoom && (
        <div className={s.zoom}>
          <IconButton onClick={zoomImage(false)} className={s.close}>
            <Icons.Close />
          </IconButton>
          <img src={data} alt="question" />
        </div>
      )}
    </div>
  );
};

export default PictureQuestion;
