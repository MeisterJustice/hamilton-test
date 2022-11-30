interface IThumbnail {
  path?: string;
}

export interface ICharacter {
  id?: string;
  name?: string;
  thumbnail?: IThumbnail;
  resourceURI?: string;
}
export interface ICharacters {
  results?: ICharacter[];
  character?: ICharacter;
  count?: number;
  limit?: number;
  offset?: number;
  total?: number;
  error?: string;
}
