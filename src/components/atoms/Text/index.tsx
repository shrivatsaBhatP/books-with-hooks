import React from 'react';
import { TextProps } from '../../../common/interface';
import classes from './Text.module.css';

const Text: React.FC<TextProps> = ({
  theme = 'default',
  size = 'default',
  fontWeight,
  ...props
}) => {
  const style: React.CSSProperties = {
    fontWeight,
    color: props.color,
  };
  return (
    <props.type
      {...props}
      className={[classes[theme], classes[size]].join(' ')}
      style={style}>
      {props.children}
    </props.type>
  );
};

export default Text;
