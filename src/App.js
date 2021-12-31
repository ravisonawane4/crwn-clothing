import React from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import HomePage from "./pages/homepage/homepage.component";
import CheckoutPage from "./pages/check-out/check-out.component";

import Header from "./components/header/header.component";

import { setCurrentUser } from "./redux/user/user.action";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            exact
            path="/signin"
            element={<SignInSignUpPage />}
            render={() =>
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
