import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../redux/modules/auth';

class SignOut extends Component {
  componentDidMount() {
    this.props.dispatch(authActions.signoutUser());
  }

  render() {
    return (
      <div>
        Signout in progress...
      </div>
    );
  }
}

SignOut.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SignOut);
