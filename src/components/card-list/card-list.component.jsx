import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css'
// made a function and added a props as a pramameter
export const CardList = (props)=>{
   
    return(
        
        <div className='card-list'>
             {
                 //access the props here and use map to loop through the list and making the changes

                props.monsters.map(monster => (
                    //passing  changes in a differnet component add passing monster as a props
                    <Card key={monster.id} monster ={monster}/>
                ))
             }
        </div>
    )
}
