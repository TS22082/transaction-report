getArguments = arr => {
  let newArray = [];

  for (let i = 2; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

module.exports = getArguments;
