import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class Messages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div>
        {messages.map((message) => (
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">{message.contributors[0].username}</h3>
              <small>{moment(message.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</small>
            </div>
            <div className="panel-body">
              {message.content}
            </div>
          </div>)
        )}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Messages;
