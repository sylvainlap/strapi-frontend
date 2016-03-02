import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MessageList from '../../components/MessageList';
import { actions as messagesActions } from '../../redux/modules/messages';

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(messagesActions.getMessages());
  }

  render() {
    const { items, isFetching } = this.props;

    return (
      <main>
        {isFetching &&
          <h1>Loading...</h1> // TODO: change
        }
        <div className="page-logo col-12">
          <span>
            <i className="fa fa-files-o"></i>
          </span>
        </div>
        <h1 className="page-title">Questions / Réponses</h1>
        <div className="search-input col-12">
          <input type="text" placeholder="Rechercher ..." />
          <button>
            <span><i className="fa fa-search"></i></span>
          </button>
        </div>
        <MessageList messages={items} />
      </main>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { messages } = state;
  const { messages: items, isFetching } = messages;

  return {
    items,
    isFetching,
  };
}

export default connect(mapStateToProps)(Home);
