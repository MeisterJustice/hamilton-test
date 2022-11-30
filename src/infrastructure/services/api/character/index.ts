import axios from "axios";

export type ICharacter = {
  getCharacters: () => void;
  getCharacter: () => void;
};

const character: ICharacter = {
  getCharacters: async () => {
    const response = await axios.get(`/auth/user`);
    return response?.data?.data;
  },
  getCharacter: async () => {
    const response = await axios.get(`/auth/user`);
    return response?.data?.data;
  },
};

export default character;
