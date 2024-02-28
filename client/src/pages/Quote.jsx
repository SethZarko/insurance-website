import {NavLink, Outlet} from 'react-router-dom'
import { useAppContext } from '../context/AppProvider';

export const Quote = () => {
    const {selectQuoteCategory, setSelectQuoteCategory} = useAppContext()

    return (
        <section id='quote-page'>
            <div className="quote-container">
                <h1>Get a Quote</h1>
                <h4>Enter Your Information Below</h4>
                <div className="quote-btn-container">
                    <NavLink className="home-quote-btn" to='/guest/quote/home-quote' activeclassname="active" onClick={() => {
                        setSelectQuoteCategory('Home')
                    }}>Home</NavLink>
                    <NavLink className="auto-quote-btn" to='/guest/quote/auto-quote' activeclassname="active" onClick={() => {
                        setSelectQuoteCategory('Auto')
                    }}>Auto</NavLink>
                    <NavLink className="renters-quote-btn" to='/guest/quote/renters-quote' activeclassname="active" onClick={() => {
                        setSelectQuoteCategory('Renters')
                    }}>Renters</NavLink>
                </div>
            </div>
            
            <div className="quote-details-container">
                <h3>Enter Quote Details <br /> <span style={{ fontFamily: 'Roboto'}}>{selectQuoteCategory === 'Home' ? 'Home Quote' : selectQuoteCategory === 'Auto' ? 'Auto Quote' : selectQuoteCategory === 'Renters' ? 'Renters Quote' : 'Auto Quote'}</span></h3>
                <div className="quote-details-sub-container">
                    <Outlet/>
                </div>
            </div>
        </section>
    )
}