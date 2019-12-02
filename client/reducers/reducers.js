import {
  GET_USERS,
  GET_USER,
  UPDATE_USER,
  REGISTER_USER,
  DELETE_USER,
  FETCHING_STARTED,
  SET_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  current_user: null,
  isFetching: false,
  isError: false
};

const reducer = (state = INITIAL_STATE, action) => {
  // TODO: Remove this console log
  // console.log(action);
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
        ...state,
        users: action.value,
        isFetching: false
      };
    }
    case GET_USER: {
      return {
        ...state,
        current_user: action.value,
        isFetching: false
      };
    }
    case REGISTER_USER: {
      return {
        ...state,
        users: state.users.concat(action.value),
        isFetching: false
      };
    }
    case UPDATE_USER: {
      return {
        // TODO: Add functionality
      };
    }
    case DELETE_USER:
      return {
        // TODO: Add functionality
      };
    default:
      return state;
  }
};

export default reducer;
