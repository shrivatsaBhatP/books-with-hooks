import React from 'react';
import { TRowProps } from '../../../common/interface';
import TData from './TData';
import classes from './Table.module.css';

const TRow: React.FC<TRowProps> = ({ rowData, columnType }) => {
  return (
    <tr className={classes.tr}>
      {(rowData || []).map((data: string | number) => (
        <TData type={columnType}>{data}</TData>
      ))}
    </tr>
  );
};

export default TRow;
