import React from 'react'

const style1 = {
    width:'110px',
    color:"white",
    background:'blue',
    borderRadius:'15px',
    fontSize:'16px',
    margin:'20px'
}

const Button = () => {
    return (
        <div>
            <button style={style1}>Contact</button>
        </div>
    )
}

export default Button
