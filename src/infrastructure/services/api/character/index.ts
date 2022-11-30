import axios from "axios";

export type ICharacter = {
  getCharacters: (query: string) => void;
  getCharacter: () => void;
};

const character: ICharacter = {
  getCharacters: async (query: string) => {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${process.env.REACT_APP_MARVEL_KEY}${query}`
    );
    return response?.data?.data;
  },
  getCharacter: async () => {
    const response = await axios.get(`/auth/user`);
    return response?.data?.data;
  },
};

export default character;
