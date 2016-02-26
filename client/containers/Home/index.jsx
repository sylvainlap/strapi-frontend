import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Messages from '../../components/Messages';
import { actions as messagesActions } from '../../redux/modules/messages';

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(messagesActions.getMessages());
  }

  render() {
    const { items, errorMessage, isFetching } = this.props;

    return (
      <div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        {isFetching && <h2>Loading...</h2>}

        {!isFetching &&
          _.isEmpty(items) ? <h2>No messages yet...</h2> : <Messages messages={items} />}
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { messages } = state;
  const { messages: items, errorMessage, isFetching } = messages;

  return {
    items,
    errorMessage,
    isFetching,
  };
}

export default connect(mapStateToProps)(Home);
