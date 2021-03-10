import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/header/Header';
import Weather from './pages/weather/Weather';
import Favorites from './pages/favorites/Favorites';

import './App.css';

function App() {
  const [shouldShowFavorites, setShouldShowFavorites] = useState(false);

  const onClickNavItem = () => {
      setShouldShowFavorites(!shouldShowFavorites);
  }

    const onClickFavoriteCard = () => {
        setShouldShowFavorites(false);
    }

  return (
      <div>
         <Header onClickNavItem={onClickNavItem} />
          <Container maxWidth="md">
              { shouldShowFavorites ? <Favorites onClickFavoriteCard={onClickFavoriteCard} /> : <Weather /> }
          </Container>
      </div>
  );
}

export default App;
