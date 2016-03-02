// Constants

const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Reducers (must be pure !)

export default function errorMessage(state = null, action) {
  const { type, error, payload } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return payload;
  }

  return state;
}
