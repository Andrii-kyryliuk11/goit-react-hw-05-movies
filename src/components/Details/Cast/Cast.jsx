import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from 'services/Api';
import css from './Cast.module.css';

const api = new Api();
export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (cast === null) {
      api.searchMovieById(`${movieId}/credits`).then(res => {
        setCast(res.cast);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return cast !== null ? (
    <div className={css.cast}>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/h100${actor.profile_path}`}
                alt={actor.original_name}
              />
              <span>{actor.original_name}</span>
              <span>Character: {actor.character}</span>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <span>Nothing found</span>
  );
}
