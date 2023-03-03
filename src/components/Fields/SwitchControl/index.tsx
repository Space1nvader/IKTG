import React, { useState } from 'react';
import classNames from 'classnames';
import { Icons } from 'components/Icons';
import FieldError from '../components/Error';
import { IFieldProps } from '../TextField';
import s from './index.module.scss';

export interface ICheckboxProps extends Omit<IFieldProps, 'value'> {
  value?: boolean;
}
const Checkbox: IFC<ICheckboxProps> = (props) => {
  const {
    className,
    value = false,
    id,
    name,
    label,
    error,
    size,
    children,
    onChange,
    ...other
  } = props;
  const [fieldValue, setFieldValue] = useState<boolean>(value);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.checked);

    if (onChange) onChange(event);
  };

  return (
    <div className={classNames(s.checkbox, className)}>
      <input
        className={s.input}
        type="checkbox"
        checked={fieldValue}
        name={name}
        id={id || name}
        onChange={onChangeHandler}
        {...other}
      />

      <label className={s.label} htmlFor={name}>
        <div className={s.icon}>
          <Icons.Close />
        </div>

        {children || label}
      </label>
      {typeof error === 'string' && (
        <FieldError className={s.error} name={name}>
          {error}
        </FieldError>
      )}
    </div>
  );
};

export default Checkbox;
