import React from 'react';

const About = () => (
  <section id="about" className="about">
    <h2 className="section-title">Sobre nós</h2>
    <p>25 anos de experiência em serviços de segurança, protegendo o que é mais importante para você!</p>

    <div className="features">
      <div className="feature">
        <img src="https://img.icons8.com/color/96/consultation.png" alt="Emergency Support" />
        <p><strong>✅</strong> Atendimento Especializado</p>
      </div>
      <div className="feature">
        <img src="https://img.icons8.com/color/96/verified-account.png" alt="Certified Professionals" />
        <p><strong>✅</strong> Profissionais Certificados</p>
      </div>
      <div className="feature">
        <img src="https://img.icons8.com/color/96/home-page.png" alt="Residential & Commercial" />
        <p><strong>✅</strong> Residencial & Comercial</p>
      </div>
    </div>
  </section>
);

export default About;