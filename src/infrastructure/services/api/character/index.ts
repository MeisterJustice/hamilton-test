import axios from "axios";

export type ICharacter = {
  getCharacters: (query: string) => void;
  getCharacter: (character_id: string) => void;
};

const character: ICharacter = {
  getCharacters: async (query: string) => {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.REACT_APP_MARVEL_KEY}${query}`
    );
    return response?.data?.data;
  },
  getCharacter: async (character_id: string) => {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${character_id}?apikey=${process.env.REACT_APP_MARVEL_KEY}`
    );
    return response?.data?.data;
  },
};

export default character;
