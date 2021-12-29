import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: null, password: null });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in with you email and password </span>

        <form>
          <FormInput
            name="email"
            type="email"
            value={this.state.email ? this.state.email : ""}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password ? this.state.password : ""}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
