import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import { actions as authActions } from '../../redux/modules/auth';
import { actions as messagesActions } from '../../redux/modules/messages';

class App extends Component {
  render() {
    const { dispatch, children, isAuthenticated, errorMessage } = this.props;

    return (
      <div>
        <Header dispatch={dispatch} isAuthenticated={isAuthenticated} />
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {children}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage,
  };
}

export default connect(mapStateToProps)(App);
