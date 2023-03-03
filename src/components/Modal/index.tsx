import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import IconButton from 'components/IconButton';
import { Icons } from 'components/Icons';
// import { useClickOutside } from 'utils/useClickOutside';
import s from './index.module.scss';

const Modal: IFC<{ onClose: () => void }> = (props) => {
  const { className = '', children, onClose, ...other } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModalKeyDownHandler = (event: KeyboardEvent): void => {
    if (event.keyCode === 27) {
      event.preventDefault();

      if (onClose) onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeModalKeyDownHandler);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeModalKeyDownHandler);
    };
  }, []);

  // useClickOutside(modalRef, onClose);

  return createPortal(
    <div className={s.modal}>
      <div className={`${s.modalContainer} ${className}`} ref={modalRef} {...other}>
        <IconButton size="large" onClick={onClose} className={s.closeButton}>
          <Icons.Close />
        </IconButton>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
