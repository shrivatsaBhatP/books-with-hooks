import React, { Children } from 'react';
import { TableProps } from '../../../common/interface';
import Text from '../../atoms/Text';
import classes from './Table.module.css';

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div className={classes['table-body']}>
      <div className={classes['table-header']}>
        <Text type="h3">Title</Text>
      </div>
      <div className={classes['table-header']}>
        <Text type="h3">Author</Text>
      </div>
      <div className={classes['table-header']}>
        <Text type="h3">Pub Year</Text>
      </div>
      {children}
    </div>
  );
};

export default Table;
