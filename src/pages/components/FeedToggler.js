import React from "react";
import { NavLink } from "react-router-dom";

const FeedToggler = ({ tagName }) => {
  return (
    <div className="fee-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink to="/feed" className="nav-link">
            Your Feed
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Global Feed
          </NavLink>
        </li>

        {tagName && (
          <li className="nav-item">
            <NavLink to={`/tags/${tagName}`} className="nav-link">
              <i className="ion-pound">{tagName}</i>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggler;