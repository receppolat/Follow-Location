import * as types from './types';

const initialState = {
    favoriteIds: [2,5]
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_FAVORITE:
            return {
                ...state,
                favoriteIds: [...state.favoriteIds, payload]
            };
        case types.REMOVE_FAVORITE:
            return {
                ...state,
                favoriteIds: state.favoriteIds.filter(x => x != payload)
            };
        default:
            return state;
    }
}
