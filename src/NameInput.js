import React from 'react'

export default function () {

    const handleInputChange = (event) => 
    {
        window.playerName = event.target.value;
    }

    return (
        <div>
            Input your username:
            <br/>
            <input type='text' onChange={handleInputChange}></input>
        </div>
    )
}
