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
              <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeNav}>Clustering</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cluster-detail" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeNav}>Cluster Detail</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/knowledge-graph" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeNav}>Knowledge graph</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/uploads" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeNav}>Uploads</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} onClick={closeNav}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
