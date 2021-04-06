import React, { useEffect, useRef, useState } from 'react';
import classes from './Search.module.css';
import { searchBooks } from '../../../api/api';
import Table from '../../molecules/Table';
import Text from '../../atoms/Text';
import SearchBox from '../../molecules/SearchBox';

export default function Search() {
  const [results, setResults] = useState<Object[]>();

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchBooks(event.target.value).then((response) => {
      console.log(response);
      setResults(response.docs);
    });
  };

  return (
    <div className={classes['serach-container']}>
      <SearchBox
        width={'50vw'}
        onChange={handleSearch}
        placeholder="Search"
        ref={inputRef}
      />

      <Text type="h1">Search Results</Text>
      <Table>
        {(results || []).map((book: any) => (
          <React.Fragment key={book.key}>
            <Text type="label">{book.title}</Text>
            <Text type="label">
              {book.author_name && book.author_name.join(', ')}
            </Text>
            <Text type="label">{book.first_publish_year}</Text>
          </React.Fragment>
        ))}
      </Table>
    </div>
  );
}
