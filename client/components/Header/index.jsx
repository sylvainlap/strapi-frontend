import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    const { dispatch, isAuthenticated } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">strapi frontend</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <button type="button" className="btn btn-warning navbar-btn">New message</button>
            </li>
            <li>
              <button type="button" className="btn btn-danger navbar-btn">Sign out</button>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <button type="button" className="btn btn-primary navbar-btn">Sign in</button>
            </li>
            <li>
              <button type="button" className="btn btn-primary navbar-btn">Sign up</button>
            </li>
          </ul>
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
