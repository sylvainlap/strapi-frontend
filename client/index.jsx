import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import configureStore from './redux/configureStore';

import App from './containers/App';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import CreateMessage from './containers/CreateMessage';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/createMessage" component={CreateMessage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
