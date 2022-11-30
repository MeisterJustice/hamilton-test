import { ICharacters } from "../reducers/character/type";

export const getCharacters = (state: { character: ICharacters }) =>
  state.character;
