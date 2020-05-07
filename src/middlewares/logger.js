export default (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action is:", action);
  let retVal = next(action);
  console.groupEnd("Next state is:", store.getState());
  return retVal;
};
