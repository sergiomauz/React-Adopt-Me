import React from 'react';
import Style from '../styles/bottom.module.css';

const Bottom = () => (
  <>
    <footer className={Style.systemNavbar}>
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
        </div>
      </nav>
      <div>Holi</div>
    </footer>

  </>
);

export default Bottom;
