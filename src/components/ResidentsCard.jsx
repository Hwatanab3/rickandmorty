import React, { useEffect, useState } from 'react'
import { getResidents } from '../services/getResidents'
import "./residentsCard.css"

const ResidentsCard = ({ url }) => {

    const [resident, setResident] = useState()

    useEffect(() => {
        const getResident = async () => {
            try {
                const residentData = await getResidents(url)
                setResident(residentData);
            } catch (error) {
                console.error('Error', error);
            }
        }
        getResident();
    }, [url])

    return (
        <article className='resident__container'>
            <figure className='resident__fig'>
                <img className='resident__img' src={resident?.image} alt="resident photo" />
                <figcaption className='resident__caption'>
                    <div className='resident__circle'></div>
                    <span className='caption__txt'>{resident?.status}</span>
                </figcaption>
            </figure>
            <h3>{resident?.name}</h3>
            <hr className='resident__hr' />
            <ul className='resident__list'>
                <li className='resident__item'><span className='resident__title'>Specie: </span><span className='resident__content'>{resident?.species}</span></li>
                <li className='resident__item'><span className='resident__title'>Origin: </span><span className='resident__content'>{resident?.origin.name}</span></li>
                <li className='resident__item'><span className='resident__title'>Eppisodes where appear: </span><span className='resident__content'>{resident?.episode.length}</span></li>
            </ul>
        </article>
    )
}

export default ResidentsCard