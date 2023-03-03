import React from 'react';
import cx from 'classnames';
import s from './index.module.scss';

const FieldSet: IFC<{ legend?: JSX.Element | string }> = (props) => {
  const { legend, style = {}, children, className } = props;

  return (
    <fieldset className={cx(s.fieldset, className && className)}>
      {legend && <legend className={s.legend}> {legend}</legend>}
      <div className={s.content} style={style}>
        <div className={s.wrapper}>{children}</div>
      </div>
    </fieldset>
  );
};

export default FieldSet;
