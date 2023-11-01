import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar1(){
    return(
        <nav>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
            <NavLink to = '/about'>About</NavLink>
        </nav>
        
    )
}