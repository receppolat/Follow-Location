import * as types from './types';

const initialState = {
  loading: false,
  error: null,
  currentLocation: null,
};


export default function (state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case types.LOCATIONS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case types.LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentLocation: payload,
      };
    case types.LOCATIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: error,

      };
    default:
      return state;
  }
}
