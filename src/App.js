import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';

const App = () => (
<>
<ul>
 <li>
     <NavLink to = "/movies" className = '' activeClassName = ''>Movies</NavLink>
 </li>
</ul>
<Switch>
<Route exact path="/" component={HomePage} />
<Route exact path="/movies" component={MoviesPage} />
<Route component={HomePage} />
</Switch>
</>
);

export default App;
