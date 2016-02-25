import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import auth from './modules/auth';
import messages from './modules/messages';

export default combineReducers({
  auth,
  messages,
  routing,
});
