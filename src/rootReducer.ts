import { combineReducers } from 'redux';

import weatherReducer from './pages/weather/redux/reducer';
import favoritesReducer from './pages/favorites/redux/reducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  favorites: favoritesReducer,
});

export default rootReducer;