import React from 'react';
import { Icons } from 'components/Icons';
import Tooltip from 'components/Tooltip';
import s from './index.module.scss';

interface FieldLabelProps {
  name?: string;
  tooltip?: JSX.Element | string;
  onClick?: () => void;
}

/**
 * Компонент лейбла для полей ввода
 * @param name - {string} Строка для привязки к полю ввода
 * @param tooltip - {JSX.Element | string} Элемент отображающийся в подсказке
 * @returns JSX.Element
 */
const FieldLabel: IFC<FieldLabelProps> = (props) => {
  const { name, tooltip, children, className = '', ...other } = props;

  return (
    <label className={`${s.label} ${className}`} htmlFor={name} {...other}>
      {children}
      {tooltip && (
        <Tooltip text={tooltip}>
          <Icons.Close className={s.icon} />
        </Tooltip>
      )}
    </label>
  );
};

export default FieldLabel;
