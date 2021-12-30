import React from "react";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

function Header({ currentUser, hidden }) {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
