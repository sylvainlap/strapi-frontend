import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as authActions } from '../../redux/modules/auth';
import { actions as messagesActions } from '../../redux/modules/messages';

class Home extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <p>
        Ici il y aura plein de messages.
      </p>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Home);
