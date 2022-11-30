import { ICharacters } from "../reducers/character/type";

export const getCharacters = (state: { characters: ICharacters }) =>
  state.characters;
