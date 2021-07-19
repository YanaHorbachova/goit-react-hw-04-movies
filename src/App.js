import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';


const App = () => (
<>

<Switch>
    <Route exact path={routes.home} component={HomePage} />
    <Route path = {routes.movieDetails} component = {MovieDetailsPage} />
    <Route exact path={routes.movies} component={MoviesPage} />
    <Route component={HomePage} />
</Switch>
</>
);

export default App;
