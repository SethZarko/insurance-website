import { CallToActionBlog } from '../components/CallToActionBlog.jsx'
import { motion } from "framer-motion"

export const Services = () => {

    return (
        <section id='services'>
            <h1>Services</h1>
            <div className="services-flex-box">
                <motion.div 
                    className="service-flex-item"
                    whileHover={{ 
                        backgroundColor: 'rgb(10, 150, 220)', 
                        transition: { duration: 0.5 },
                        scale: 1.1 
                    }}
                >
                    <i className="fa-solid fa-house"></i>
                    <h2>Home Insurance</h2>
                    <p>I will help you find insurance for your primary residences, rental properties, vacation homes, condominiums, etc. Contact me to discuss your unique situation and I&apos;ll find the right coverage for you.</p>
                </motion.div>

                <motion.div 
                    className="service-flex-item"
                    whileHover={{ 
                        backgroundColor: 'rgb(10, 150, 220)', 
                        transition: { duration: 0.5 },
                        scale: 1.1 
                    }}
                >
                    <i className="fa-solid fa-car"></i>
                    <h2>Auto Insurance</h2>
                    <p>Automobile insurance is necessary in the Province of Ontario. Contact me to discuss the details of your vehicle and drirving history. I&apos;ll work with you to quickly find the best possible coverage for your unique situation.</p>
                </motion.div>

                <motion.div 
                    className="service-flex-item"
                    whileHover={{ 
                        backgroundColor: 'rgb(10, 150, 220)', 
                        transition: { duration: 0.5 },
                        scale: 1.1 
                    }}
                >
                    <i className="fa-solid fa-building"></i>
                    <h2>Renters Insurance</h2>
                    <p>Renters insurance is incredibly valuble. In some cases, it is stipulated in your lease agreement that you are required to carry renters insurance. Contact me to discuss the benefits of renters insurance and we&apos;ll work together to find the right coverage for your circumstances.</p>
                </motion.div> 

            </div>
            <CallToActionBlog/>
        </section>
    )
}