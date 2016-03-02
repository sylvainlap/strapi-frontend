import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class Message extends Component {
  render() {
    const { title, content, tags, author, createdAt } = this.props;

    return (
      <tr>
        <td className="user">
          <span><i>{author.username}</i></span>
        </td>
        <td className="question">
          <div className="msg user">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
          <div className="msg ref">
            <p>
              Ce message n'a pas encore recu de réponse du référent.
            </p>
          </div>
          <div className="tags">
            {tags}
          </div>
        </td>
        <td className="info">
          ouverte : {moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}<br /><br />
          fermée : N/A
        </td>
        <td className="status closed">
          <span><i className="fa fa-check"></i></span>
        </td>
      </tr>
    );
  }
}

Message.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Message;
