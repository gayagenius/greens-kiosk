import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
        <nav className="navbar navbar-expand-md dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <Link className="nav-link" to={'/'}>Home</Link>
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
    </nav>
        )
    }
}