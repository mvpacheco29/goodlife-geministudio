
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-brand-text">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wider">Goodlife</h3>
            <p className="text-sm text-gray-300">Sua proteção é a nossa prioridade. Conte com a gente para cuidar do que mais importa.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Seguros</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/seguro-vida" className="text-base text-gray-300 hover:text-white">Seguro de Vida</Link></li>
              <li><Link to="/seguro-viagem" className="text-base text-gray-300 hover:text-white">Seguro Viagem</Link></li>
              <li><Link to="/plano-odontologico" className="text-base text-gray-300 hover:text-white">Plano Odontológico</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Institucional</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/sobre" className="text-base text-gray-300 hover:text-white">Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-base text-gray-300 hover:text-white">Contato</Link></li>
              <li><Link to="/ajuda" className="text-base text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <Icon name="phone" className="w-5 h-5 mr-3 text-brand-accent" />
                <a href="tel:+5511999999999" className="text-base text-gray-300 hover:text-white">+55 (11) 99999-9999</a>
              </li>
              <li className="flex items-center">
                <Icon name="email" className="w-5 h-5 mr-3 text-brand-accent" />
                <a href="mailto:contato@segurosgoodlife.com.br" className="text-base text-gray-300 hover:text-white">contato@segurosgoodlife.com.br</a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-6">
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Icon name="instagram" className="h-6 w-6" />
               </a>
                <a href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seguros." target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <span className="sr-only">WhatsApp</span>
                  <Icon name="whatsapp" className="h-6 w-6" />
               </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-secondary pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Seguros Goodlife. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;