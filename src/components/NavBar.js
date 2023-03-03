import React from "react";
import "../style.css";
import {Link} from "react-router-dom"

export default function NavBar(){
    return<div className="nav-wrapper" >
            <div className="nav-links">
                <Link to="/User/Profile" >Profile</Link><hr/>
                <Link to="/User/Posts" >Posts</Link> <hr/>
                <Link to="/User/Gallery" >Gallery</Link><hr/>
                <Link to="/User/ToDo" >ToDo</Link> 
            </div>
        </div>
}