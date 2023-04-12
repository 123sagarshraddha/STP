import React from "react";
import { Link } from "react-router-dom";
import logo from '..//../assets/images/logo.png';
// import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <>

            <header className="header">
                <div className="navbar">
                    <div className="icon">
                        <a className="l-1" to=''><img className="img" src={logo} />

                        </a>

                        <div className="menu">
                            India's Largest Marketplace for Intracity Logistics

                        </div>
                    </div>
                    <div className="right_header">
                        <div className="box">
                            <a className="b1" to=""><img className="img1" src="https://d35ppnqksufxmo.cloudfront.net/frontend_website/9e4ccae9c5a1b669d8fa2648db220c3f.svg" />
                                <div className="heading">
                                    <div className="ti-1">DRIVE WITH US</div>
                                    <div className="ti-2"> turn kms into money</div>

                                </div>
                                <div className="join_us">
                                    <Link style={{ textDecoration: 'none' }} to="/"> JOIN US</Link>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="contact_us">
                        <div className="call-logo">
                            <div className="call-i">
                                <i className="fa fa-phone-volume"></i>
                            </div>
                            <div>
                                <div className='header-h2'>
                                    <ul>
                                        <li>
                                            <Link style={{textDecoration:'none'}} to='/signup'>SignUp</Link>
                                        </li>
                                        {/* <li>
                                            <Link style={{textDecoration:'none'}} to='/'>Login</Link>
                                        </li> */}
                                    </ul>

                                </div>
                                {/* <div className="profile_icon">
                                    <Link to=""> <Icon icon="pajamas:profile" color="white" width="30" height="30" /></Link>
                                </div> */}
                            </div>

                        </div>

                    </div>
                </div>
            </header>


[]

        </>
    )
};

export default Header;