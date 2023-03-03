import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import FieldError from '../components/Error';
import FieldLabel from '../components/Label';
import s from './index.module.scss';

export interface ITextAreaProps
  extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    React.AriaAttributes {
  error?: string | boolean;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  label?: string;
  tooltip?: JSX.Element | string;
  autoHeight?: boolean;
}

/**
 * Текстовое поле ввода
 * @extends HTMLTextAreaAttributes - все поля обрабатываемые тегом textarea
 * @param label - {JSX.Element | string} Заголовок поля ввода
 * @param tooltip - {JSX.Element | string} Отображаемая подсказка для заголовка поля ввода
 * @param icon - {JSX.Element | string} Компонент иконки
 * @param iconPosition - {'left' | 'right'} Сторона отображаемого компонента иконки по горизонтали
 * @param size -  {SizeType} Размер поля ввода
 * @param error {string | boolean} Состояние ошибки или текст ошибки для поля ввода
 * @returns {JSX.Element}
 */
const TextArea: IFC<ITextAreaProps> = (props) => {
  const {
    name,
    className,
    label,
    autoHeight = true,
    error,
    onChange,
    style = {},
    value = '',
    tooltip,
    icon,
    iconPosition = 'right',
    ...other
  } = props;

  const [fieldValue, setFieldValue] = useState<string | number>(value as string | number);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const targetValue = event.target.value;
    setFieldValue(targetValue);

    if (autoHeight && textAreaRef.current) {
      textAreaRef.current.style.overflow = 'hidden';
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${event.target.scrollHeight}px`;
    }

    if (onChange) onChange(event);
  };

  const textareaClassList = classNames(s.textarea, !!icon && s[iconPosition], error && s.error);

  return (
    <div className={classNames(s.field, className && className)}>
      {label && (
        <FieldLabel tooltip={tooltip} name={name}>
          {label}
        </FieldLabel>
      )}
      <textarea
        className={textareaClassList}
        onChange={onChangeHandler}
        name={name}
        ref={textAreaRef}
        value={fieldValue}
        style={{ ...style }}
        id={name}
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

export default React.memo(TextArea);
