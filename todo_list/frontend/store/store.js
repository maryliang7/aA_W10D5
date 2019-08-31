import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import ourThunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(ourThunk));
};

export default configureStore;

