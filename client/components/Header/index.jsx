import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { actions as authActions } from '../../redux/modules/auth';

class Header extends Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.dispatch(authActions.signoutUser());
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">strapi frontend</a>
          </div>

            {!isAuthenticated && <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/signin">
                  <button type="button" className="btn btn-primary navbar-btn">Sign in</button>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <button type="button" className="btn btn-primary navbar-btn">Sign up</button>
                </Link>
              </li>
            </ul>}

            {isAuthenticated && <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/createMessage">
                  <button type="button" className="btn btn-warning navbar-btn">Create message</button>
                </Link>
              </li>
              <li>
                <Link to="/signout">
                  <button type="button" className="btn btn-danger navbar-btn" onClick={this._handleClick}>Sign out</button>
                </Link>
              </li>
            </ul>}

        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
