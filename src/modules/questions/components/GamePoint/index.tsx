import React from 'react';
import Button from 'components/Button';
import { QuestionType } from '../QuestionModal';
import s from './index.module.scss';

const GamePoint: IFC<{ answered?: boolean; type: QuestionType } & Omit<IButtonProps, 'type'>> = (
  props
) => {
  const { children, type, title, answered, ...other } = props;

  const pointAnsweredClassName = (() => {
    if (answered === true) {
      return s.answered;
    }

    if (answered === false) {
      return s.notAnswered;
    }

    return '';
  })();

  const pointClassList = `${s.gamePoint} ${pointAnsweredClassName}`;

  return (
    <Button className={pointClassList} title={title} {...other}>
      <span className={s.name} data-name={title || children}>
        {children}
      </span>
      <span className={s.type}>{type}</span>
    </Button>
  );
};

export default GamePoint;
