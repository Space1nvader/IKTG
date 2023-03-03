import React, { useRef } from 'react';
import Button, { IButtonComponent } from 'components/Button';
import s from './index.module.scss';

export interface IFileFieldProps extends Omit<IButtonComponent, 'onChange'> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  multiple?: boolean;
  accept?: string;
}

const FileField: IFC<IFileFieldProps> = (props) => {
  const { children, onChange, multiple, ...other } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const openFileDialog = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const onInputFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={s.fileField}>
      <input
        type="file"
        className={s.input}
        multiple={multiple}
        onChange={onInputFileHandler}
        ref={inputRef}
      />
      <Button onClick={openFileDialog} {...other}>
        {children}
      </Button>
    </div>
  );
};

export default FileField;
