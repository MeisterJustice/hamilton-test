export const SET_LOADING_ON = "[ui] set loading on";
export const SET_LOADING_OFF = "[ui] set loading off";

export const setLoading = (isLoading: boolean) => ({
  type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
  payload: isLoading,
});
