import React, { Component } from 'react'

class NotFoundPage  extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center" style={{marginTop: '20%', marginBottom: '20%'}}>
                    <div className="col-sm-12">
                        <h2 className="text-center" style={{color: 'grey', alignSelf: 'center'}}>Error 404 Page Not Found.</h2>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFoundPage 