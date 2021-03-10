import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

import { getCurrentLocationName, getCurrentLocationId } from '../../redux/selectors';
import { addToFavoritesList, removeFromFavoritesList } from '../../../favorites/redux/actions';
import { getFavoriteLocations } from '../../../favorites/redux/selectors';
import { getIconsMap } from '../../../../utils/utils';
import './CurrentLocationWeather.css';

type Props = {
    weatherConditions: any;
}

const CurrentLocationWeather = ({ weatherConditions }: Props) => {
  const { weatherText, weatherIcon, temperature } = weatherConditions;
  const locationName = useSelector(getCurrentLocationName);
  const locationId = useSelector(getCurrentLocationId);
  const favoriteLocations = useSelector(getFavoriteLocations);
  const favoritesLocationsIds = favoriteLocations.map((location: any) => location.id);
  const dispatch = useDispatch();
  const isFavorite = favoritesLocationsIds.includes(locationId);
  const iconsMap = getIconsMap();
  const weatherIconKey = iconsMap[weatherIcon];

  const toggleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavoritesList(locationId, locationName));
    } else {
      dispatch(removeFromFavoritesList(locationId));
    }
  }

  return (
      <div className="currentCityWeather">
          <div className="cityHeader">
              <div className="city">{locationName}</div>
              <div className="favoriteIcon" onClick={toggleFavorite}>
                  {isFavorite ?
                      <Favorite/> :
                      <FavoriteBorderIcon  />
                  }
              </div>
          </div>
          <div className="weatherText">{weatherText}</div>
          <div className="temperatureContainer">
              <img className="weatherIcon" src={weatherIconKey} alt="Weather icon" />
              <div className="temperature">{temperature.C}</div>
              <div className="temperatureType">°C | °F</div>

          </div>
      </div>
  );
}

export default CurrentLocationWeather;
