import axios from "axios";

export const PokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const LocalApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getItems = async (api, path) => {
  try {
    const response = await api.get(`/${path}`);
    if (response?.data?.isArray()) return response.data[0];
    return response?.data?.results
  } catch (error) {
    return error
  }
};

export const deleteItem = async (api, path, id) => {
  try {
    await api.delete(`/${path}/${id}`);
  } catch (error) {
    return error;
  }
};

export const putItem = async (api, path, id, data) => {
  try {
    await api.put(`/${path}/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return error;
  }
};

export const postItem = async (api, path, data) => {
  try {
    await api.post(`/${path}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return error;
  }
};