import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { getIconsMap } from '../../../../utils/utils';
import './FavoriteCard.css';
import {loadWeather} from "../../../weather/redux/actions";

type Props = {
    favoriteLocation: any;
    onClickFavoriteCard: () => void;
}

const FavoriteCard = ({ favoriteLocation, onClickFavoriteCard }: Props) => {
    const dispatch = useDispatch();
    const { name, id, currentWeather } = favoriteLocation;
    const iconsMap = getIconsMap();
    const onClickFavorite = () => {
        dispatch(loadWeather(id, name));
        onClickFavoriteCard();
    }

    return (
        <Card onClick={onClickFavorite} variant="outlined" className="favoriteCard">
            <CardContent className="favoriteCardContent">
                <div className="favoriteCityName">{name}</div>
                <div className="favoriteTemperature">{`${currentWeather?.Temperature?.Metric?.Value}°`}</div>
                <div className="favoriteWeatherText">{currentWeather?.WeatherText}</div>
                <img
                    className="favoriteWeatherIcon"
                    src={iconsMap[currentWeather?.WeatherIcon]}
                    alt="favorite Weather Icon"
                />
            </CardContent>
        </Card>
    )
}

export default FavoriteCard;
