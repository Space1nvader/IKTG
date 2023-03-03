import React from 'react';
import classNames from 'classnames';
import s from './index.module.scss';

export interface IAnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    React.AriaAttributes {}

/**
 * Компонент для ссылки ведущей на внешний ресурс
 * @extends React.AnchorHTMLAttributes
 * @returns JSX.ELement
 */
const Link: IFC<IAnchorProps> = (props) => {
  const { children, target = '_blank', className, ...other } = props;

  return (
    <a target={target} className={classNames(s.link, className)} {...other}>
      {children}
    </a>
  );
};

export default Link;
