import React from 'react';

const Footer = () => (
  <footer>
    <section style={{ background: '#f8f8f8', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        
        <div style={{ flex: '1 1 300px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>Nosso Endereço</h2>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
            <span style={{ fontSize: '18px', color: '#25D366', marginRight: '10px' }}>📍</span> Schmitt Safe Services<br />
            João Paulo Gaspar, 2702<br />
            Bairro Ipiranga, São José - SC<br />
            Brasil.<br />
            <span style={{ fontSize: '18px', color: '#25D366', marginRight: '10px' }}>📞</span> <strong>Telefone:</strong> (48) 98486-8277
          </p>
        </div>
        
        <div style={{ flex: '2 1 500px' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10444.435234715584!2d-48.65820278855163!3d-27.57057935921531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274b58b391d093%3A0x4e5deb67dd8c36fa!2sSCHMITT-%20Vigil%C3%A2ncia%20patrimonial%20e%20Seguran%C3%A7a!5e1!3m2!1spt-BR!2sbr!4v1745904847431!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="300" 
            style={{ border: '0', borderRadius: '8px' }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="https://www.instagram.com/schmittvigilanciapatrimonial/" target="_blank" style={{ fontSize: '24px', color: '#E4405F', textDecoration: 'none' }}>
          <i className="fab fa-instagram" style={{ fontSize: '30px' }}></i> Siga-nos no Instagram
        </a>
      </div>
    </section>
    © 2025 RB Web Solutions - All rights reserved.
  </footer>
);

export default Footer;