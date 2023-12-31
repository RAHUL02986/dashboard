import React from "react";
import { UserContext } from "./context/UserContext";

class Auth extends React.Component {
  state = {
    email: "",
    password: ""
  };

  static contextType = UserContext;

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="auth">
        <form
          onSubmit={(e) => {
            let { email, password } = this.state;
            e.preventDefault();
            this.context.loginHandler(email, password);
            this.context.handleModal(false);
          }}
        >
          <h3 className="center">Admin Login</h3>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter the password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button className="auth-btn">Login</button>
          <div className="auth-cancel" onClick={() => this.context.handleModal(false)}>
            <i className="fal fa-times"></i>
          </div>
          <p className="password-hint">
            Please use admin@admin.com as email and qwerty as password to login.
          </p>
        </form>
      </div>
    );
  }
}

export default Auth;