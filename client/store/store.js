import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reducer from "./reducers/reducers";
import reducer from "../reducers/reducers";

const rootReducers = combineReducers({ reducer });

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
