import { Link } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useAppContext } from '../context/AppProvider.jsx'

import HeroImg from '../assets/hero.jpg'


export const Hero = () => {

    const { scrollToTop } = useAppContext()

    return (
        <section id='hero'>
            <div className="overlay"></div>
            <LazyLoadImage className="hero-img" src={HeroImg}/>

            <div className="hero-content">
                <h1>Protecting Your Assets</h1>
                <p>Expert Brokers Working to find the best possible coverage for your unique risk situation.</p>

                <div className="hero-btn-container">
                    <Link className='services-btn' 
                    to='/guest/services'
                    onClick={scrollToTop}
                    >OUR SERVICES</Link>
                    <Link className='quote-btn' to='/guest/quote/auto-quote' onClick={scrollToTop}>GET A QUOTE</Link>
                </div>
            </div>
        </section>
    )
}