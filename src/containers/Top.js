import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/top.module.css';

const Top = () => (
  <>
    <header className={Style.systemNavbar}>
      <div className={Style.containerOptions}>
        <ul className={Style.signOptions}>
          <li className={Style.navItem}>
            <Link to="/" className={Style.navLink}>Sign up</Link>
          </li>
          <li className={Style.navItem}>
            <Link to="/" className={Style.navLink}>Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
    <nav className={Style.servicesNavbar}>
      <div className={Style.containerOptions}>
        <ul className={Style.navOptions}>
          <li className={Style.navItem}>
            <Link to="/" className={Style.navLink}>About Us</Link>
          </li>
          <li className={Style.navItem}>
            <Link to="/" className={Style.navLink}>All Pet Care</Link>
          </li>
          <li className={Style.navItem}>
            <Link to="/" className={Style.navLink}>Helping Pets</Link>
          </li>
          <li className={Style.navItem}>
            <Link to="/" className={Style.navLink}>Donate</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Top;
