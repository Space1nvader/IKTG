import React from 'react';
import Button from 'components/Button';
import s from './index.module.scss';

const GamePoint: IFC<IButtonProps> = (props) => {
  const { children, ...other } = props;

  return (
    <Button className={s.gamePoint} {...other}>
      {children}
    </Button>
  );
};

export default GamePoint;
