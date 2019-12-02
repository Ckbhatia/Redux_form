import {
  FETCHING_STARTED,
  SET_ERROR,
  GET_USERS,
  GET_USER,
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER
} from "./types";
import axios from "axios";

export const getUsers = () => {
  return async dispatch => {
    try {
      dispatch({ type: FETCHING_STARTED });
      const res = await axios.get("http://localhost:3000/api/v1/users");
      dispatch({ type: GET_USERS, value: res.data.users });
    } catch (err) {
      dispatch({ type: SET_ERROR });
      console.error(err);
    }
  };
};

export const registerUser = value => {
  return async dispatch => {
    try {
      dispatch({ type: FETCHING_STARTED });
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        value
      );
      dispatch({ type: REGISTER_USER, value: res.data.user });
    } catch (err) {
      dispatch({ type: SET_ERROR });
      console.error(err);
    }
  };
};

export const getUser = username => {
  return async dispatch => {
    try {
      dispatch({ type: FETCHING_STARTED });
      const res = await axios.get(
        `http://localhost:3000/api/v1/users/${username}`
      );
      dispatch({ type: GET_USER, value: res.data.user[0] });
    } catch (err) {
      dispatch({ type: SET_ERROR });
      console.error(err);
    }
  };
};

export const updateUser = (username, value) => {
  return async dispatch => {
    try {
      dispatch({ type: FETCHING_STARTED });
      const res = await axios.put(
        `http://localhost:3000/api/v1/users/${username}`,
        value
      );
      dispatch({ type: UPDATE_USER, value: res.data.user });
    } catch (err) {
      dispatch({ type: SET_ERROR });
      console.error(err);
    }
  };
};

export const deleteUser = username => {
  return async dispatch => {
    try {
      dispatch({ type: FETCHING_STARTED });
      const res = await axios.delete(
        `http://localhost:3000/api/v1/users/${username}`
      );
      dispatch({ type: DELETE_USER, value: username });
    } catch (err) {
      dispatch({ type: SET_ERROR });
      console.error(err);
    }
  };
};
