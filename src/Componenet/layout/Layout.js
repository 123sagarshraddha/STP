import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import img from '../../assets/images/img.jpg';
import order from '../../assets/images/order.jpg';
import address from '../../assets/images/address.jpg';
import contact from '../../assets/images/contact.jpg';
import invite from '../../assets/images/invite.jpg';
import logout from '../../assets/images/logout.jpg';

export default function Layout(props) {

    const showMenu = () => {
        props.setShowProfile(!props.showProfile)
    }
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
                            {/* <span></span> */}</Link>


                        <Link to="/history" className="sub-menu-link">
                            <img src={order} alt="" />
                            <p>Order History</p>
                            {/* <span>></span> */}
                        </Link>

                        <Link to={"/my_address"}
                            className="sub-menu-link">
                            <img src={address} alt="" />
                            <p>My Address</p>
                            {/* <span>></span> */}
                        </Link>



                        <a
                            className="sub-menu-link">
                            <img src={invite} alt="" />
                            <p>Invite Friends</p>
                            {/* <span>></span> */}
                        </a>

                        <a
                            className="sub-menu-link"><Link to=""></Link>
                            <img src={contact} alt="" />
                            <p>Contact Us</p>
                            {/* <span>></span> */}
                        </a>

                        <a className="sub-menu-link"  ><Link to=''></Link>
                            <img src={logout} alt="" />
                            <p>Logout</p>
                            {/* <span>></span> */}
                        </a>

                    </div>
                </div>
                }
    </>
  )
}
