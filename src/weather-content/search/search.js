import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, cityApiOptions } from "./api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);


    // EXTRACT the latitude and longitude for the searched city
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, cityApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }


    const onChangeHandler = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <div className="search__input">
            <AsyncPaginate
                className="search__input--area"
                placeholder="Search for city"
                debounceTimeout={300}
                value={search}
                onChange={onChangeHandler}
                loadOptions={loadOptions}
            />
        </div>
    )
}

export default Search;
