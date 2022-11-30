export interface ICharacter {
  id?: string;
}
export interface ICharacters {
  characters?: ICharacter[];
  character?: ICharacter;
  error?: string;
}
