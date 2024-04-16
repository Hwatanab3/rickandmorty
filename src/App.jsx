
import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'
import LocationCard from './components/LocationCard';
import ResidentsCard from './components/ResidentsCard';

function App() {
  const [location, setLocation] = useState();
  const [errorLocation, setErrorLocation] = useState(null)

  return (
    <div className='container'>

      <header>
        <img className='bar' src="../assets/header.png" alt="" />
      </header>
      <SearchBar
        setLocation={setLocation}
        setErrorLocation={setErrorLocation}
      />
      <LocationCard
        location={location}
        errorLocation={errorLocation}
      />

      <div className='residents'>
        {
          errorLocation !== null ||
          (
            location?.residents.map((resident, index) => (
              <ResidentsCard
                key={index}
                url={resident}
              />
            ))
          )
        }
      </div>

    </div>
  )
}

export default App
