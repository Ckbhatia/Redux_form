import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";

class RegisterForm extends Component {
  state = {
    name: "",
    email: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Invoke actionCreator and pass whole state as params
    this.props.registerUser(this.state);
    // Redirect user to the users component
    this.props.history.push("/users");
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <h1 className="login-title">Register</h1>
          </div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { registerUser })(RegisterForm);
