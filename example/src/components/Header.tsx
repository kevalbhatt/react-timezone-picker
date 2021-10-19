import React from 'react'
import worldIcon from "../icon/world.png";

const Nav = ({ children, onMapClick }: any) => {
    return <div className="header">
        {children}
        <img src={worldIcon} alt="icon" onClick={onMapClick}/>
    </div>
}

export default Nav;
