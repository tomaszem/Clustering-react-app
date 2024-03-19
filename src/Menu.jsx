import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Menu = () => {
  // State for is nav expanded
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Toggle state
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  // Closed menu
  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ width: '100%' }}>
      <div className="container-fluid" style={{ maxWidth: '960px', margin: '0 auto' }}>
        <NavLink className="navbar-brand" to="/">Clustering Application</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/" onClick={closeNav}>Clustering</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/knowledge-graph" onClick={closeNav}>Knowledge graph</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/uploads" onClick={closeNav}>Uploads</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/settings" onClick={closeNav}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
