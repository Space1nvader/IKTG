import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import IconButton from 'components/IconButton';
import { Icons } from 'components/Icons';
import { currentQuestionSelector } from 'store/questions/selectors';
import QuestionAnswerField from './components/AnswerField';
import QuestionControls from './components/Controls';
import QuestionContent from './components/QuestionContent';
import AudioQuestion from '../../../../questionTypes/AudioQuestion';
import PictureQuestion from '../../../../questionTypes/PictureQuestion';
import TextQuestion from '../../../../questionTypes/TextQuestion';
import VideoQuestion from '../../../../questionTypes/VideoQuestion';
import s from './index.module.scss';

const QUESTION_TYPE_MAP = {
  audio: AudioQuestion,
  video: VideoQuestion,
  picture: PictureQuestion,
  text: TextQuestion
};

export type QuestionType = keyof typeof QUESTION_TYPE_MAP;

const QuestionModal: IFC<{ onClose: () => void }> = (props) => {
  const { onClose } = props;

  const question = useSelector(currentQuestionSelector);
  const { type } = question;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={s.questionModal}>
      <IconButton className={s.closeButton} onClick={onClose}>
        <Icons.Close />
      </IconButton>
      <div className={s.content}>
        <QuestionContent>
          {type === 'audio' && <AudioQuestion {...question} />}
          {type === 'video' && <VideoQuestion {...question} />}
          {type === 'picture' && <PictureQuestion {...question} />}
          {type === 'text' && <TextQuestion {...question} />}
        </QuestionContent>
        <QuestionAnswerField />
      </div>

      <QuestionControls />
    </div>
  );
};

export default QuestionModal;
