// Constants

const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Actions creators

function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE,
  };
}

// Exposed Actions

export const actions = {
  resetErrorMessage,
};

// Reducers (must be pure !)

export default function errorMessage(state = null, action) {
  const { type, error, payload } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return payload.message;
  }

  return state;
}
