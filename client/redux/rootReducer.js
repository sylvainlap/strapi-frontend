import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import auth from './modules/auth';
import errorMessage from './modules/errorMessage';
import messages from './modules/messages';

export default combineReducers({
  auth,
  errorMessage,
  messages,
  routing,
});
