import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (


            <ul className="nav nav-tabs nav-fill bg-dark">
                <li className="nav-item"><Link className="nav-link" to="/main">Overview</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/hr">HR Department</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sales">Sales Department</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/it">IT Deparment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/rd">R&D Department</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin">Administration Department</Link></li>
            </ul>

        )
    }

}

export default NavBar;