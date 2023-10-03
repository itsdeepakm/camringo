import React from 'react';
import classes from './Nav.module.css';
import Menu from '../../UI/Menu';
import { Link } from 'react-router-dom';
import onlyLogo from '../../Assets/onlyLogo.png';

const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.name}>
        <Link className={classes.link} to='/home'>
          <img className={classes.onlyLogo} src={onlyLogo} alt='' />
        </Link>
      </div>
      <div className={classes.menu}>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/services'>
            Services
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/plans'>
            Plans
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/book'>
            Book
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/projects'>
            Projects
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/about'>
            About
          </Link>
        </span>
        <span className={classes.menuList}>
          <Link className={classes.link} to='/support'>
            Support
          </Link>
        </span>
      </div>
      <span className={classes.rightMenu}>
        <Menu />
      </span>
    </div>
  );
};

export default Nav;
