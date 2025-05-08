// dispatchService.js
let appDispatch;

export const setDispatch = (dispatch) => {
  appDispatch = dispatch;
};

export const getDispatch = () => {
  if (!appDispatch) {
    throw new Error("Dispatch has not been set. Call setDispatch first.");
  }

  return appDispatch;
};
