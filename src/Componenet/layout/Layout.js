import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import img from '../../assets/images/img.jpg';
import order from '../../assets/images/order.jpg';
import address from '../../assets/images/address.jpg';
import contact from '../../assets/images/contact.jpg';
import invite from '../../assets/images/invite.jpg';
import logout from '../../assets/images/logout.jpg';
import payment from '../../assets/images/payment.jpg'

export default function Layout(props) {

    const showMenu = () => {
        props.setShowProfile(!props.showProfile)
    }

    // const logout = () => {
    //     localStorage.removeItem('token-info');
    //     setIsLoggedin(false);
    //   };
    return (
        <>

            <nav>
                <img src={logo} className="logo" />

                <ul>
                    <li><a>Profile info</a></li>
                </ul>

                <img src={img} className="user-pic" onClick={showMenu} />


            </nav>

            {props.showProfile && <div className="sub-menu-wrap" >
                <div className="sub-menu">
                    <div className="user-info">
                        <img src={img} />
                        <h3>Customer</h3>
                    </div>
                    <hr />

                    <Link to='/profile' className="sub-menu-link">
                        <img src={img} alt="" />
                        <p>Edit Profile</p>
                        {/* <span></span> */}
                    </Link>
                    <Link to="/payment" className="sub-menu-link">
                        <img src={payment} alt="" />
                        <p>Payment</p>

                    </Link>


                    <Link to="/history" className="sub-menu-link">
                        <img src={order} alt="" />
                        <p>Order History</p>

                    </Link>

                    <Link to={"/address"}
                        className="sub-menu-link">
                        <img src={address} alt="" />
                        <p>My Address</p>

                    </Link>

                    <Link to={"/contact"}
                        className="sub-menu-link">
                        <img src={contact} alt="" />
                        <p>Contact Us</p>

                    </Link>

                    <Link to={'/logout'}
                        className="sub-menu-link"  >
                        <img src={logout} alt="" />
                        <p>Logout</p>

                    </Link>

                </div>
            </div>
            }
        </>
    )
}


