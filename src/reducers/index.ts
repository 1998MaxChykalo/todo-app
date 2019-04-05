import todoReducer, { TodoState } from "./todoReducer";
import { combineReducers, Reducer } from "redux";

// TODO: "as any" is used to remove errors caused by redux.
export const rootReducer = combineReducers({todos : todoReducer} as any);

