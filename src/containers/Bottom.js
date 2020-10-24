import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/bottom.module.css';

const Bottom = () => (
  <>
    <footer className={Style.footer}>
      <nav className={Style.footerNavbar}>
        <div className={Style.containerLists}>
          <ul className={Style.containerOptions}>
            <li className={Style.navItem}>CATEGORIES</li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Dogs</Link>
            </li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Cats</Link>
            </li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Rabbits</Link>
            </li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Birds</Link>
            </li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Other types</Link>
            </li>
          </ul>
          <ul className={Style.containerOptions}>
            <li className={Style.navItem}>INFORMATION</li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>About us</Link>
            </li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Donate</Link>
            </li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Collaborators</Link>
            </li>
            <li className={Style.navItem}>
              <Link to="/" className={Style.navLink}>Refuges</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={Style.tradeMark}>Adopt Me Bro! Project. All right reserved</div>
    </footer>
  </>
);

export default Bottom;
