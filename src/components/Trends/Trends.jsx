import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from 'services/Api';
import css from './Trends.module.css';

export default function Trends() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      Api().then(data => setData(data.results));
    }
  }, [data]);

  return (
    <ul className={css.trandList}>
      {data.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
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
  );
}
