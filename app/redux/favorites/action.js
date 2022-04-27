import * as types from './types';

export const addFavorite = (payload) => ({
    type: types.ADD_FAVORITE,
    payload: payload
});

export const removeFavorite = (payload) => ({
    type: types.REMOVE_FAVORITE,
    payload: payload
});