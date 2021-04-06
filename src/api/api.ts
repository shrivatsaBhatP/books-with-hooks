const baseUrl = 'http://openlibrary.org';

export function searchBooks(query: string) {
  const url = new URL(baseUrl + '/search.json');
  url.searchParams.append('title', query);
  return fetch(String(url)).then((response) => response.json());
}
