import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Api from 'services/Api';
import css from './Details.module.css';

export default function Details() {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    if (data === null) {
      Api(movieId).then(response => setData(response));
    }
    console.log(data);
  }, [data, movieId]);
  console.log(location);

  return (
    data && (
      <div className={css.container}>
        <img
          src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
          alt={`poster to movie ${data.title}`}
        />
        <div
          className={css.about}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(236,237,236, .9), rgba(236,237,236,0.9)), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <h2 className={css.title}>{data.title}</h2>

          <span className={css.titleSpan}>
            Rating: {Math.floor(data.vote_average * 10)}%
          </span>

          <span className={css.titleSpan}>Overviev</span>
          <p className={css.tag}>{data.overview}</p>
          <span className={css.titleSpan}>Genres</span>
          <p className={css.tag}>
            <ul className={css.genres}>
              {data.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </p>
          <div>
            <ul className={css.info}>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Revievs</Link>
              </li>
            </ul>
            <Suspense fallback={<div>loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    )
  );
}
