import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/top.module.css';

const Top = () => (
  <>
    <header className={Style.systemNavbar}>
      <div className={Style.containerOptions}>
        <ul className={Style.signOptions}>
          <li className={Style.navItem}>
            <div className={Style.logo} />
          </li>
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
          <li>
            <div />
          </li>
          <li className={Style.navItemBlack}>
            <Link to="/" className={Style.navLinkBlack}>All Pet Care</Link>
          </li>
          <li className={Style.navItemBlack}>
            <Link to="/" className={Style.navLinkBlack}>Helping Pets</Link>
          </li>
          <li className={Style.navItemBlack}>
            <Link to="/" className={Style.navLinkBlack}>Donate</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Top;
