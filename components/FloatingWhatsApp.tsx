
import React from 'react';
import Icon from './Icon';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seguros."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-whatsapp-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-whatsapp-green-hover transition-all transform hover:scale-110 z-40"
      aria-label="Fale conosco no WhatsApp"
    >
      <Icon name="whatsapp" className="w-8 h-8"/>
    </a>
  );
};

export default FloatingWhatsApp;