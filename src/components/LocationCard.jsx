import React from 'react'
import "./locationCard.css"

const LocationCard = ({ location, errorLocation }) => {
    return (
        <div>
            {
                errorLocation ? (
                    <div className='location__container'>
                        <h2 className='location__title'>{errorLocation}</h2>
                        <img className='location__error' src="/assets/locationError.gif" alt="Location Error" />
                    </div>
                ) : (
                    <section className='location__container'>
                        <h2 className='location__title'>{location?.name.toUpperCase()}</h2>
                        <ul className='location__content'>
                            <li className='location__list'><span className='list__title'>Type: </span><span className='list__content'>{location?.type}</span></li>
                            <li className='location__list'><span className='list__title'>Dimension: </span><span className='list__content'>{location?.dimension}</span></li>
                            <li className='location__list'><span className='list__title'>Population: </span><span className='list__content'>{location?.residents.length}</span></li>
                        </ul>
                    </section>
                )
            }
        </div>
    )
}

export default LocationCard;