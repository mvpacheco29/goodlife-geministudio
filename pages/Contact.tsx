
import React from 'react';
import LeadForm from '../components/LeadForm';
import Icon from '../components/Icon';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-secondary sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos prontos para ajudar. Escolha a melhor forma de falar conosco.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:order-2">
            <LeadForm />
          </div>
          
          <div className="lg:order-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-brand-accent rounded-md p-3">
                  <Icon name="phone" className="h-6 w-6 text-white"/>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-secondary">Telefone & WhatsApp</h3>
                  <a href="tel:+5511999999999" className="text-gray-600 hover:text-brand-accent">+55 (11) 99999-9999</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-brand-accent rounded-md p-3">
                  <Icon name="email" className="h-6 w-6 text-white"/>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-secondary">E-mail</h3>
                  <a href="mailto:contato@segurosgoodlife.com.br" className="text-gray-600 hover:text-brand-accent">contato@segurosgoodlife.com.br</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-brand-accent rounded-md p-3">
                  <Icon name="instagram" className="h-6 w-6 text-white"/>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-secondary">Redes Sociais</h3>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-accent">@segurosgoodlife</a>
                </div>
              </div>
            </div>
            
             <div className="bg-white p-6 rounded-lg shadow-md">
               <h3 className="text-lg font-medium text-brand-secondary mb-2">Horário de Atendimento</h3>
               <p className="text-gray-600">Segunda a Sexta: 9:00 - 18:00</p>
               <p className="text-gray-600">Sábado: 9:00 - 13:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;