import React from 'react'
import './css/List.css'

export default function List({userList, setUserID}){
    const handleClick = (event) => {
        const targetElement = event.target;

        if (document.querySelector('.active-user')){
            document.querySelector('.active-user').classList.remove('active-user');
        }

        targetElement.classList.add('active-user');

        userList.map(item => item.name === targetElement.textContent && setUserID(item.id))
    }

    return(
        <ul>
            {userList.map(item => {
                return <li key={item.id} onClick={handleClick}>{item.name}</li>
            })}
        </ul>
    )
}