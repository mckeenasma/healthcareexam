import React, { useRef } from 'react'
// import { useAuth } from '../../contexts/AuthContext'

function Signup() {
    // const usernameRef = useRef()
    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    // const { signup } = useAuth()

    // function handleSubmit(e) {
    //     e.preventDefault()

    //     signup(emailRef.current.value, passwordRef.current.value)
    // }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center" style={{marginTop: '20%', marginBottom: '20%'}}>
                    <div className="col-sm-6 ">
                    {/* <input ref={usernameRef} class="shadow p-3 mb-2 bg-white form-control form-control-lg" type="text" placeholder="type username" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}}/> */}
                        <input class="shadow p-3 mb-2 bg-white form-control form-control-lg" type="text" placeholder="type username" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}}/>
                        <input  class="shadow p-3 mb-2 bg-white form-control form-control-lg" type="email" placeholder="type email" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}} required/>
                        <input  class="shadow p-3 mb-2 bg-white form-control form-control-lg" type="password" placeholder="type password" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}}/>
                        <input  class="shadow p-3 mb-5 bg-white form-control form-control-lg" type="password" placeholder="type confirm password" style={{color: '#1BB55C', fontWeight: 'bold', borderRadius: 20, height: 58}}/>
                        <button type="button" class="shadow p-3 mb-3 btn btn-block" style={{backgroundColor: '#1BB55C', color: 'white', fontWeight: 'bold', borderRadius: 20}}>Sign Up</button>
                        <a to='/login' className="w-100 text-center mt-4">Already have an account? Login</a>
                        {/* <a class="shadow p-3 mb-5 btn btn-block" style={{backgroundColor: 'blue', color: 'white', fontWeight: 'bold', borderRadius: 20}}>
                            <span class="fa fa-facebook pr-2"></span> Sign in with Facebook
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
