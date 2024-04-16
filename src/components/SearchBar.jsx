import React, { useEffect, useRef, useState } from 'react'
import { getLocations } from '../services/getLocations';


const SearchBar = ({ setLocation, setErrorLocation }) => {

    const [searchValue, setSearchValue] = useState(Math.floor(Math.random() * 126) + 1)
    const formRef = useRef();

    useEffect(() => {
        const initialLocation = async () => {
            try {
                const locationData = await getLocations(searchValue)
                setLocation(locationData);
            } catch (error) {
                console.error('Error', error);
            }
        }
        initialLocation();
    }, [])

    const handleSearch = async (e) => {
        e?.preventDefault()
        try {
            if (searchValue.trim() !== '') {
                const locationData = await getLocations(searchValue)
                setLocation(locationData);
                setErrorLocation(null);
                formRef.current.reset();
            }
        } catch (error) {
            console.error('not found it', error);
            if (error.response && error.response.status === 404) {
                setErrorLocation('Hey! you must provide an id from 1 to 126 😨');
            } else {
                setErrorLocation('Error');
            }
            formRef.current.reset();
        }
    };

    const handleInputChange = e => {
        setSearchValue(e.target.value);
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <form ref={formRef}>
                <input
                    type="text"
                    placeholder='Search any Location'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;