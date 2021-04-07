import React from 'react';
import { TDataProps } from '../../../common/interface';
import classes from './Table.module.css';

const TData: React.FC<TDataProps> = ({ type = 'td', children }) => {
  const TYPE = type;
  return <TYPE className={classes[type]}>{children}</TYPE>;
};

export default TData;
