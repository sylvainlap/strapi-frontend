import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../redux/modules/auth';

class SignIn extends Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const creds = {
      identifier: this._identifier,
      password: this._password,
    };
    this.props.dispatch(authActions.signinUser(creds));
  }

  render() {
    return (
      <form className="form-horizontal">
        <h2>Please sign in</h2>
        <div className="form-group">
          <label htmlFor="inputIdentifier" className="col-sm-2 control-label">Identifier</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputIdentifier"
              placeholder="Username or Email"
              ref={function (node) { this._identifier = node.value; }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              ref={function (node) { this._password = node.value; }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default" onClick={this._handleClick}>Sign in</button>
          </div>
        </div>
      </form>
    );
  }
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SignIn);
