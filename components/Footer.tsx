"use client"

import React from 'react';

// Define the styles type
type Styles = {
  [key: string]: React.CSSProperties;
};

const Footer: React.FC = () => {
  const styles: Styles = {
    footer: {
      color: '#fff',
      padding: '20px 10px',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '10px',
    },
    section: {
      flex: '1 1 200px',
      margin: '10px',
    },
    logo: {
      width: '150px',
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      lineHeight: '1.6',
    },
    heading: {
      fontSize: '16px',
      marginBottom: '10px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
    text: {
      fontSize: '14px',
      lineHeight: '1.8',
    },
    socialIcons: {
      display: 'flex',
      gap: '10px',
    },
    icon: {
      fontSize: '20px',
      color: '#fff',
      textDecoration: 'none',
    },
    bottom: {
      borderTop: '1px solid #555',
      padding: '10px 0',
      textAlign: 'center',
    },
    bottomText: {
      fontSize: '12px',
    },
  };

  return (
    <footer style={styles.footer} className='bg-gray-700'>
      <div style={styles.container}>
        {/* Logo and Description */}
        <div style={styles.section}>
          <img
            src="/assets/cc-logo-header.svg" // Replace with the actual logo URL
            alt="Club Champion Logo"
            style={styles.logo}
          />
          <p style={styles.description}>
            Club Champion offers the ultimate golf club fitting experience. Elevate your game with custom-fit equipment tailored just for you.
          </p>
        </div>

        {/* Links Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/about-us" style={styles.link}>About Us</a></li>
            <li><a href="/locations" style={styles.link}>Locations</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
            <li><a href="/contact-us" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.text}>Phone: <a href="tel:888-123-4567" style={styles.link}>992-823-845</a></p>
          <p style={styles.text}>Email: <a href="mailto:info@clubchampion.com" style={styles.link}>info@clubchampion.com</a></p>
          <p style={styles.text}>Address: 123 Golf Drive, Malawi, IL</p>
        </div>

        {/* Social Media Icons */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com/clubchampion" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/clubchampion" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/clubchampion" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/clubchampion" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} Club Champion. All rights reserved. | <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> | <a href="/terms-of-service" style={styles.link}>Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
