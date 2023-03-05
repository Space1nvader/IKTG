import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Question } from 'api/questions';
import Audio from './audioFiles';
import QuestionTitle from '../components';
import s from './index.module.scss';

const AudioQuestion: IFC<Question> = (props) => {
  const { name, content } = props;
  const audio = Audio[name];

  return (
    <div className={s.audio}>
      {content && <QuestionTitle>{content}</QuestionTitle>}
      <ReactAudioPlayer controls src={audio} />
    </div>
  );
};

export default AudioQuestion;
