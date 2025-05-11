import React from 'react';

const Contact = () => (
  <section id="contact" className="contact">
    <h2 className="section-title">Contato</h2>
    <form action="#">
      <input type="text" placeholder="Digite seu nome" required />
      <input type="email" placeholder="Digite seu email" required />
      <input type="tel" placeholder="Digite seu Telefone" required />
      <textarea rows="5" placeholder="Digite sua mensagem" required></textarea>
      <button type="submit" className="btn-primary">Enviar mensagem</button>
    </form>
  </section>
);

export default Contact;