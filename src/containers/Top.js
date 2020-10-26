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
            &quot;Adopt me bro!&quot; is a project of
            <span className={Style.spanOrange}> PET FINDER</span>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Top;
