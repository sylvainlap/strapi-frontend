import { push } from 'react-router-redux';
import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:1337';

// Constants

const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNIN_FAILURE';
const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
const SIGNOUT = 'SIGNOUT';

// Actions creators

function signupRequest() {
  return {
    type: SIGNUP_REQUEST,
  };
}

function signupSuccess(payload) {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
}

function signupFailure(payload) {
  return {
    type: SIGNUP_FAILURE,
    error: true,
    payload,
  };
}

function signupUser(newUser) {
  const options = {
    method: 'post',
    headers: {
      'Accept': 'application/json', // eslint-disable-line quote-props
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  };

  return dispatch => {
    dispatch(signupRequest());

    return fetch(`${baseURL}/auth/local/register.`, options).then((response) =>
      response.json()
    ).then((json) => {
      if (!json.jwt) {
        return Promise.reject(new Error(json.message));
      }

      localStorage.setItem('strapiJwt', json.jwt);
      dispatch(signupSuccess(json));
      dispatch(push('/'));
      return Promise.resolve();
    }).catch((err) => {
      dispatch(signupFailure(err));
    });
  };
}

function signinRequest() {
  return {
    type: SIGNIN_REQUEST,
  };
}

function signinSuccess(payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
}

function signinFailure(payload) {
  return {
    type: SIGNIN_FAILURE,
    error: true,
    payload,
  };
}

function signinUser(creds) {
  const options = {
    method: 'post',
    headers: {
      'Accept': 'application/json', // eslint-disable-line quote-props
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(creds),
  };

  return dispatch => {
    dispatch(signinRequest());

    return fetch(`${baseURL}/auth/local`, options).then((response) =>
      response.json()
    ).then((json) => {
      if (!json.jwt) {
        return Promise.reject(new Error(json.message));
      }

      localStorage.setItem('strapiJwt', json.jwt);
      dispatch(signinSuccess(json));
      dispatch(push('/'));
      return Promise.resolve();
    }).catch((err) => {
      dispatch(signinFailure(err));
    });
  };
}

function signout() {
  return {
    type: SIGNOUT,
  };
}

function signoutUser() {
  return dispatch => {
    localStorage.removeItem('strapiJwt');
    dispatch(signout());
    dispatch(push('/'));
  };
}

// Exposed Actions

export const actions = {
  signupUser,
  signinUser,
  signoutUser,
};

// Reducers (must be pure !)

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('strapiJwt') !== null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
      });
    case SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: action.payload,
      });
    case SIGNIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
      });
    case SIGNIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: action.payload,
      });
    case SIGNOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    default:
      return state;
  }
}
