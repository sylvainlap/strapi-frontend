// Constants

const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Reducers (must be pure !)

export default function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
}
