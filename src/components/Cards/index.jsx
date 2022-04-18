import React from 'react'
import './styles.css'

// alterar o estado de page via props

export const Cards = (props) => {
    const data = props.data;

    return(
        <div className='card--content'>
            <div className='pages--button'>
                <button>BACK</button>
                <button>NEXT</button>
            </div>
            <div className='character--content'>
            {data.map(character => (
                    <div key={character.id} className='character--card'>
                        <img src={character.image} alt="character image" />
                        <h2 className='character--name'><span>Name: </span>{character.name}</h2>
                        <p className='character--gender'><span>Gender: </span>{character.gender}</p>
                        <p className='character--species'><span>Specie: </span>{character.species}</p>
                        <p className='character--status'><span>Status: </span>{character.status}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}