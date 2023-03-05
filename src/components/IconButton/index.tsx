import React from 'react';
import cx from 'classnames';
import s from './index.module.scss';

interface IconButtonProps extends IButtonProps {
  active?: boolean;
  size?: SizeType;
}

/**
 *
 *  @description Кнопка-Иконка из библиотеки компонентов банка SW-UI
 *
 *  @param Button HTML Attributes
 *  @param size - SizeType
 *  @param testId - Идентификатор для UI тестов
 *  @param active - boolean
 */
const IconButton: IFC<IconButtonProps> = (props) => {
  const { children, size = 'large', className = '', type = 'button', ...other } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={cx(s.button, s[size], className)} {...other}>
      {children}
    </button>
  );
};

export default IconButton;
