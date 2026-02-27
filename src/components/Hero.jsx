import img from '../assets/MYbg.png';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" style={{ 
      padding: '150px 20px 100px', 
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      minHeight: '100vh'
    }}>
      <div className="slide-up" style={{ flex: 1, textAlign: 'left' }}>
        <h1>Hi, I am Samuel</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          Welcome to my portfolio. I create amazing web experiences.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="https://github.com/sammyowadokun" style={{ color: '#000' }}><FaGithub size={27} /></a>
          <a href="https://www.linkedin.com/in/sammyowadokun" style={{ color: '#000' }}><FaLinkedin size={27} /></a>
          <a href="https://x.com/Sammyowad" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.53 3H21.5L14.81 10.13L22.62 21H16.44L11.67 14.67L6.39 21H2.41L9.47 13.37L2 3H8.35L12.66 8.78L17.53 3ZM16.47 19.13H18.29L8.18 4.74H6.23L16.47 19.13Z" fill="#000"/>
            </svg>
          </a>
          <a href="mailto:owadokunsamue350@gmail.com" aria-label="Email">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z" fill="#000"/>
            </svg>
          </a>
        </div>
      </div>
      <img 
        src= {img} 
        alt="Hero Image" 
        style={{ 
          flex: 1, 
          maxWidth: '347px' ,
          height: 'auto'
        }} 
      />
      <div className="slide-up delay-1" style={{ flex: 1, textAlign: 'right' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#00d4ff', marginBottom: '10px' }}>Front-End Engineer & Developer</h2>
        <p style={{ fontSize: '0.93rem', marginBottom: '10px' }}>
          Samuel Owadokun is Passionate about building innovative solutions at the intersection of technology and creativity.
          Specializing in Front-End development With a strong foundation in JavaScript, React, and cloud technologies, I create seamless user experiences and scalable applications. Let's connect.
        </p>
        <Link to="/about" className="btn">Learn More...</Link>
      </div>
    </section>
  );
};

export default Hero;