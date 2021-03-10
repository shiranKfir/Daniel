import {
    LOAD_WEATHER_IN_CURRENT_LOCATION,
    LOAD_WEATHER_IN_CURRENT_LOCATION_SUCCESS,
    LOAD_WEATHER_IN_CURRENT_LOCATION_FAILED
} from './constants';

export const initialState: any = {
    currentLocation: {
        name: 'Tel Aviv',
        id: 215854,
        currentWeather: {},
        dailyForecasts: [],
    },
    isLoading: false,
    error: null,
};

const weatherReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case LOAD_WEATHER_IN_CURRENT_LOCATION:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_WEATHER_IN_CURRENT_LOCATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentLocation: {
                    name: action.payload.name,
                    id: action.payload.id,
                    currentWeather: action.payload.currentWeather,
                    dailyForecasts: action.payload.dailyForecasts.DailyForecasts,
                }
            };
        case LOAD_WEATHER_IN_CURRENT_LOCATION_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default weatherReducer;
