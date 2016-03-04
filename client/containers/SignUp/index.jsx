import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../redux/modules/auth';

class SignUp extends Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const newUser = {
      username: this._username.value,
      email: this._email.value,
      password: this._password.value,
      password2: this._password2.value,
    };
    this.props.dispatch(authActions.signupUser(newUser));
  }

  render() {
    return (
      <main>
        <div className="page-logo col12">
          <span>
            <i className="fa fa-user-plus"></i>
          </span>
        </div>
        <h1 className="page-title">Créer un nouvel utilisateur</h1>
        <form className="col-6 col-ol-3" onSubmit={this._handleSubmit}>
          <div className="input-group">
            <label className="col-4" htmlFor="username">Nom d'utilisateur</label>
            <input
              className="col-8"
              type="text"
              id="username"
              ref={(node) => { this._username = node; }} // eslint-disable-line react/jsx-no-bind
            />
          </div>
          <div className="input-group">
            <label className="col-4" htmlFor="email">Email</label>
            <input
              className="col-8"
              type="email"
              id="email"
              ref={(node) => { this._email = node; }} // eslint-disable-line react/jsx-no-bind
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
            <label className="col-4" htmlFor="password2">Confirmation</label>
            <input
              className="col-8"
              type="password"
              id="password2"
              ref={(node) => { this._password2 = node; }} // eslint-disable-line react/jsx-no-bind
            />
          </div>
          <div className="input-group">
            <button type="submit" className="col-4 col-ol-4">S'inscrire</button>
          </div>
        </form>
      </main>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SignUp);
