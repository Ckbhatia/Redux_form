import {
  GET_USERS,
  UPDATE_USER,
  REGISTER_USER,
  DELETE_USER,
  FETCHING_STARTED,
  SET_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  isFetching: false,
  isError: false
};

const reducer = (state = INITIAL_STATE, action) => {
  // TODO: Remove this console log
  console.log(action);
  switch (action.type) {
    case FETCHING_STARTED: {
      return {
        ...state,
        isFetching: true
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    }
    case GET_USERS: {
      return {
        // TODO: Add values to update the state
      };
    }
    case REGISTER_USER: {
      // TODO: Add values to update the state
    }
    case UPDATE_USER: {
      return {
        // TODO: Add values to update the state
      };
    }
    case DELETE_USER:
      return {
        // TODO: Add values to update the state
      };
    default:
      return state;
  }
};

export default reducer;
