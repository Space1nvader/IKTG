import React from 'react';
import classNames from 'classnames';
import s from './index.module.scss';

export interface IButtonComponent extends Omit<IButtonProps, 'children'> {
  size?: SizeType;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  active?: boolean;
  testId?: string;
  children: React.ReactNode;
}

/**
 *
 *  @description Кнопка из библиотеки компонентов банка SW-UI
 *
 *  @param Button HTML Attributes
 *  @param size - SizeType
 *  @param icon - JSX.Element
 *  @param iconPosition - 'left' | 'right'
 *  @param testId - Идентификатор для UI тестов
 *  @param active - boolean
 *
 */
const Button: IFC<IButtonComponent> = (props) => {
  const {
    children,
    size = 'large',
    type = 'button',
    active = false,
    className = '',
    icon,
    testId,
    iconPosition = 'left',
    ...other
  } = props;

  const classList = classNames(
    s.button,
    !!icon && s[iconPosition],
    active && s.active,
    s[size],
    className
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} data-test-id={testId} className={classList} {...other}>
      {icon && <div className={classNames(s.icon, s[iconPosition])}>{icon}</div>}
      {children}
    </button>
  );
};

export default Button;
