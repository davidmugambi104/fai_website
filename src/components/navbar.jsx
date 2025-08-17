import { useState } from 'react';
import './home.css';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  const handleClickOutside = (event) => {
    if (
      isMobileMenuOpen &&
      !event.target.closest('#mobile-menu') &&
      !event.target.closest('#mobile-menu-btn')
    ) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleDropdownToggle = (event) => {
    event.preventDefault();
    const menu = event.currentTarget.nextElementSibling;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="social-top-icons">
              <a href="#" className="social-top-icon" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-top-icon" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9  branco 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-top-icon" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-top-icon" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-top-icon" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            <a href="tel:0726740469" className="book-appointment-btn">
              Book Appointment
            </a>
          </div>
        </div>
      </div>

      <header onClick={handleClickOutside}>
        <div className="container flex items-center justify-between">
          <a href="#" className="logo">
            Charleson® Creative
          </a>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Case Studies</a></li>
              <li className="dropdown">
                <a href="#">Solutions</a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Media Strategy</a>
                    <ul className="sub-menu">
                      <li><a href="#">PR</a></li>
                      <li><a href="#">Media Buying</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Experiential Marketing</a></li>
                  <li><a href="#">Product Activation</a></li>
                  <li><a href="#">Events Management</a></li>
                  <li><a href="#">Print</a></li>
                  <li><a href="#">Billboards</a></li>
                  <li><a href="#">In-Store Branding</a></li>
                  <li><a href="#">Out-of-Store Branding</a></li>
                  <li>
                    <a href="#">Digital Marketing</a>
                    <ul className="sub-menu">
                      <li><a href="#">Social Media Marketing</a></li>
                      <li><a href="#">SEO</a></li>
                      <li><a href="#">Influencer Marketing</a></li>
                      <li><a href="#">Digital Marketing Training</a></li>
                      <li><a href="#">Website Design</a></li>
                      <li><a href="#">Brand Identity & Packaging</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">News & Insights</a></li>
              <li>
                <a href="tel:0726740469" className="nav-btn1">
                  <span className="call-icon">📞</span> Call
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="mobile-menu-btn"
            id="mobile-menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          id="mobile-menu"
        >
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Case Studies</a></li>
            <li className="dropdown">
              <a href="#" onClick={handleDropdownToggle}>
                Solutions
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Media Strategy</a>
                  <ul className="sub-menu">
                    <li><a href="#">PR</a></li>
                    <li><a href="#">Media Buying</a></li>
                  </ul>
                </li>
                <li><a href="#">Experiential Marketing</a></li>
                <li><a href="#">Product Activation</a></li>
                <li><a href="#">Events Management</a></li>
                <li><a href="#">Print</a></li>
                <li><a href="#">Billboards</a></li>
                <li><a href="#">In-Store Branding</a></li>
                <li><a href="#">Out-of-Store Branding</a></li>
                <li>
                  <a href="#">Digital Marketing</a>
                  <ul className="sub-menu">
                    <li><a href="#">Social Media Marketing</a></li>
                    <li><a href="#">SEO</a></li>
                    <li><a href="#">Influencer Marketing</a></li>
                    <li><a href="#">Digital Marketing Training</a></li>
                    <li><a href="#">Website Design</a></li>
                    <li><a href="#">Brand Identity & Packaging</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">News & Insights</a></li>
            <li>
              <a href="tel:0726740469" className="nav-btn1">
                <span className="call-icon">📞</span> Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;