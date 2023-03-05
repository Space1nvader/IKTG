import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Question } from 'api/questions';
import Audio from './audioFiles';
import QuestionTitle from '../components';

const AudioQuestion: IFC<Question> = (props) => {
  const { name, content } = props;
  const audio = Audio[name];

  return (
    <div>
      {content && <QuestionTitle>{content}</QuestionTitle>}
      <ReactAudioPlayer controls src={audio} />
    </div>
  );
};

export default AudioQuestion;
