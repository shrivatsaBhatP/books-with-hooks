import React from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from './navLinks';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      {navLinks.map((link, idx) => {
        return (
          <span key={idx} className={classes['nav']}>
            <NavLink
              exact
              className={classes['nav-link']}
              activeClassName={classes.active}
              to={link.to}>
              {link.label}
            </NavLink>
          </span>
        );
      })}
    </div>
  );
};

export default Navigation;
