import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import SearchField from './components/searchField/SearchField';
import CurrentLocationWeather from './components/currentLocationWeather/CurrentLocationWeather';
import DailyForecasts from './components/dailyForecasts/DailyForecasts';
import {
    getCurrentLocationId,
    getCurrentLocationWeather,
    getCurrentDailyForecasts,
    getCurrentLocationName,
    getIsLoading
} from './redux/selectors';
import { loadWeather } from './redux/actions';
import './Weather.css';

const Weather = () => {
    const dispatch = useDispatch();
    const currentLocationWeather = useSelector(getCurrentLocationWeather);
    const dailyForecasts = useSelector(getCurrentDailyForecasts);
    const locationId = useSelector(getCurrentLocationId);
    const locationName = useSelector(getCurrentLocationName);
    const isLoading = useSelector(getIsLoading);

    const weatherConditions = {
        weatherText: currentLocationWeather?.WeatherText,
        weatherIcon: currentLocationWeather?.WeatherIcon,
        temperature: {
            C: currentLocationWeather?.Temperature?.Metric?.Value,
            F: currentLocationWeather?.Temperature?.Imperial?.Value,
        }
    }

    const onChange = (id: number, name: string) => {
        dispatch(loadWeather(id, name));
    }

    useEffect(() => {
        dispatch(loadWeather(locationId, locationName));
    }, [dispatch, locationId, locationName]);

    return (
        <div className="weather">
            <SearchField onChange={onChange} />
            { !isLoading ? (
               <>
                   <CurrentLocationWeather weatherConditions={weatherConditions} />
                   <hr className="divider" />
                   <DailyForecasts data={dailyForecasts} />
               </>
            ):
                (<div>
                  <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                </div>)}

        </div>
    )
}

export default Weather;
