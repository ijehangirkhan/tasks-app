import {combineReducers} from "redux";
import tasks from "./tasks";

const mainReducer = combineReducers({
  tasks,
});

export default mainReducer;
