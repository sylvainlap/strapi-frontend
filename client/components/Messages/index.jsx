import React, { Component, PropTypes } from 'react';

class Messages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div>
        {messages.map((message) => (
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">{message.contributors[0].username}</h3>
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
