import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

const App = () => (
<>
<ul>
    <li>
        <NavLink exact to = "/" className = '' activeClassName = ''>Home</NavLink>
    </li>
    <li>
        <NavLink exact to = "/movies" className = '' activeClassName = ''>Movies</NavLink>
    </li>
</ul>
<Switch>
    <Route exact path="/" component={HomePage} />
    <Route pant = '/movies/:movieId' component = {MovieDetailsPage} />
    <Route exact path="/movies" component={MoviesPage} />
    <Route component={HomePage} />
</Switch>
</>
);

export default App;
