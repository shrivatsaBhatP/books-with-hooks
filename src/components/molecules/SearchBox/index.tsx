import React from 'react';
import { SearchProps } from '../../../common/interface';
import Input from '../../atoms/Input';

const Search: React.FC<SearchProps> = (props) => {
  return (
    <div>
      <Input {...props} type="text" />
    </div>
  );
};

export default Search;
