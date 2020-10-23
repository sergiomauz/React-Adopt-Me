import React from 'react';
import Style from '../styles/bottom.module.css';

const Bottom = () => (
  <>
    <footer className={Style.footer}>
      <nav className={Style.footerNavbar}>
        <div className={Style.containerOptions}>
          Options
        </div>
      </nav>
      <div className={Style.tradeMark}>Holi</div>
    </footer>

  </>
);

export default Bottom;
