import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/feed">feed</Link></li>
      <li><Link to="/articles/new">New Article</Link></li>
    </ul>
  </nav>
);

export default Nav;
