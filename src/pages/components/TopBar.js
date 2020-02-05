import React from "react";
import { NavLink } from "react-router-dom";

export const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Medium
        </NavLink>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/login" className="nav-link" exact>
              SignIn
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/register" className="nav-link" exact>
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
