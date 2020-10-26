import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/bottom.module.css';

const Bottom = () => (
  <>
    <footer className={Style.footer}>
      <nav className={Style.footerNavbar}>
        <div className={Style.containerLists}>
          <ul className={Style.containerOptions}>
            <li className={Style.navItem}>CONTACT US:</li>
            <li className={Style.navItem}>
              Phone:
              <span className={Style.spanOrange}> +1 152 147852369</span>
            </li>
            <li className={Style.navItem}>
              WhatsApp:
              <span className={Style.spanOrange}> +1 152 147852369</span>
            </li>
            <li className={Style.navItem}>
              Email:
              <span className={Style.spanOrange}> hello@adoptmebro.com</span>
            </li>
            <li className={Style.navItem}>
              Address:
              <span className={Style.spanOrange}> Spooner Avenue 2112, San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </nav>
      <div className={Style.tradeMark}>Adopt Me Bro! Project. All right reserved</div>
    </footer>
  </>
);

export default Bottom;
