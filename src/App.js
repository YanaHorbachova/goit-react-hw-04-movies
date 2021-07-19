import React, { Suspense, lazy }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Loader from './components/Loader';


 const HomePage = lazy(() =>
  import('./views/HomePage'),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage'),
);

const App = () => (
<>
<Suspense fallback={<Loader />}>
<Switch>
    <Route exact path={routes.home} component={HomePage} />
    <Route path = {routes.movieDetails} component = {MovieDetailsPage} />
    <Route exact path={routes.movies} component={MoviesPage} />
    <Route component={HomePage} />
</Switch>
</Suspense>
</>
);

export default App;
