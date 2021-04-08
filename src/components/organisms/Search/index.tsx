import React, { useEffect, useRef, useState } from 'react';
import classes from './Search.module.css';
import { searchBooks } from '../../../api/api';
import Table from '../../molecules/Table';
import Text from '../../atoms/Text';
import SearchBox from '../../molecules/SearchBox';
import Loader from '../../atoms/Loader';

export default function Search() {
  const [status, setStatus] = useState({ loading: false, error: false });
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Object[]>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleCallback = () => {
    setStatus({ ...status, loading: true });
    searchBooks(search)
      .then((response) => {
        setResults(response.docs);
      })
      .finally(() => {
        setStatus({ ...status, loading: false });
      });
  };

  useEffect(() => {
    const timeout = setTimeout(handleCallback, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className={classes['serach-container']}>
      <SearchBox
        width={'50vw'}
        onChange={handleSearch}
        placeholder="Search"
        ref={inputRef}
      />
      {status.loading && <Loader />}
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
