interface IThumbnail {
  path?: string;
  extension?: string;
}

interface IItems {
  name?: string;
}

interface IItem {
  items: IItems[];
}

export interface ICharacter {
  id?: string;
  name?: string;
  description?: string;
  thumbnail?: IThumbnail;
  resourceURI?: string;
  stories?: IItem;
  events?: IItem;
  series?: IItem;
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
