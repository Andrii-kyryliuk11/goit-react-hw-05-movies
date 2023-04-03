import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import Api from 'services/Api';

import css from './Search.module.css';
const api = new Api();
export default function Search() {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (searchQuery !== '') {
      api.searchMovieByQuery(searchParams).then(data => setData(data.results));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (searchQuery !== '') {
            api
              .searchMovieByQuery(searchParams)
              .then(data => setData(data.results));
          }
        }}
      >
        <input type="text" onChange={updateQueryString} value={searchQuery} />
        <button type="submit">Search</button>
      </form>
      {data && (
        <div className={css.searchList}>
          <ul>
            {data.map(movie => {
              return (
                <li key={movie.id} className={css.li}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <img
                      width="300"
                      height="450"
                      src={`https://image.tmdb.org/t/p/w300/${
                        movie.poster_path ?? 'sH6030EbSzOUTFFZrpnTdSpeNP0.jpg'
                      }`}
                      alt={movie.name ?? movie.title}
                    />
                    <p className={css.title}>{movie.name ?? movie.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
