import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/actions";
import Loader from "./Loader";

class Home extends Component {
  //
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="main-container">
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <div className="users-list-container">
            <ul className="list-container">
              {this.props.users.length > 0 &&
                this.props.users.map(user => {
                  return (
                    <li key={user._id} className="user-list-item">
                      {user.name}
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

export default connect(mapStateToProps, { getUsers })(Home);
