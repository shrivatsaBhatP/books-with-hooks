import { forwardRef } from 'react';
import { ButtonProps } from '../../../common/interface';
import styles from './Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, btnStyle = 'primary', backgroundColor, ...props }, ref) => {
    return (
      <button
        className={[styles.Button, styles[btnStyle]].join(' ')}
        style={{ backgroundColor }}
        {...props}
        ref={ref}>
        {children}
      </button>
    );
  }
);

export default Button;
