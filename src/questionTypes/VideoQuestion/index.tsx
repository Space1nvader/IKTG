// @ts-nocheck
import React from 'react';
import ReactPlayer from 'react-player';
import { Question } from 'api/questions';
import Video from './videoFiles';
import QuestionTitle from '../components';
import s from './index.module.scss';

const VideoQuestion: IFC<Question> = (props) => {
  const { name, content } = props;

  const video = Video[name];

  return (
    <div className={s.video}>
      {content && <QuestionTitle>{content}</QuestionTitle>}

      <ReactPlayer title="video" url={video} controls width="100%" height="100%" />
    </div>
  );
};

export default VideoQuestion;
