import React from 'react'

let style1 = {
    display:'flex',  
  }

  let style2 = {
      marginLeft:'20px'
  }
  
const Links = () => {
    return (
        <div style={style1}>
            <h4 style={style2}>Services</h4>
            <h4 style={style2}>Projects</h4>
            <h4 style={style2}>About</h4>
        </div>
    )
}

export default Links
