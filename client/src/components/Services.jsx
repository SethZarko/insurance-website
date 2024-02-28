import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useAppContext } from '../context/AppProvider.jsx'

import House from '../assets/house.jpg';
import Auto from '../assets/auto.jpg';
import Rent from '../assets/rent.jpg'

export const Services = () => {
  const services = [
    {
      image: House,
      title: 'Home Insurance',
      description:
        'Damage coverage for your home, personal contents, and liability coverage for your actions.',
      link: '/guest/services'
    },
    {
      image: Auto,
      title: 'Auto Insurance',
      description:
        'Damage coverage for your vehicles, and liability coverage for property and bodiliy injury.',
      link: '/guest/services'
    },
    {
      image: Rent,
      title: 'Renters Insurance',
      description:
        'Damage coverage for your contents, and liability coverage for your actions.',
      link: '/guest/services'
    },
  ];

  const { scrollToTop } = useAppContext()

  return (
    <section id="services">
      <h1>My Services</h1>
      <p>Personal Lines Insurance</p>

      <div className="service-card-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <LazyLoadImage
              className="services-img"
              src={service.image}
              alt={service.title}
            />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <Link onClick={scrollToTop} to={service.link}>More Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// NOTE: If you're considered high-risk for insurance, then you would know how impossible it can be to find the right coverage. In doing business with me, I don't just set you up with insurance, I also consult with you to help make a plan that will get you back on the right track. Give me a call and I will explain the process, making insurance a painless experience!

// NOTE: Understanding non-payment and cancellations of insurance

// Below are some reasons why your insurance comapny might cancel your insurance: 

// 1. 

// Insurance is one thing you don't want to make a mistake on. Be prepared, be proactive, be preventative. See the list below of common reasons why your insurance company might cancel your insurance:

// 1.