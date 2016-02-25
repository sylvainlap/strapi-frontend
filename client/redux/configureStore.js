import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { logger } from './middlewares';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunk)
  );

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store;
}
