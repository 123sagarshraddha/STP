import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1></h1>
          <h1 className="footer__logo">Something</h1>

          <h2>Send anything, <br/>anywhere,<br/> anytime</h2>


          </div>

            <ul className="footer__nav">
              <li className="nav__item">
                <h2 className="nav__title">Company</h2>

                <ul className="nav__ul">
                  <li>
                    <a href="/">About Us</a>
                  </li>

                  <li>
                    <a href="/">Offer</a>
                  </li>

                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                </ul>
              </li>

              <li className="nav__item nav__item--extra">
                <h2 className="nav__title">Services</h2>

                <ul className="nav__ul nav__ul--extra">
                  <li>
                    <a href="/">City Tempo</a>
                  </li>

                  <li>
                    <a href="/">For Enterprise</a>
                  </li>

                  <li>
                    <a href="/">Packers & Movers</a>
                  </li>

                  <li>
                    <a href="/">Courier</a>
                  </li>
                </ul>
              </li>
              <li className="nav__item nav__item--extra">
                <h2 className="nav__title">Support</h2>

                <ul className="nav__ul nav__ul--extra">
                  <li>
                    <a href="/">Contact Us</a>
                  </li>

                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>

                  <li>
                    <a href="/">Terms of Service</a>
                  </li>

                  <li>
                    <a href="/">Driver Partner Terms and Conditions</a>
                  </li>
                </ul>
              </li>

             


            </ul>
            <div className="footer1">
              <div className="f2">
                <div >
                  <a href="https://facebook.com/dolly"><img className="ln-1" src="https://dolly.com/images/icon-social-facebook.svg"/></a>
                  <a href="https://twitter.com/getdolly"><img className="ln-1" src="https://dolly.com/images/icon-social-twitter.svg"/></a>
                  <a href="https://www.instagram.com/getdolly/"><img className="ln-1" src="https://dolly.com/images/icon-social-instagram.svg"/></a>
                  <a href="https://www.pinterest.com/dollytruckandmuscle/"><img className="ln-1" src="https://dolly.com/images/icon-social-pinterest.svg"/></a>
                  <a href="https://www.linkedin.com/company/dolly-inc-/"><img className="ln-1" src="https://dolly.com/images/icon-social-linkedin.svg"/></a>
                </div>
                <div className="f2">
                  <div className="f3">
                    <a href="https://apps.apple.com/us/app/dolly-moving-delivery-help/id881999615"><img width="100px" height="50px" src="https://dolly.com/images/apple-badge.svg"/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.dolly.dolly"><img width="100px" height="50px" src="https://dolly.com/images/android-badge.svg"/></a>

                  </div>
                </div>
              </div>
            </div>
            <div className="footer2">
              <div className="f4">
                <p><small>©2023 Porter</small></p>
                <a href="/terms"><small>Terms</small></a>
                <a href="/privacy"><small>Privacy</small></a>

              </div>
            </div>
          </footer>
        </>
        )
};
        export default Footer;