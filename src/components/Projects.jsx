
import portfolioImg from '../assets/portfolio.png';
import recipeImg from '../assets/recipe.png';
import demoImg from '../assets/demo.png';
import paymentImg from '../assets/payment.png';
import TJImg from '../assets/TJ.png';

const Projects = () => {
  const projects = [
    {
      title: 'React Portfolio',
      description: 'A personal portfolio website built with React and Vite.',
      link: 'https://owadokunsamuel.vercel.app/',
      image: portfolioImg
    },
    {
      title: 'Recipe AI App',
      description: 'An AI-powered recipe generator using React.',
      link: 'https://recipeai-bay.vercel.app/',
      image: recipeImg
    },
    {
      title: 'Demo One App',
      description: 'A demo application showcasing a Pharmacy store.',
      link: 'https://demo-one-two.vercel.app/',
      image: demoImg
    },
    {
      title: 'Card Payment',
      description: 'A card detailed payment form.',
      link: 'https://card-payment-azure.vercel.app/',
      image: paymentImg
    },
    {
      title: 'Travel Journal',
      description: 'An application using React components and props to render travel data efficiently.',
      link: 'https://travel-journal-wine-zeta.vercel.app/',
      image: TJImg
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f9f9f9',
              padding: '32px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '320px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              color: '#222',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.85)',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              marginBottom: '0',
            }}>
              <h3 className='title'>{project.title}</h3>
              <p className='description'>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;