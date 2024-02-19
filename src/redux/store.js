import { combineReducers, legacy_createStore } from "redux";
import todoReducer from "./reducers/todo-reducer";

const rootReducer = combineReducers({ todos: todoReducer });

const store = legacy_createStore(rootReducer);

export default store;
