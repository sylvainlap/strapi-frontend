import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import { actions as errorActions } from '../../redux/modules/errorMessage';

class App extends Component {
  constructor() {
    super();
    this._handleDismissClick = this._handleDismissClick.bind(this);
  }

  _handleDismissClick(evt) {
    evt.preventDefault();
    this.props.dispatch(errorActions.resetErrorMessage());
  }

  render() {
    const { dispatch, children, isAuthenticated, errorMessage } = this.props;

    return (
      <div>
        <Header dispatch={dispatch} isAuthenticated={isAuthenticated} />
        {errorMessage && <div className="logger">
          <div className="log error col-12">
            <div className="log-icon">
              <i className="fa"></i>
            </div>
            <div className="log-msg col-10 col-ol-2">
              <p>
                {errorMessage}
                {' '}(<a href="#" onClick={this._handleDismissClick}>X</a>)
              </p>
            </div>
          </div>
        </div>}
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
  const { auth, errorMessage } = state;
  const { isAuthenticated } = auth;

  return {
    isAuthenticated,
    errorMessage,
  };
}

export default connect(mapStateToProps)(App);
