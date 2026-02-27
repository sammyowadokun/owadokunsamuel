import React from 'react';


const Contact = () => {
  return (
    <section id="contact" style={{ backgroundColor: '#f0f0f0', padding: '100px 0 20px 0', 
                                   textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Contact</h2>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
        I’d love to hear from you! Please fill out the form below or reach out via social links.
      </p>
      <form style={{ maxWidth: '400px', margin: '0 auto', 
                     background: '#fff', padding: '30px', 
                     borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', 
                                         fontWeight: 'bold' }}>Name</label>
          <input type="text" id="name" name="name" required 
                 style={{ width: '100%', padding: '8px', 
                 borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', 
                                          fontWeight: 'bold' }}>Email</label>
          <input type="email" id="email" name="email" 
                 required style={{ width: '100%', padding: '8px', 
                                   borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', 
                                            fontWeight: 'bold' }}>Message</label>
          <textarea id="message" name="message" rows="4" 
                    required style={{ width: '100%', padding: '8px', 
                    borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
        </div>
        <button type="submit" style={{ background: '#007bff', color: '#fff', 
                                       padding: '10px 24px', border: 'none', 
                                      borderRadius: '10px', fontWeight: 'bold', 
                                      cursor: 'pointer' }}>Send Message
        </button>
      </form>
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ marginBottom: '8px' }}>Business Information</h3>
        <p style={{ margin: 0 }}>Owadokun S O. | Front-end Engineer & Developer</p>
        <p style={{ margin: 0 }}>Lagos, Nigeria</p>
        <p style={{ margin: 0 }}>Phone: (+234) 8146012788</p>
      </div>
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <a href="https://github.com/sammyowadokun" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.58 2 12.14c0 4.47 2.87 8.26 6.84 9.61.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04A9.4 9.4 0 0 1 12 7.07c.85.004 1.71.11 2.51.32 1.91-1.31 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.03.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.14C22 6.58 17.52 2 12 2z" fill="#181717"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/sammyowadokun" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-2.5v-10h2.5v10zm-1.25-11.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13 11.25h-2.5v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-2.5v-10h2.4v1.36h.03c.33-.63 1.14-1.29 2.35-1.29 2.51 0 2.98 1.65 2.98 3.8v6.13z" fill="#0077B5"/>
          </svg>
        </a>
        <a href="https://x.com/Sammyowad" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.53 3H21.5L14.81 10.13L22.62 21H16.44L11.67 14.67L6.39 21H2.41L9.47 13.37L2 3H8.35L12.66 8.78L17.53 3ZM16.47 19.13H18.29L8.18 4.74H6.23L16.47 19.13Z" fill="#000"/>
            </svg>
          </a>
        <a href="mailto:owadokunsamue350@gmail.com" aria-label="Email">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z" fill="#EA4335"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;