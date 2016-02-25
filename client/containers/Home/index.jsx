import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as messagesActions } from '../../redux/modules/messages';

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(messagesActions.getMessages());
  }

  render() {
    const { allMessages, errorMessage } = this.props;

    return (
      <div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <ol>
          {allMessages.map((message) =>
            <li>{message.contributors[0].username} {message.content}</li>
          )}
        </ol>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  allMessages: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
};

function mapStateToProps(state) {
  const { messages } = state;
  const { allMessages, errorMessage } = messages;

  return {
    allMessages,
    errorMessage,
  };
}

export default connect(mapStateToProps)(Home);
