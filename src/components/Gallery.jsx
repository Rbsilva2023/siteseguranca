import React, { useState } from 'react';

import image1 from '../assets/gallery/image1.png';
import image2 from '../assets/gallery/image2.png';
import image3 from '../assets/gallery/image3.png';
import image4 from '../assets/gallery/image4.png';
import image5 from '../assets/gallery/image5.png';
import image6 from '../assets/gallery/image6.png';
import image7 from '../assets/gallery/image7.png';
import image8 from '../assets/gallery/image8.png';
import image9 from '../assets/gallery/image9.png';
import image10 from '../assets/gallery/image10.png';
import image11 from '../assets/gallery/image11.png';
import image12 from '../assets/gallery/image12.png';
import image13 from '../assets/gallery/image13.png';
import image14 from '../assets/gallery/image14.png';
import image15 from '../assets/gallery/image15.png';
import image16 from '../assets/gallery/image16.png';
import image17 from '../assets/gallery/image17.png';
import image18 from '../assets/gallery/image18.png';
import image19 from '../assets/gallery/image19.png';
import image20 from '../assets/gallery/image20.png';

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const renderImages = () => {
    if (!showAll) {
      return (
        <div className="initial-photo-wrapper" onClick={() => setShowAll(true)}>
          <img
            src={images[0]}
            alt="Service 1"
            className="gallery-image"
            style={{ cursor: 'pointer' }}
          />
          <h3 className="show-more-text">
            Clique aqui para ver mais
          </h3>
        </div>
      );
    }
    return (
      <>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Service ${index + 1}`}
            onClick={() => openModal(index)}
            className="gallery-image"
          />
        ))}
        <button className="close-gallery-button" onClick={() => setShowAll(false)}>
          ✖ Fechar galeria
        </button>
      </>
    );
  };

  return (
    <section className="gallery">
      <h2 className="section-title">Nosso Trabalho</h2>

      <div className="gallery-grid">
        {renderImages()}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <button className="close-button" onClick={closeModal}>Sair da galeria ✖</button>
          <button className="prev-button" onClick={(e) => { e.stopPropagation(); prevImage(); }}>←</button>
          <img src={images[currentImageIndex]} alt="Full view" className="modal-image" onClick={(e) => e.stopPropagation()} style={{ cursor: 'pointer' }} />
          <button className="next-button" onClick={(e) => { e.stopPropagation(); nextImage(); }}>→</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
