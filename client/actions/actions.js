import {
  FETCHING_STARTED,
  SET_ERROR,
  GET_USERS,
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
