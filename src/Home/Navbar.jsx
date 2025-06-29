import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y === 0 || y >= 400) {
        setShowNavbar(true); // Show on top or after 400px
      } else {
        setShowNavbar(false); // Hide between 1px and 399px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={` ${styles.nav_container} ${showNavbar ? styles.visible : styles.hidden}`}>
      <nav className="navbar navbar-expand-lg py-3  shadow">
      <div className="container px-lg-0">
        
          <a className={`${styles.navbar_brand}`} href="#">OnePage</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Team">Team</a>
              </li>
              <li className={`${styles.dropdown} nav-item dropdown `}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className={`${styles.dropdown_content } dropdown-menu`}>
                  <li><a className="dropdown-item" href="#question">question</a></li>
                  <li><a className="dropdown-item" href="#pricing">pricing</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
            </ul>
            <a className={` ${styles.button}`} href="#appointment">Get Started</a>
          </div>
    </div>
      </nav>
    </div>
  );
};

export default Navbar;
