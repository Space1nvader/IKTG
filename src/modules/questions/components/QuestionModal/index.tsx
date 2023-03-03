import React from 'react';
import Button from 'components/Button';
import TextField from 'components/Fields/TextField';
import IconButton from 'components/IconButton';
import { Question } from 'modules/questions';
import AudioQuestion from './components/questionTypes/AudioQuestion';
import PictureQuestion from './components/questionTypes/PictureQuestion';
import TextQuestion from './components/questionTypes/TextQuestion';
import VideoQuestion from './components/questionTypes/VideoQuestion';
import s from './index.module.scss';

const QUESTION_TYPE_MAP = {
  audio: AudioQuestion,
  video: VideoQuestion,
  picture: PictureQuestion,
  text: TextQuestion
};

export type QuestionType = keyof typeof QUESTION_TYPE_MAP;

const QuestionModal: IFC<{ question: Question; onClose: () => void }> = (props) => {
  const { onClose, question } = props;
  const { type } = question;

  return (
    <div className={s.questionModal}>
      <div className={s.container}>
        <div className={s.content}>
          {QUESTION_TYPE_MAP[type](question)}
          <IconButton className={s.closeButton} onClick={onClose}>
            X
          </IconButton>
        </div>
        <div className={s.controls}>
          <TextField className={s.field} value="" />
          <Button disabled>Share</Button>
          <Button>Next game</Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
