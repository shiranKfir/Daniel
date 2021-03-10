import React from 'react';

import { getTextDay } from '../../../../utils/utils';
import './DailyWeather.css';

type Props = {
  data: any;
}

const DailyWeather = ({ data }: Props) => {
    const { date, minTemp, maxTemp } = data;

    return (
        <div className='dailyWeather'>
            <div className='day'>{getTextDay(date)}</div>
            <div className='temperatureRange'>{`${minTemp}°-${maxTemp}°`}</div>
        </div>
    )
}

export default DailyWeather;
