import { postItem, putItem } from "./api";

export const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const findWinner = async (api, array, winStats) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    const response = await api.get(`/stats/?name=${array[i].name}`);
    if (response.data?.length > 0) {
      if (response.data[0]?.experience * array[i].weight > max) {
        winStats = response?.data[0];
        max = response.data[0]?.experience * array[i].weight;
      }
    } else {
      if (array[i].base * array[i].weight > max) {
        winStats = {
          name: array[i].name,
          experience: array[i].base,
          strength: array[i].base * array[i].weight, 
          win: 0,
          lost: 0,
        };
        max = array[i].base * array[i].weight;
      }
    }
  }
  return winStats;
};

export const findLooser = async (api, array, lostStats) => {
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    const response = await api.get(`/stats/?name=${array[i].name}`);
    if (response.data?.length > 0) {
      if (response.data[0]?.experience * array[i].weight < min) {
        lostStats = response?.data[0];
        min = response.data[0]?.experience;
      }
    } else {
      if (array[i].base * array[i].weight < min) {
        lostStats = {
          name: array[i].name,
          experience: array[i].base,
          strength: array[i].base * array[i].weight, 
          win: 0,
          lost: 0,
        };
        min = array[i].base * array[i].weight;
      }
    }
  }
  return lostStats;
};

export const updateStats = async (api, stats) => {
  try {
    if (stats.id > 0) {
      await putItem(api, 'stats', stats.id, stats)
    } else {
      await postItem(api, 'stats', stats)
    }
  } catch (error) {
    return error;
  }
};

export const updateList = (remoteData, localData) => {
  const updatedList = remoteData.map((remoteItem) => {
    const edit = localData.find(localItem => localItem.name === remoteItem.name);
    if (edit) {
      // eslint-disable-next-line no-unused-vars
      const { id, ...restEdit } = edit;
      return {...remoteItem, ...restEdit};
    }
    return remoteItem;
  })
  return [...updatedList]
}

