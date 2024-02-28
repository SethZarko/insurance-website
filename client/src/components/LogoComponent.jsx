import { LazyLoadImage } from "react-lazy-load-image-component"       

import Hub from '../assets/hub.png'

export const LogoComponent = () => {
    return (
        <section id='logo-comp'>
            <LazyLoadImage className='big-hub-logo' src={Hub}/>
        </section>
    )
}