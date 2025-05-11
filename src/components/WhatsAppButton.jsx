import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = React.useState(true);

  const handleBubbleClick = () => {
    setShowBubble(false);
  };

  return (
    <div className="whatsapp-container">
      {showBubble && (
        <div className="whatsapp-bubble" id="whatsapp-bubble" onClick={handleBubbleClick}>
          Fale conosco!
        </div>
      )}
      <a href="https://wa.me/5548984868277" className="whatsapp-float pulse" target="_blank" title="Chat with us on WhatsApp" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" width="50" height="50" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
