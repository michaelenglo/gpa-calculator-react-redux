import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

const configureStore = () => {
  const store = createStoreWithMiddleware(reducer);

  // Enable Webpack hot module replacement for reducers
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
};

export default configureStore;
