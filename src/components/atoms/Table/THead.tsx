import React from 'react';
import { THeadProps } from '../../../common/interface';
import TRow from './TRow';
import classes from './Table.module.css';

const THead: React.FC<THeadProps> = ({ headerData }) => {
  return (
    <thead className={classes.thead}>
      <TRow columnType="th" rowData={headerData} />
    </thead>
  );
};

export default THead;
