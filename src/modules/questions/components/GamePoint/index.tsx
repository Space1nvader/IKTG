import React from 'react';
import Button from 'components/Button';
import s from './index.module.scss';

const GamePoint: IFC<{ answered?: boolean } & IButtonProps> = (props) => {
  const { children, answered, ...other } = props;

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
    <Button className={pointClassList} {...other}>
      {children}
    </Button>
  );
};

export default GamePoint;
