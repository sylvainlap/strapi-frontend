import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../redux/modules/auth';
import { actions as messagesActions } from '../../redux/modules/messages';

class SignUp extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <p>
        Ici je pourrai créer mon user.
      </p>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SignUp);
