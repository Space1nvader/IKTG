import React from 'react';
import classNames from 'classnames';
import s from './index.module.scss';

const FieldError: IFC<{ name?: string }> = (props) => {
  const { name, className, children } = props;

  return (
    <label className={classNames(s.error, className)} htmlFor={name}>
      {children}
    </label>
  );
};

export default FieldError;
