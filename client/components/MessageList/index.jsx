import React, { Component, PropTypes } from 'react';

import Message from '../../components/Message';

class MessageList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div className="threads col-12">
        <table className="col-12">
          <tbody>
            {messages.map(message =>
              <Message
                key={message.id}
                title={message.title}
                content={message.content}
                tags={message.tags}
                author={message.contributors[0]}
                createdAt={message.createdAt}
              />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
