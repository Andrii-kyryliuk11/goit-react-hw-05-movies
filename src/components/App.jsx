import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import Details from './Details/Details';

import { lazy } from 'react';
import Layout from './Layout';
import Movies from 'pages/Movies';

const Reviews = lazy(() => import('./Details/Reviews/Reviews'));
const Cast = lazy(() => import('./Details/Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
