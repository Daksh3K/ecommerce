import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./navigation.css";

export default function Navigation() {
  const { user, userSignOut } = useContext(AuthContext);

  const handleUserSignOut = () => {
    userSignOut()
  }

  return (
    <div className="navigation-container">
      <div className="navigation-title">
        <NavLink classname="navlink" to="/dashboard">Amazona</NavLink>
      </div>

      <div className="navigation-button-container">
        <button className="navigation-button button">
          <NavLink className="navlink" to="/signin">
            Sign In
          </NavLink>
        </button>
      </div>

      {user ? (
        <div>
          <button className="button" onClick={handleUserSignOut}>Sign Out</button>
        </div>
      ) : null}
    </div>
  );
}
