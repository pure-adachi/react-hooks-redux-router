import { combineReducers } from "redux";
import cat, { InitialStateType as CatState } from "./Cat";
import common, { InitialStateType as CommonState } from "./Common";

export interface RootStateType {
  cat: CatState;
  common: CommonState;
}

const rootReducer = combineReducers({
  cat,
  common
});

export default rootReducer;
