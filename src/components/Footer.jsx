import React from 'react';

const Footer = () => (
  <footer style={{
    background: '#fff',
    color: '#222',
    textAlign: 'center',
    padding: '30px 10px',
    marginTop: '40px',
    fontSize: '0.8rem',
    borderTop: '1px solid #00d4ff',
  }}>
    <div style={{ marginBottom: '10px' }}>
      &copy; {new Date().getFullYear()} Samuel Owadokun- All rights reserved.
    </div>
    <div>
      Built with React | Connect: <a href="https://github.com/sammyowadokun" style={{ color: '#00d4ff', textDecoration: 'none' }}>GitHub</a> &bull; 
                                  <a href="https://www.linkedin.com/in/sammyowadokun" style={{ color: '#00d4ff', textDecoration: 'none' }}>LinkedIn</a>
    </div>
  </footer>
);

export default Footer;
