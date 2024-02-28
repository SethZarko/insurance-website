import { Outlet, Navigate } from "react-router-dom"
import { useAppContext } from "../context/AppProvider"

// Components
import { LogoHeader } from '../components/LogoHeader.jsx'
import { Nav } from '../components/Nav.jsx'
import { Footer } from '../components/Footer.jsx'

                                          
export const GuestLayout = () => {
    const { token } = useAppContext()

    return (
        <main>
            <LogoHeader/>
            <Nav/>
            {!token ? <Outlet/> : <Navigate to='/' />}  
            <Footer/>
        </main>
    )
}