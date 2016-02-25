import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:1337/api';

// Constants

const CREATE_MESSAGE_REQUEST = 'CREATE_MESSAGE_REQUEST';
const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';
const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';
const UPDATE_MESSAGE_REQUEST = 'UPDATE_MESSAGE_REQUEST';
const UPDATE_MESSAGE_SUCCESS = 'UPDATE_MESSAGE_SUCCESS';
const UPDATE_MESSAGE_FAILURE = 'UPDATE_MESSAGE_FAILURE';
const DELETE_MESSAGE_REQUEST = 'DELETE_MESSAGE_REQUEST';
const DELETE_MESSAGE_SUCCESS = 'DELETE_MESSAGE_SUCCESS';
const DELETE_MESSAGE_FAILURE = 'DELETE_MESSAGE_FAILURE';

// Actions

function requestMessages() {
  return {
    type: GET_MESSAGES_REQUEST,
  };
}

function receiveMessages(messages) {
  return {
    type: GET_MESSAGES_SUCCESS,
    messages,
  };
}

function getMessagesError(message) {
  return {
    type: GET_MESSAGES_FAILURE,
    message,
  };
}

function getMessages() {
  const options = {
    method: 'get',
    headers: {
      'Accept': 'application/json', // eslint-disable-line quote-props
    },
  };

  return dispatch => {
    dispatch(requestMessages());

    return fetch(`${baseURL}/message`, options).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.message) { // TODO à changer ! pas bon. Regarder le code http
        return Promise.reject(json.message);
      }

      dispatch(receiveMessages(json));
      return Promise.resolve();
    }).catch((err) => {
      dispatch(getMessagesError(err));
    });
  };
}

// Exposed Actions

export const actions = {
  getMessages,
};

// Reducers

const initialState = {
  isFetching: false,
  allMessages: [],
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case GET_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        allMessages: action.messages,
      });
    case GET_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message,
      });
    default:
      return state;
  }
}
