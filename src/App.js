import React, { Suspense, lazy }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Loader from './components/Loader';


 const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-views"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "movies-views"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /*webpackChunkName: "movies-details-views"*/),
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
