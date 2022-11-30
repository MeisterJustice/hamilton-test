import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE,
  GET_CHARACTER_FAILURE,
  GET_CHARACTER_SUCCESS,
} from "../../actions/character";
import { IAction } from "../../types";
import { ICharacters } from "./type";

const initialState: ICharacters = {
  character: {},
  characters: [],
  error: "",
};

const character = (
  state: ICharacters = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: payload?.data,
        error: "",
      };
    case GET_CHARACTERS_FAILURE:
      return {
        ...state,
        error: payload?.data,
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        character: payload?.data,
        error: "",
      };
    case GET_CHARACTER_FAILURE:
      return {
        ...state,
        character: {},
        error: payload?.data,
      };

    default:
      return state;
  }
};

export default character;