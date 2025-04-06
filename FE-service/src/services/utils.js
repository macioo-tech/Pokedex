import { LocalApi } from "./api";

export const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const findWinner = async (array, winStats, winName) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    const response = await LocalApi.get(`/stats/?name=${array[i].name}`);
    if (response.data?.length > 0) {
      if (response.data[0]?.experience > max) {
        winStats = response?.data[0];
        winName = array[i].name;
        max = response.data[0]?.experience;
      }
    } else {
      if (array[i].base > max) {
        winStats, winName = {
          name: array[i].name,
          experience: array[i].base,
        };
        max = array[i].base;
        winName = array[i].name;
      }
    }
  }
  return [winStats, winName];
};

export const findLooser = async (array, lostStats, lostName) => {
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    const response = await LocalApi.get(`/stats/?name=${array[i].name}`);
    if (response.data?.length > 0) {
      if (response.data[0]?.experience < min) {
        lostStats = response?.data[0];
        lostName = array[i].name;
        min = response.data[0]?.experience;
      }
    } else {
      if (array[i].base < min) {
        lostStats, lostName = {
          name: array[i].name,
          experience: array[i].base,
        };
        min = array[i].base;
        lostName = array[i].name;
      }
    }
  }
  return [lostStats, lostName];
};