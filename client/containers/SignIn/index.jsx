import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../redux/modules/auth';

class SignIn extends Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const creds = {
      identifier: this._identifier.value,
      password: this._password.value,
    };
    this.props.dispatch(authActions.signinUser(creds));
  }

  render() {
    return (
      <main>
        <div className="page-logo col12">
          <span>
            <i className="fa fa-sign-in"></i>
          </span>
        </div>
        <h1 className="page-title">Connexion</h1>
        <form className="col-6 col-ol-3" onSubmit={this._handleSubmit}>
          <div className="input-group">
            <label className="col-4" htmlFor="identifier">Identifiant</label>
            <input
							className="col-8"
              type="text"
              id="identifier"
              ref={(node) => { this._identifier = node; }} // eslint-disable-line react/jsx-no-bind
            />
          </div>
          <div className="input-group">
            <label className="col-4" htmlFor="password">Mot de passe</label>
            <input
							className="col-8"
              type="password"
              id="password"
              ref={(node) => { this._password = node; }} // eslint-disable-line react/jsx-no-bind
            />
          </div>
          <div className="input-group">
            <button type="submit" className="col-4 col-ol-4">Se connecter</button>
          </div>
        </form>
      </main>
    );
  }
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SignIn);
