import Home from 'pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Details from './Details/Details';
// import Cast from './Details/Cast/Cast';
import Search from './Search/Search';
// import Reviews from ;
import { lazy } from 'react';
import Layout from './Layout';

const Reviews = lazy(() => import('./Details/Reviews/Reviews'));
const Cast = lazy(() => import('./Details/Cast/Cast'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Search />} />
        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
