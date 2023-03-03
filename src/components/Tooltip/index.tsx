import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import ReactDom from 'react-dom';
import s from './index.module.scss';
/**
 * @param text - {JSX.Element | string } Элемент отображающийся в подсказке
 * @extends IFC
 * @returns JSX.Element
 */
const Tooltip: IFC<{ text: JSX.Element | string }> = (props) => {
  const { children, text, style, className, ...other } = props;

  const [isActive, setActive] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const tooltipRef = useRef<HTMLDivElement>(null);

  const setToolTipPosition = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const targetRect = target.getBoundingClientRect();
    const tooltipRect = tooltipRef.current ? tooltipRef.current.getBoundingClientRect() : null;
    const { width, height, left, top } = targetRect;

    let renderX = left + width;
    let renderY = height + top;

    if (tooltipRect) {
      const tooltipWidth = tooltipRect.width;
      const tooltipHeight = tooltipRect.height;
      const tooltipLeft = tooltipRect.left;

      if (tooltipLeft + tooltipWidth > document.body.clientWidth) {
        renderX = left - tooltipWidth - width;
      }

      if (tooltipRect.bottom > window.innerHeight) {
        renderY = top - tooltipHeight;
      }
    }
    setPosition({ left: renderX, top: renderY });
  };

  const handleHover = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    setToolTipPosition(event);

    if (!isActive) {
      setActive(true);
    }
  };

  const handleLeave = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setActive(false);
  };

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onFocus={handleHover}
        onBlur={handleLeave}
        className={s.childrenWrapper}
      >
        {children}
      </div>
      {isActive &&
        ReactDom.createPortal(
          <div
            ref={tooltipRef}
            style={{ ...style, ...position }}
            className={classNames(s.tooltip, className)}
            {...other}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
