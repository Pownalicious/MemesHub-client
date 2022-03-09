import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import post from "./posts/reducer";

export default combineReducers({
  appState,
  user,
  post,
});
