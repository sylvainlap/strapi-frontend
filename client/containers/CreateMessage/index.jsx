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
      content: this._content.value,
    };
    this.props.dispatch(messagesActions.createMessage(newMessage));
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form className="form-horizontal" onSubmit={this._handleSubmit}>
          <h2>Create a new message</h2>
          <div className="form-group">
            <label htmlFor="textareaContent" className="col-sm-2 control-label">Content</label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                rows="3"
                id="textareaContent"
                placeholder="Content of your message"
                ref={(node) => { this._content = node; }} // eslint-disable-line react/jsx-no-bind
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

CreateMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

function mapStateToProps(state) {
  const { messages } = state;
  const { errorMessage } = messages;

  return {
    errorMessage,
  };
}

export default connect(mapStateToProps)(CreateMessage);
