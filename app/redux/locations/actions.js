import * as types from './types';

export const locationsPending = () => ({
    type: types.LOCATIONS_PENDING,
});

export const locationsSuccess = (currentLocation) => ({
    type: types.LOCATIONS_SUCCESS,
    payload: currentLocation,
});

export const locationsError = (error) => ({
    type: types.LOCATIONS_ERROR,
    error,
});