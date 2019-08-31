
const ourThunk = ({ dispatch }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, store.getState);
  } else {
    return next(action);
  }

};

export default ourThunk;