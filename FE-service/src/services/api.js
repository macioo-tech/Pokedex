import axios from "axios";

export const PokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const LocalApi = axios.create({
  baseURL: "http://localhost:3000",
});
