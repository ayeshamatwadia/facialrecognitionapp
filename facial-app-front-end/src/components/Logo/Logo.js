import React from 'react';
import logo from './logo.png';
import Tilt from 'react-tilt';

const Logo = () => {
    return(
        <Tilt className="Tilt shadow-2 ml4" options={{ max : 50 }} style={{ height: 150, width: 150 }}>
            <div style={{minWidth:'100%', minHeight:"100%", display:'block', marginLeft: "auto", marginRight: "auto", }} className='Tilt-inner'>
             <img  src={logo} alt="Logo"/>
        </div>
        </Tilt>
       
    )
};

export default Logo;