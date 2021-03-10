import {
    LOAD_FAVORITES_DATA,
    LOAD_FAVORITES_DATA_SUCCESS,
    LOAD_FAVORITES_DATA_FAILED,
    ADD_TO_FAVORITES_LIST,
    REMOVE_FROM_FAVORITES_LIST
} from './constants';

export const initialState: any = {
    favoriteLocations: [],
    isLoading: false,
    error: null,
};

const favoritesReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case LOAD_FAVORITES_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_FAVORITES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                favoriteLocations: action.payload
            };
        case LOAD_FAVORITES_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case ADD_TO_FAVORITES_LIST:
            return {
                ...state,
                favoriteLocations: [...state.favoriteLocations, {
                    id: action.payload.locationId,
                    name: action.payload.locationName,
                }]
            };
        case REMOVE_FROM_FAVORITES_LIST:
            return {
                ...state,
                favoriteLocations: state.favoriteLocations.filter((location: any) => location.id !== action.payload)
            };
        default:
            return state;
    }
};

export default favoritesReducer;
