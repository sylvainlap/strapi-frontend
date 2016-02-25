import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../redux/modules/auth';
import { actions as messagesActions } from '../../redux/modules/messages';

class SignIn extends Component {
  render() {
    const { dispatch } = this.props;

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
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
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
