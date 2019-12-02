import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, deleteUser } from "../actions/actions";
import Loader from "./Loader";

class Home extends Component {
  //
  componentWillMount() {
    this.props.getUsers();
  }

  handleClick = e => {
    if (e.target.className === "delete-btn") {
      this.props.deleteUser(e.target.dataset.key);
    }
  };

  render() {
    return (
      <div className="main-container">
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <div className="users-list-container">
            <ul onClick={this.handleClick} className="list-container">
              {this.props.users.length > 0 &&
                this.props.users.map(user => {
                  return (
                    <li key={user._id} className="user-list-item">
                      <div className="item-container">
                        <span className="user-name">{user.name}</span>
                        <span className="user-email">{user.email}</span>
                        <button className="delete-btn" data-key={user.name}>
                          delete
                        </button>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Destructor the values
  const { users, isFetching } = state.reducer;
  return {
    users,
    isFetching
  };
};

export default connect(mapStateToProps, { getUsers, deleteUser })(Home);
