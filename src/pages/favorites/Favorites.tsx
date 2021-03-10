import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import FavoriteCard from './components/favoriteCard/FavoriteCard';
import { getFavoriteLocations, getIsLoading } from '../favorites/redux/selectors';
import { loadFavoritesData } from '../favorites/redux/actions';
import './Favorites.css';

type Props = {
    onClickFavoriteCard: () => void;
}

const Favorites = ({ onClickFavoriteCard }: Props) => {
    const dispatch = useDispatch();
    const favoritesLocations: number[] = useSelector(getFavoriteLocations);
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(loadFavoritesData(favoritesLocations));
    }, [dispatch, favoritesLocations]);

    return (
        <div className="favoritesContainer">
            <h1>Favorites</h1>
            {isLoading ?
                (<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />) :
                (
                    <div className="favoritesCards">
                        {favoritesLocations.length ?
                            favoritesLocations.map((favoriteLocation: any) =>
                            <FavoriteCard
                                key={favoriteLocation.id}
                                favoriteLocation={favoriteLocation}
                                onClickFavoriteCard={onClickFavoriteCard}
                            />) :
                            (<h1>Your favorites list is empty</h1>)}
                    </div>
                )
            }

        </div>
    )
}

export default Favorites;
