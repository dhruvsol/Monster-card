import React from 'react';
import './card.style.css'
// made a function and added a props as a pramameter
export const Card = (props)=> (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        {/* access the props return by the card list components file  */}
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)

