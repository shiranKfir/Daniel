import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';

import { getCitiesBySearchVal } from '../../../../api';
import useDebounce from '../../use-debounce';
import './SearchField.css';

type Props = {
    onChange: (id: number, name: string) => void;
}

export default function SearchField({ onChange }: Props) {
    const [options, setOptions]: any = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (debouncedSearchTerm) {
                setIsLoading(true);
                getCitiesBySearchVal(debouncedSearchTerm).then(results => {
                    setIsLoading(false);
                    setOptions(results);
                });
            } else {
                setOptions([]);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <Autocomplete
            className="searchField"
            getOptionSelected={(option, value) => option.name === value.name}
            getOptionLabel={(option: any) => option.LocalizedName}
            onChange={(e, value) => onChange(value.Key, value.LocalizedName)}
            options={options}
            loading={isLoading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    onChange={e => setSearchTerm(e.target.value)}
                    label="Search City"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <React.Fragment>
                                <SearchIcon />
                                {params.InputProps.startAdornment}
                            </React.Fragment>
                        ),
                        endAdornment: (
                            <React.Fragment>
                                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

