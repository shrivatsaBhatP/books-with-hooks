import React from 'react';
import { SearchProps } from '../../../common/interface';
import Input from '../../atoms/Input';

const Search = React.forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  return (
    <div>
      <Input {...props} type="text" ref={ref} />
    </div>
  );
});

export default Search;
