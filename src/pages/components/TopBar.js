import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CurrentUserContext } from "../../context/currentUser";

export const TopBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);
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

          {currentUserState.isLoggedIn === false && (
            <>
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
            </>
          )}
          {currentUserState.isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="articles/new" className="nav-link">
                  <i className="ion-compose"></i> New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profiles/${currentUserState.currentUser.username}`}
                  className="nav-link"
                >
                  <img
                    className="user-pic"
                    src={currentUserState.currentUser.image}
                    alt="user:"
                  />{" "}
                  {currentUserState.currentUser.username}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
