import React from 'react';

import DailyWeather from '../dailyWeather/DailyWeather';
import './DailyForecasts.css';

type Props = {
    data: any;
}

const DailyForecast = ({ data }: Props) => {
    const dailyWeatherData = data.map(({ Date, Temperature }: any) => ({
        date: Date,
        minTemp: Temperature.Minimum.Value,
        maxTemp: Temperature.Maximum.Value,
    }));

    return (
        <div className="dailyForecasts">
            {dailyWeatherData.map((dailyData: any, key: number) => <DailyWeather key={key} data={dailyData} />)}
        </div>
    );
}

export default DailyForecast;
