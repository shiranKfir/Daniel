export const getCurrentLocationName = (state: any) => state.weather.currentLocation.name;
export const getCurrentLocationId = (state: any) => state.weather.currentLocation.id;
export const getCurrentLocationWeather = (state: any) => state.weather.currentLocation.currentWeather;
export const getCurrentDailyForecasts = (state: any) => state.weather.currentLocation.dailyForecasts;
export const getIsLoading = (state: any) => state.weather.isLoading;

