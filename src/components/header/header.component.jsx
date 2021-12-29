import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
function Header({ currentUser }) {
  let navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo-container" onClick={() => navigate("/")}>
        <Logo className="logo" />
      </div>

      <div className="options">
        <div className="option" onClick={() => navigate("/shop")}>
          SHOP
        </div>
        <div className="option" onClick={() => navigate("/shop")}>
          CONTACT
        </div>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <div className="option" onClick={() => navigate("/signin")}>
            SIGN IN
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
