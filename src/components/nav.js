import React, { Component } from 'react';
import '../stylesheets/nav.scss';

class Navbar extends Component {
    render(){
        return(
            <>
            <header>
                <h1><a><span>NomNom</span> recipes</a></h1>
                <nav>
                    <li><a>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </nav>
            </header>
            </>
        )
    }
}

export default Navbar;