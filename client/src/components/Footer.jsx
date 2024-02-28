import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom' 
import { useAppContext } from '../context/AppProvider.jsx'

import Hub from '../assets/hub.png'

export const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()

    const { scrollToTop } = useAppContext()

    return (
        <footer>
            <section id='upper-footer'>
                <h4>Seth Zarkovich</h4>
                <div className="broker-container">
                    <p>Insurance Broker - <br/>
                    Hub International Ontario Ltd.</p>
                    <LazyLoadImage className='hub-logo' src={Hub}/>
                </div>
       
                <hr />

                <div className="contact-footer-container">
                    <div className="item-box">
                        <i className="fa-solid fa-phone"></i>
                        <p>519-333-5822</p>
                    </div>
                    <div className="item-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>1-696 Wharncliffe Road, South, London, Ontario</p>
                    </div>
                    <div className="item-box">
                        <i className="fa-regular fa-envelope"></i>
                        <p>seth.zarkovich@hubinternational.com</p>
                    </div>
                    <div className="item-box">
                        <i className="fa-solid fa-user"></i>
                        <p>Personal Lines Account Manager</p>
                    </div>
                </div>
            </section>

            <section id="lower-footer">
                <small><span>{year}&copy;</span> Seth Zarkovich.  <span>ALL RIGHTS RESERVED.</span></small>

                <div className="social-links">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <Link to='/guest/login' onClick={scrollToTop}>Login</Link>
            </section>
        </footer>
    )
}