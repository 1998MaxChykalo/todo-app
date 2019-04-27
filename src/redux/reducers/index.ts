import todoReducer from "./todo/todoReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({todos : todoReducer});

