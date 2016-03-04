import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions as messagesActions } from '../../redux/modules/messages';

class CreateMessage extends Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const newMessage = {
      title: this._title.value,
      content: this._content.value,
      tags: this._tags.value,
    };
    this.props.dispatch(messagesActions.createMessage(newMessage));
  }

  render() {
    return (
      <main>
        <div className="page-logo col-12">
          <span>
            <i className="fa fa-pencil"></i>
          </span>
        </div>
        <h1 className="page-title">Nouvelle question</h1>
        <form className="col-6 col-ol-3" onSubmit={this._handleSubmit}>
          <div className="input-group">
            <label className="col-4" htmlFor="title">Titre</label>
            <input
              type="text"
							className="col-8"
              id="title"
              ref={(node) => { this._title = node; }} // eslint-disable-line react/jsx-no-bind
            />
          </div>
          <div className="input-group">
            <label className="col-4" htmlFor="content">Question</label>
             <textarea
               className="col-8"
               rows="5"
               id="content"
               ref={(node) => { this._content = node; }}  // eslint-disable-line react/jsx-no-bind
             >
             </textarea>
          </div>
          <div className="input-group">
            <label className="col-4" htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
							className="col-8"
              ref={(node) => { this._tags = node; }} // eslint-disable-line react/jsx-no-bind
            />
          </div>
          <div className="input-group">
            <button className="col-4 col-ol-4">Envoyer</button>
          </div>
        </form>

        <h1 className="page-title">Suggestions</h1>
        <div className="threads col-12">
          <table className="col-12">
            <tr onClick="location.pathname = './thread-open.html'">
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
            <tr onClick="location.pathname = './thread-open.html'">
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
                    élevés en groupe (volailles, porcs, veaux, bovins)...
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
          </table>
        </div>
      </main>
    );
  }
}

CreateMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CreateMessage);
