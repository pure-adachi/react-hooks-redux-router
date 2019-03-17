import { Action } from "redux";

export interface SetDateAction extends Action {
  type: "COMMON/SET_DATE";
}

export const setDate = (): SetDateAction => {
  return {
    type: "COMMON/SET_DATE"
  };
};
