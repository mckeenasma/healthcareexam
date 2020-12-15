import React from 'react'
import {Card, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <Card>
                <div className="container">
                    <div className="row justify-content-md-center" style={{marginTop: '20%', marginBottom: '20%'}}>
                        <div className="col-sm-6 ">
                            <input class="shadow p-3 mb-2 bg-white form-control form-control-lg" type="text" placeholder="type username" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}}/>
                            <input class="shadow p-3 mb-5 bg-white form-control form-control-lg" type="password" placeholder="type password" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}}/>
                            <Link to='/addDoc' type="button" class="shadow p-3 mb-3 btn btn-block" style={{backgroundColor: '#1BB55C', color: 'white', fontWeight: 'bold', borderRadius: 20}}>Sign In</Link>
                            {/* <a class="shadow p-3 mb-5 btn btn-block" style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', borderRadius: 20}}>
                                <span class="fa fa-facebook pr-2"></span> Sign in with Facebook
                            </a> */}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Login
