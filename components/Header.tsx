
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { InsuranceType } from '../types';
import Icon from './Icon';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive ? 'bg-brand-secondary text-white' : 'text-brand-text hover:bg-brand-secondary/80 hover:text-white'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive ? 'bg-brand-secondary text-white' : 'text-gray-800 hover:bg-gray-200'
    }`;
  
  const insuranceLinks = [
    { to: "/seguro-vida", label: InsuranceType.Life },
    { to: "/seguro-viagem", label: InsuranceType.Travel },
    { to: "/plano-odontologico", label: InsuranceType.Dental },
  ];

  return (
    <header className="bg-brand-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeAllMenus} aria-label="Página inicial da Goodlife Seguros">
              <img className="h-10 w-auto" src="/logo.svg" alt="Goodlife Seguros" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              {insuranceLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/sobre" className={navLinkClass}>Sobre Nós</NavLink>
              <NavLink to="/ajuda" className={navLinkClass}>Ajuda</NavLink>
              <NavLink to="/contato" className={navLinkClass}>Contato</NavLink>
            </nav>
          </div>

          <div className="hidden md:block">
            <a href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seguros."
               target="_blank" rel="noopener noreferrer"
               className="ml-4 py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-whatsapp-green hover:bg-whatsapp-green-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white transition-transform transform hover:scale-105">
              Fale no WhatsApp
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-brand-secondary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-brand-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white"
            >
              <span className="sr-only">Abrir menu</span>
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={closeAllMenus} className={mobileNavLinkClass}>Home</NavLink>
            {insuranceLinks.map(link => (
              <NavLink key={link.to} to={link.to} onClick={closeAllMenus} className={mobileNavLinkClass}>{link.label}</NavLink>
            ))}
            <NavLink to="/sobre" onClick={closeAllMenus} className={mobileNavLinkClass}>Sobre Nós</NavLink>
            <NavLink to="/ajuda" onClick={closeAllMenus} className={mobileNavLinkClass}>Ajuda</NavLink>
            <NavLink to="/contato" onClick={closeAllMenus} className={mobileNavLinkClass}>Contato</NavLink>
            <a href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seguros."
               target="_blank" rel="noopener noreferrer"
               className="block w-full text-center mt-4 py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-whatsapp-green hover:bg-whatsapp-green-hover transition-transform transform hover:scale-105">
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;