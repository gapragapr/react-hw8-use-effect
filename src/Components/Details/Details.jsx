import React from 'react'
import './css/Details.css'

export default function Details({user}){
    console.log(user)
    return(
        <div className="details">
            <img src={user.avatar} alt="" />
            <p className='user-name'>{user.name}</p>
            <p className='user-details'>City: {user.details.city}</p>
            <p className='user-details'>Company: {user.details.company}</p>
            <p className='user-details'>Position: {user.details.position}</p>
        </div>
    )
    
}