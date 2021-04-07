import React from 'react';
import { TBodyProps } from '../../../common/interface';
import TRow from './TRow';
import classes from './Table.module.css';

const TBody: React.FC<TBodyProps> = ({ bodyData }) => {
  return (
    <tbody className={classes.tbody}>
      {bodyData.map((data) => (
        <TRow rowData={data} />
      ))}
    </tbody>
  );
};

export default TBody;
