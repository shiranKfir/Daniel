import {
    LOAD_WEATHER_IN_CURRENT_LOCATION,
    LOAD_WEATHER_IN_CURRENT_LOCATION_FAILED,
    LOAD_WEATHER_IN_CURRENT_LOCATION_SUCCESS,
    SET_CITY,
} from './constants';
import { getCurrentWeatherConditions, getDailyForecasts } from '../../../api';

export const setCity = (cityId: number) => ({
    type: SET_CITY,
    payload: cityId,
})

export const loadWeather = (
    locationId: number,
    locationName: string,
): any => async (dispatch: any) => {
    dispatch({ type: LOAD_WEATHER_IN_CURRENT_LOCATION });
    try {
        const currentWeather = await getCurrentWeatherConditions(locationId);
        const dailyForecasts = await getDailyForecasts(locationId);
        dispatch({
            type: LOAD_WEATHER_IN_CURRENT_LOCATION_SUCCESS,
            payload: {
                id: locationId,
                name: locationName,
                currentWeather: currentWeather[0],
                dailyForecasts: dailyForecasts
            }
        });
    } catch (error) {
        dispatch({ type: LOAD_WEATHER_IN_CURRENT_LOCATION_FAILED, error });
    }
}