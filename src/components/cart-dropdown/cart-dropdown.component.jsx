import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";
const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  let navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-hide" onClick={toggleCartHidden}>
        X
      </div>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      {cartItems.length < 1 ? (
        <CustomButton inverted disabled>
          {" "}
          Your cart is empty
        </CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            navigate("/checkout");
            toggleCartHidden();
          }}
        >
          GO TO CHECKOUT{" "}
        </CustomButton>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
