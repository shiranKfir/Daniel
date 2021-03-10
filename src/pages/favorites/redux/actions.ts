import {
    LOAD_FAVORITES_DATA,
    LOAD_FAVORITES_DATA_SUCCESS,
    LOAD_FAVORITES_DATA_FAILED,
    ADD_TO_FAVORITES_LIST,
    REMOVE_FROM_FAVORITES_LIST,
} from './constants';
import { getCurrentWeatherConditions } from '../../../api';

export const addToFavoritesList = (locationId: number, locationName: string) => ({
    type: ADD_TO_FAVORITES_LIST,
    payload: {
        locationId,
        locationName,
    }
});

export const removeFromFavoritesList = (locationId: number) => ({
    type: REMOVE_FROM_FAVORITES_LIST,
    payload: locationId
});

export const loadFavoritesData = (
    favoritesLocations: any
): any => async (dispatch: any) => {
    dispatch({ type: LOAD_FAVORITES_DATA });
    try {
        const data = await Promise.all(favoritesLocations.map(async (location: any) => {
            const currentWeatherConditions = await getCurrentWeatherConditions(location.id);
            return {
                ...location,
                currentWeather: currentWeatherConditions[0],
            }
        }));

        dispatch({
            type: LOAD_FAVORITES_DATA_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({ type: LOAD_FAVORITES_DATA_FAILED, error });
    }
}