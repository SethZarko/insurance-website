import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppProvider'      
import { axiosClientLogin, axiosClientGetAdmin } from '../axiosClient.js'       


// Components
import { Hero } from '../components/Hero.jsx'
import { Services } from '../components/Services.jsx'
import { About } from '../components/About.jsx'
import { Reviews } from '../components/Reviews.jsx'
import { Contact } from '../components/Contact.jsx'
import { HomeBlog } from '../components/HomeBlog.jsx'
import { CallToActionBlog } from '../components/CallToActionBlog.jsx'


                               
export const Home = () => {
    const { token, user, setUser, setToken } = useAppContext()

    useEffect(() => {
        if (token !== null) {
            axiosClientGetAdmin.get('/all')
            .then(({ data }) => {
                data.map((elem) => {
                    setUser(elem.email)
                })
            })
        }
    }, [token])

    const onLogout = (e) => {
        e.preventDefault()

        axiosClientLogin.post('/logout')
            .then(() => {
                setUser([])
                setToken(null)
            })
    }

    return (
        <section id='home'>
            {token ? (
                <>
                    <h3>Logged in as: {user} </h3>
                    <Link to='dash'>Admin Dashboard</Link>
                    <br />
                    <br />
                    <a href="#" onClick={onLogout} className='btn-logout'>Logout</a>
                </>
            ):(
                <>
                    <Hero/>
                    <Services/>
                    <About/>
                    <Reviews/>
                    <Contact/>
                    <HomeBlog/>
                    <CallToActionBlog/>
                </>
            )}
        </section>
    )
}