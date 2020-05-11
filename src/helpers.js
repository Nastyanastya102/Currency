const updateState = (oldObject, newValues) => ({ ...oldObject, ...newValues });

const getSumByValue = (state, arg) => {
  const result = {};
  arg.currency === 'EUR'
  ? result.sum = +(arg.value1 * arg.value2 * arg.value3).toFixed(2)
  : result.sum = Number(((100 * arg.value3) / (100 * arg.value2)) * arg.value1).toFixed(2);
  
  return updateState(state, result);
};

const makeObj = (data) => {
  const result = [];
  for (const key in data) {
   result.push({ key: key, value: data[key], star: false });
  }
  result.push({ key: 'EUR', value: 1, star: false });
 
  return result;
};

const favorite = (item, index, state) => {
  const newData = [...state.dataFromAPI];
  newData.splice(index, 1);
  if (item.star) {
    newData.push({ ...item, star: false });
  } else {
    newData.unshift({ ...item, star: true });
  }

  return updateState(state, { dataFromAPI: newData });
};

const gettingData = (state, action) => {
  const newData = {
    dataFromAPI: makeObj(action.data.rates),
    date: action.data.date,
    formGridFrome: action.data.base,
    pending: false,
    formGridTo: Object.keys(action.data.rates)[0]
  };

  return updateState(state, newData);
};

export {
  getSumByValue,
  updateState,
  makeObj,
  favorite,
  gettingData
};