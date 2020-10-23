import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/top.module.css';

const Top = () => (
  <>
    <header className={Style.systemNavbar}>
      Holi
    </header>
    <nav className={Style.servicesNavbar}>
      <div className={Style.containerOptions}>
        <ul className={Style.navOptions}>
          <li>
            <Link to="/" className={Style.navLink}>About Pet Adoption</Link>
          </li>
          <li>
            <Link to="/" className={Style.navLink}>Dog Care</Link>
          </li>
          <li>
            <Link to="/" className={Style.navLink}>Cat Care</Link>
          </li>
          <li>
            <Link to="/" className={Style.navLink}>All Pet Care</Link>
          </li>
          <li>
            <Link to="/" className={Style.navLink}>Shelters and Rescues</Link>
          </li>
          <li>
            <Link to="/" className={Style.navLink}>Helping Pets</Link>
          </li>
          <li>
            <Link to="/" className={Style.navLink}>Videos</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Top;
