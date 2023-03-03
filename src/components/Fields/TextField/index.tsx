import React, { useState } from 'react';
import classNames from 'classnames';
import FieldError from '../components/Error';
import FieldLabel from '../components/Label';
import s from './index.module.scss';

export interface IFieldProps extends Omit<IInputProps, 'size'> {
  error?: string | boolean;
  icon?: JSX.Element;
  label?: string | JSX.Element;
  tooltip?: string | JSX.Element;
  iconPosition?: 'left' | 'right';
  size?: SizeType;
}
/**
 * Текстовое поле ввода из дизайн библиотеки SW-UI
 *
 * @extends HTMLInputAttributes - все поля обрабатываемые тегом input
 * @param label - {JSX.Element | string} Заголовок поля ввода
 * @param tooltip - {JSX.Element | string} Отображаемая подсказка для заголовка поля ввода
 * @param icon - {JSX.Element | string} Компонент иконки
 * @param iconPosition - {'left' | 'right'} Сторона отображаемого компонента иконки по горизонтали
 * @param size -  {SizeType} Размер поля ввода
 * @param error {string | boolean} Состояние ошибки или текст ошибки для поля ввода
 * @returns {JSX.Element}
 */
const TextField: IFC<IFieldProps> = (props) => {
  const {
    name,
    className,
    type = 'text',
    label,
    error,
    size = 'medium',
    tooltip,
    icon,
    id,
    onChange,
    value = '',
    iconPosition = 'right',
    ...other
  } = props;

  const [fieldValue, setFieldValue] = useState<string | number>(value as string | number);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setFieldValue(targetValue);

    if (onChange) onChange(event);
  };

  const inputClassList = classNames(s.input, !!icon && s[iconPosition], s[size], error && s.error);

  return (
    <div className={classNames(s.field, className && className)}>
      {label && (
        <FieldLabel tooltip={tooltip} name={name}>
          {label}
        </FieldLabel>
      )}
      <input
        className={inputClassList}
        value={fieldValue}
        name={name}
        id={id || name}
        onChange={onChangeHandler}
        type={type}
        {...other}
      />

      {typeof error === 'string' && <FieldError name={name}>{error}</FieldError>}
      {icon && (
        <label htmlFor={name} className={classNames(s.icon, s[iconPosition])}>
          {icon}
        </label>
      )}
    </div>
  );
};

export default React.memo(TextField);
