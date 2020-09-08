import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/premier-league-logo.png';
import './styles.css';
import { HEADER_TITLE, TABLE, WEEKS } from '../../constants';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h2>{HEADER_TITLE}</h2>
      <ul className="list">
        <li>
          <Link to="/table">{TABLE}</Link>
        </li>
        <li>
          <Link to="/weeks/1">{WEEKS}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
