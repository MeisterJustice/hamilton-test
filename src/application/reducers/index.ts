import { combineReducers } from "redux";
import ui from "./ui";
import character from "./character";

export default combineReducers({
  ui,
  character,
});
