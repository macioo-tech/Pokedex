import { getItems, postItem, putItem } from "./api";

export const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const battle = (array) => {
  if (!array || array.length === 0) return { win: null, lost: null };
  let win,
    lost = {};
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    let val = array[i].experience * array[i].weight;
    if (val > max) {
      win = array[i];
      max = val;
    }
    if (val < min) {
      lost = array[i];
      min = val;
    }
  }
  console.log(win);
  console.log(lost);
  return { win, lost };
};

export const updateWin = async (api, pokemon) => {
  const { name, win, experience } = pokemon;
  const stats = {
    name: name,
    win: win ? win + 1 : 1,
    experience: experience ? experience + 10 : 10,
  };
  console.log(stats);
  

  try {
    const data = await getItems(api, `edits/${name}`);
    if (data.length > 0) {
      await putItem(api, `edits`, data[0].id, stats);
    } else {
      await postItem(api, `edits`, stats);
    }
  } catch (error) {
    return error;
  }
};

export const updateLost = async (api, pokemon) => {
  const { name, lost } = pokemon;
  const stats = {
    name: name,
    lost: lost ? lost + 1 : 1,
  };

  try {
    const data = await getItems(api, `edits/${name}`);
    if (data.length > 0) {
      await putItem(api, `edits`, data[0].id, stats);
    } else {
      await postItem(api, `edits`, stats);
    }
  } catch (error) {
    return error;
  }
};

export const updateList = (remoteData, localData) => {
  const updatedList = remoteData.map((remoteItem) => {
    const edit = localData.find(
      (localItem) => localItem.name === remoteItem.name
    );
    if (edit) {
      // eslint-disable-next-line no-unused-vars
      const { id, ...restEdit } = edit;
      return { ...remoteItem, ...restEdit };
    }
    return remoteItem;
  });
  return [...updatedList];
};
