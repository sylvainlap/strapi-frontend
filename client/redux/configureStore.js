import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';

import rootReducer from './rootReducer';

const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      apiMiddleware,
      routerMiddleware(browserHistory),
      logger
    )
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
