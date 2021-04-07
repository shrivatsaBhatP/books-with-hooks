import React from 'react';
import TBody from './TBody';
import THead from './THead';
import classes from './Table.module.css';

import { TableProps } from '../../../common/interface';

const Table: React.FC<TableProps> = (props) => {
  return (
    <table className={classes['table']}>
      <THead headerData={props.data.header} />
      <TBody bodyData={props.data.body} />
    </table>
  );
};

export default Table;
