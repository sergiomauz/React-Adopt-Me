import React from 'react';
import Style from '../styles/top.module.css';

const Top = () => (
  <>
    <header className={Style.systemNavbar}>
      Holi
    </header>
    <nav className={Style.servicesNavbar}>
      <div className={Style.containerOptions}>
        <ul className={Style.navOptions}>
          <li>About Pet Adoption</li>
          <li>Dog Care</li>
          <li>Cat Care</li>
          <li>All Pet Care</li>
          <li>Shelters and Rescues</li>
          <li>Helping Pets</li>
          <li>Videos</li>
        </ul>
        <div className={Style.headLine}>
          xcd
        </div>
      </div>
    </nav>
  </>
);

export default Top;
