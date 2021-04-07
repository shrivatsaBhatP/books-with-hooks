import React from 'react';
import data from './data';
import Table from './index';
import TBody from './TBody';
import THead from './THead';
import TRow from './TRow';

export default {
  Table: <Table data={data} />,
  THead: <THead headerData={data.header} />,
  TBody: <TBody bodyData={data.body} />,
  TRow: <TRow rowData={data.header} />,
};
