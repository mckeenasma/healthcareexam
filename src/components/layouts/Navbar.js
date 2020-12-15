import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{color: '#1BB55C', fontWeight: 'bold'}}>
                <img src={logo} alt="logo" style={{width: '180px',}}/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <i className="fas fa-bars" style={{color: '#000'}}></i>
                    </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto m-auto">
                        <li className="nav-item ml-5">
                            <Link className="nav-link text-uppercase " aria-current="page" to="/">home&nbsp;<i class="fas fa-home"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-uppercase ml-5" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  text-uppercase ml-5" aria-current="page" to="/contacts">contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
