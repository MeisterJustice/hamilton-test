import character, { ICharacter } from "./character";

export type IAPI = {
  character: ICharacter;
};

const apis: IAPI = {
  character,
};

export default apis;
