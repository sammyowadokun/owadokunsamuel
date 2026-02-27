import React from 'react';

const Skills = () => (
  <section id="skills" style={{ padding: '120px 10px', background: '#f8f8f8', maxWidth: '900px', margin: '0 auto', borderRadius: '12px' }}>
    <h2 style={{ marginBottom: '20px', color: '#00d4ff' }}>Technical Skills</h2>
    <ul style={{ marginBottom: '30px', lineHeight: '2', listStyle: 'none', paddingLeft: 0 }}>
      <li><strong>Languages & Frameworks:</strong> React.js, Typescript, HTML5, CSS3, Tailwind CSS, Next.js (Beginner)</li>
      <li><strong>Cloud & DevOps:</strong> AWS (S3, EC2, ECS, Lambda, CloudFront, Route 53)</li>
      <li><strong>Tools:</strong> Git, GitHub, VS Code, Canva, Figma</li>
      <li><strong>Database:</strong> PostgreSQL</li>
      <li><strong>Other:</strong> Microsoft Word, Excel, PowerPoint</li>
    </ul>
    <h2 style={{ marginBottom: '20px', color: '#00d4ff' }}>Soft Skills</h2>
    <ul style={{ lineHeight: '2', listStyle: 'none', paddingLeft: 0 }}>
      <li>Project Management</li>
      <li>Leadership</li>
      <li>Teamwork</li>
      <li>Communication</li>
      <li>Digital Marketing</li>
    </ul>
  </section>
);

export default Skills;
