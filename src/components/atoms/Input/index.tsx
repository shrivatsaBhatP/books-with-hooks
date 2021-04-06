import React from 'react';
import classes from './Input.module.css';
import { InputProps } from '../../../common/interface';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    const style: React.CSSProperties = {
      width: props.width,
      fontSize: props.fontSize,
      color: props.color,
    };

    return (
      <>
        <input
          type={type}
          className={[classes.input].join(' ')}
          value={props.value}
          style={style}
          {...props}
          ref={ref}
        />
      </>
    );
  }
);

export default Input;
