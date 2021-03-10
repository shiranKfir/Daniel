import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import './SearchField.css';

function SearchField() {
  const defaultCity = 'Tel-Aviv';
  return (
      <OutlinedInput className="searchField"
                     value={defaultCity}
                     startAdornment={
                         <InputAdornment position="start">
                             <SearchIcon />
                         </InputAdornment>
                     }
      />
  );
}

export default SearchField;
