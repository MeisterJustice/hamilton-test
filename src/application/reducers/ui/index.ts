import { IAction } from "../../types";
import * as uiActions from "../../actions/ui";

import { IUILoading } from "./type";

const initialState = {
  loading: true,
};

const reducer = (state: IUILoading = initialState, action: IAction) => {
  switch (action.type) {
    case uiActions.SET_LOADING_ON:
    case uiActions.SET_LOADING_OFF:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default reducer;
