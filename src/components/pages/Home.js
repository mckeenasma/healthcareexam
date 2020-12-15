import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Home.css';

function Home () {
    
    return (
        <div className="container">
            <div className="row justify-content-md-center" style={{marginTop: '20%', marginBottom: '20%'}}>
                <div className="col-sm-6 ">
                    <Link type="button" to="/login" class="shadow p-3 mb-3 bg-white btn btn-default btn-block " style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20}}>Sign In</Link>
                    <Link type="button" to="/signup" class="shadow p-3 mb-5 btn btn-block" style={{backgroundColor: '#1BB55C', color: 'white', fontWeight: 'bold', borderRadius: 20}}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
    
}


export default Home

