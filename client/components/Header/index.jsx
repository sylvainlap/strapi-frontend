import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <header className="row col-12">
        <Link to="/">
          <h1><i className="fa fa-comments-o logo"></i>&nbsp;Référents Antibio</h1>
        </Link>
        {!isAuthenticated && <div>
          <Link className="user-menu lnk-clr" to="/signin">
            <i className="fa fa-sign-in"></i>&nbsp;S'authentifier
          </Link>
          <Link className="user-menu lnk-clr" to="/signup">
            <i className="fa fa-user-plus"></i>&nbsp;Créer un compte
          </Link>
        </div>}

        {isAuthenticated && <div>
          <Link className="user-menu lnk-clr" to="/profile">
            <i className="fa fa-user-md"></i>&nbsp;Dr Perrin
          </Link>
          <Link className="user-menu lnk-clr" to="/createMessage">
            <i className="fa fa-plus"></i>&nbsp;Créer un nouveau message
          </Link>
          <Link className="user-menu lnk-clr" to="/signout">
            <i className="fa fa-sign-out"></i>&nbsp;Se déconnecter
          </Link>
        </div>}
      </header>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
