import React from 'react';
import servicesData from "../assets/data/ServicesData"; 

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Nossos Serviços</h2> 
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}