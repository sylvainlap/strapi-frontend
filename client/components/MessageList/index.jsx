import React, { Component, PropTypes } from 'react';

import Message from '../../components/Message';

class MessageList extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div className="threads col-12">
        <table className="col-12">
          <tbody>
            <tr>
              <td className="user">
                <span><i>Dr. Combes</i></span>
              </td>
              <td className="question">
                <div className="msg user">
                  <p>Qu’est-ce qu’un antibiotique ?</p>
                </div>
                <div className="msg ref">
                  <p>
                    Les antibiotiques sont des médicaments capables d’entraîner
                    la destruction (effet bactéricide) ou l’arrêt ...
                  </p>
                </div>
                <div className="tags"></div>
              </td>
              <td className="info">
                ouverte : 12/01/16<br /><br />
                fermée : 01/02/16
              </td>
              <td className="status closed">
                <span><i className="fa fa-check"></i></span>
              </td>
            </tr>
            <tr>
              <td className="user">
                <span><i>Dr. Perrin</i></span>
              </td>
              <td className="question">
                <div className="msg user">
                  <p>Pourquoi utilise-t-on des antibiotiques en élevage ?</p>
                </div>
                <div className="msg ref">
                  <p>
                    Comme tout être vivant, les animaux sont sujets à des
                    maladies qu’il est nécessaire ...
                  </p>
                </div>
                <div className="tags">
                  <a href="#">élevage</a><a href="#">antibio critique</a>
                </div>
              </td>
              <td className="info">
                ouverte : 18/12/15<br /><br />
                mise à jour : 10/01/16
              </td>
              <td className="status in-progress">
                <span><i className="fa fa-ellipsis-h"></i></span>
              </td>
            </tr>
            <tr>
              <td className="user">
                <span><i>Dr. Lucas</i></span>
              </td>
              <td className="question">
                <div className="msg user">
                  <p>Pourquoi utilise-t-on des antibiotiques en élevage sur des animaux qui ne sont pas malades?</p>
                </div>
                <div className="msg ref">
                  <p>
                    La plupart des animaux de production ou de rente sont
                    élevés en groupe (volailles, porcs, veaux, bovins …)...
                  </p>
                </div>
                <div className="tags">
                  <a href="#">élevage</a><a href="#">pratique</a>
                </div>
              </td>
              <td className="info">
                ouverte : 11/01/16<br /><br />
                mise à jour : 14/01/16
              </td>
              <td className="status in-progress">
                <span><i className="fa fa-ellipsis-h"></i></span>
              </td>
            </tr>
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
