import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = () => {
  const middleware = [thunk];
  const composerEnhancer = composeWithDevTools(applyMiddleware(...middleware));

  const store = createStore(rootReducer, composerEnhancer);

  return store;
};

const store = configureStore();

export default store;
