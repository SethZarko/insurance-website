import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../context/AppProvider';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if(window.innerWidth < 949) {
      setIsOpen(!isOpen);
    }
  };

  const { scrollToTop } = useAppContext()

  return (
    <nav>
      <div className="social-links">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>

      <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`desktop-nav ${isOpen ? 'open-menu' : ''}`}>
        <li>
          <NavLink 
            activeclassname='active'
            to="/guest/home" 
            onClick={
              () => {
                toggleMenu(),
                scrollToTop()
              }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeclassname='active'
            to="/guest/services" 
            onClick={
              () => {
                toggleMenu(),
                scrollToTop()
              }
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            activeclassname='active'
            to="/guest/blog" 
            onClick={
              () => {
                toggleMenu(),
                scrollToTop()
              }
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink 
            activeclassname='active'
            className="quote-link" 
            to='/guest/quote/auto-quote'
            onClick={
              () => {
                toggleMenu(),
                scrollToTop()
              }
            }
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
