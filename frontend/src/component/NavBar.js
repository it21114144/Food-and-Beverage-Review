import React, { Component } from 'react';
import "../style/NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="navbar__barContent">
                    <h5> Foodies </h5>
                </div>
            </div>
         );
    }
}
 
export default NavBar;