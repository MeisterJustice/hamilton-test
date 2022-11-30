import { ICallbackProps } from "../types";

export const GET_CHARACTERS_SUCCESS = "[character] get characters success";
export const GET_CHARACTERS_FAILURE = "[character] get characters failure";
export const GET_CHARACTERS = "[character] get characters";
export const GET_CHARACTER = "[character] get character";
export const GET_CHARACTER_SUCCESS = "[character] get character success";
export const GET_CHARACTER_FAILURE = "[character] get character failure";

export const getCharacterSuccess = (response: any) => ({
  type: GET_CHARACTER_SUCCESS,
  payload: response,
});

export const getCharacterFailure = (error: any) => ({
  type: GET_CHARACTER_FAILURE,
  payload: error,
});

export const getCharactersSuccess = (response: any) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: response,
});

export const getCharactersFailure = (error: any) => ({
  type: GET_CHARACTERS_FAILURE,
  payload: error,
});

export const getCharacter = (id: string, callback?: ICallbackProps) => ({
  type: GET_CHARACTER,
  callback,
  id,
});

export const getCharacters = (query?: string, callback?: ICallbackProps) => ({
  type: GET_CHARACTERS,
  callback,
  payload: query,
});
