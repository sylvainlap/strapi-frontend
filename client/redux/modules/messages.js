import { CALL_API } from 'redux-api-middleware';
import { push } from 'react-router-redux';

const baseUrl = 'http://51.255.37.131:1337/message';

// Constants

const CREATE_MESSAGE_REQUEST = 'CREATE_MESSAGE_REQUEST';
const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';
const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';

// Actions creators

function createMessage(newMessage) {
  return dispatch => {
    dispatch({
      [CALL_API]: {
        endpoint: baseUrl,
        method: 'POST',
        headers: {
          'Accept': 'application/json', // eslint-disable-line quote-props
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('strapiJwt')}`, // eslint-disable-line quote-props
        },
        body: JSON.stringify(newMessage),
        types: [CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS, CREATE_MESSAGE_FAILURE],
      },
    }).then((action) => {
      if (action.type === CREATE_MESSAGE_SUCCESS) {
        dispatch(push('/'));
      }
    });
  };
}

function getMessages() {
  return {
    [CALL_API]: {
      endpoint: baseUrl,
      method: 'GET',
      headers: {
        'Accept': 'application/json', // eslint-disable-line quote-props
        'Content-Type': 'application/json',
      },
      types: [GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE],
    },
  };
}

// Exposed Actions

export const actions = {
  createMessage,
  getMessages,
};

// Reducers (must be pure !)

const initialState = {
  isFetching: false,
  messages: [],
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case CREATE_MESSAGE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        messages: [...state.messages, action.payload],
      });
    case CREATE_MESSAGE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case GET_MESSAGES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case GET_MESSAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        messages: action.payload,
      });
    case GET_MESSAGES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
}
