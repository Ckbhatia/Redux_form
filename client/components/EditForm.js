import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getUsers, updateUser } from "../actions/actions";
import Loader from "./Loader";

class EditForm extends Component {
  state = {
    name: "",
    email: "",
    username: ""
  };

  async componentDidMount() {
    const updateState = await this.setState({
      username: this.props.match.params.username
    });

    const getUsers_action = await this.props.getUsers();
    // Invoke the action creator to fetch current user and update the redux state
    const action = await this.props.getUser(this.state.username);

    // const { name, email } = this.props.current_user;

    // Filter the user with username
    const user = await this.props.users.filter(
      user => user.name === this.state.username
    );
    // Update the local state by props
    this.setState({
      name: user[0].name,
      email: user[0].email
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, email } = this.props.current_user;
    // Checks if user name or email is updated or not
    if (name !== this.state.name || email !== this.state.email) {
      if (this.state.name.length > 1 && this.state.email) {
        const updateUserAction = await this.props.updateUser(
          this.state.username,
          {
            name: this.state.name,
            email: this.state.email
          }
        );
        // Redirect the user to the users/main route
        this.props.history.push("/users");
      }
    }
  };

  render() {
    return (
      <div className="login-container">
        {this.props.isFetching ? (
          <Loader />
        ) : !this.state.name ? (
          <div className="text-container">
            <span className="not-found-text">
              User not found with this username
            </span>
          </div>
        ) : (
          <div className="login-content">
            <div className="login-header">
              <h1 className="login-title">Edit</h1>
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
              <button>Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { users, current_user, isFetching } = state.reducer;
  return {
    users,
    current_user,
    isFetching
  };
};

const editForm = withRouter(EditForm);

export default connect(mapStateToProps, { getUser, getUsers, updateUser })(
  editForm
);
