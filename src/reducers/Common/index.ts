import * as actions from "../../actions/Common";

type Actions = actions.SetDateAction;

export interface InitialStateType {
  date: Date;
}

const initialState: InitialStateType = {
  date: new Date()
};

export default function main(state = initialState, action: Actions) {
  switch (action.type) {
    case "COMMON/SET_DATE":
      return { ...state, date: new Date() };
    default:
      return state;
  }
}
