import { IUILoading } from "../reducers/ui/type";

export const getLoading = (state: { ui: IUILoading }) => state.ui.loading;
