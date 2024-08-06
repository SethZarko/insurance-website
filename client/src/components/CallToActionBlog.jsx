import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppProvider.jsx'


export const CallToActionBlog = () => {
    const { scrollToTop } = useAppContext()

    return (
        <section id='call-to-action-blog'>
            <div className="call-to-action-blog-container">
                <h4>Work with Seth!</h4> 
                <Link to='/guest/quote/auto-quote' onClick={scrollToTop}>Get a Quote <i className="fa-solid fa-angles-right"></i></Link>
            </div>
        </section>
    )
}