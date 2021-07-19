import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
      <nav className={style.nav}>
        <NavLink
          exact
          to={routes.home}
          className={style.home}
          activeClassName={style.item_active}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to={routes.movies}
          className={style.movies}
          activeClassName={style.item_active}
        >
          Movies
        </NavLink>
      </nav>
    );
  };
  
  export default Navigation;