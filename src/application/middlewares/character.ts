import { IAPI } from "../../infrastructure/services/api";
import {
  GET_CHARACTER,
  GET_CHARACTERS,
  getCharacterFailure,
  getCharacterSuccess,
  getCharactersFailure,
  getCharactersSuccess,
} from "../actions/character";
import * as uiActions from "../actions/ui";
import { IAction } from "../types";

export type API = {
  api: IAPI;
};
const character =
  ({ api }: API) =>
  ({ dispatch }: any) =>
  (next: (arg0: IAction) => void) =>
  async (action: IAction) => {
    next(action);

    const actions: { [x: string]: () => void } = {
      [GET_CHARACTER]: async () => {
        try {
          dispatch(uiActions.setLoading(true));
          const character: any = await api.character.getCharacter();

          action?.callback?.onSuccess?.(character?.data);

          dispatch(getCharacterSuccess(character));
        } catch (error: any) {
          const data = error?.response?.data;

          action?.callback?.onError?.(data);
          dispatch(getCharacterFailure(data));
        } finally {
          dispatch(uiActions.setLoading(false));
        }
      },

      [GET_CHARACTERS]: async () => {
        try {
          dispatch(uiActions.setLoading(true));
          const characters: any = await api.character.getCharacters();

          action?.callback?.onSuccess?.(characters?.data);

          dispatch(getCharactersSuccess(characters));
        } catch (error: any) {
          const data = error?.response?.data;

          action?.callback?.onError?.(data);
          dispatch(getCharactersFailure(data));
        } finally {
          dispatch(uiActions.setLoading(false));
        }
      },
    };

    if (action?.type && typeof actions[action.type] === "function")
      actions[action.type]();
  };

export const exports = [character];

export default exports;
