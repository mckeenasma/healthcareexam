import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <div>
            <FooterContainer className="main-footer bg-light" >
                <div className="footer-middle">
                    <div className="container">
                        <div className="row justify-content-sm-center">
                            {/* Col 1 */}
                            <div className="col-md-3 col-sm-6 ml-5">
                                <h4>members</h4>
                                <ul className='list-unstyled'>
                                    <li>Asma, Mckeen.</li>
                                    <li>Alvarez, Julius Mark.</li>
                                    <li>Agujar, Chrissa Mae.</li>
                                    <li>Dinero, Vincent.</li>
                                    <li>Fernandez, Angelo.</li>
                                </ul>
                            </div>

                            {/* Col 2 */}
                            <div className="col-md-3 col-sm-6 ml-5">
                                <h4>Lorem, ipsum.</h4>
                                <ul className='list-unstyled'>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                </ul>
                            </div>

                            {/* Col 2 */}
                            <div className="col-md-3 col-sm-6 ml-5">
                                <h4>Lorem, ipsum.</h4>
                                <ul className='list-unstyled'>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                    <li>Lorem, ipsum.</li>
                                </ul>
                            </div>

                            

                            

                            
                        </div>
                        {/* Footer Bottom */}
                        <div className="footer-bottom">
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} Brokenshire Triage App - All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        </div>
    )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    // background: var(--mainGrey);
    padding-top: 3rem;
    color: var(--mainBlack);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 3rem;
}
`;