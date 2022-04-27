import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import favorites from "../favorites";
import location from "../locations";

const favoritesPersistConfig = {
  key: 'favorites',
  storage: AsyncStorage
};

const appReducer = combineReducers({
  favorites: persistReducer(favoritesPersistConfig, favorites),
  location,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
