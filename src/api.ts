const API_KEY = 'IYteLlDHZFXzpmhbKM29nyzdIzSRNsKt';
const API_URL = 'http://dataservice.accuweather.com';

export const getCurrentWeatherConditions = async (key: number) => {
    const url = `${API_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const currentWeather = await response.json();
    return currentWeather;
}

export const getDailyForecasts = async (key: number) => {
    const url = `${API_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=true`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const dailyForecasts = await response.json();
    return dailyForecasts;
}

export const getCitiesBySearchVal = async (searchTerm: string) => {
    const url = `${API_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchTerm}`;
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const results = await response.json();
    return results;
}