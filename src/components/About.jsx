import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ padding: '120px 20px', background: '#f8f8f8', 
                                 maxWidth: '900px', margin: '0 auto', 
                                 borderRadius: '12px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#00d4ff' }}>About Me</h2>
      <div style={{ textAlign: 'justify', display: 'inline-block', maxWidth: '800px' }}>
        <p style={{ marginBottom: '18px' }}>
          Hi, my name is Samuel, i am a talented front-End Engineer with hands-on experience building responsive and user-friendly web applications using React, JavaScript, HTML, and CSS. I’ve worked on real-world projects where I implemented component-based architecture, routing, and mobile-responsive layouts. I enjoy translating designs into functional interfaces, debugging layout and styling issues, and improving user experience through modern front-end practices.
        </p>
        <p style={{ marginBottom: '18px' }}>
          Also, I am a Cloud Engineer focused on AWS, currently as a Solutions Architect (Associate). I’ve built hands-on projects with ECS Fargate, S3 + CloudFront + ACM, Route 53, Lambda triggers, and RDS connectivity. I have also worked on projects on Serverless, Containers, Postgres DB and Networking.
        </p>
        <p style={{ marginBottom: '18px' }}>
          In addition to my professional experience, I have experience in Digital Marketing, Project Management and Teaching, combining clear communication with problem-solving and teamwork. I’m in for a role where I can design secure, reliable, and cost-efficient solutions while learning from experienced teams.
        </p>
        <p>
          I hold a B.Engr. in Computer Engineering from Ekiti State University and trainings in Frontend Engineering, Cloud Engineering and Cloud Management, Digital Marketing and Project Management.
        </p>
      </div>
    </section>
  );
};

export default About;