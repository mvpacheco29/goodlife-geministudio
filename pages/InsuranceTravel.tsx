
import React from 'react';
import LeadForm from '../components/LeadForm';
import { InsuranceType } from '../types';
import Icon from '../components/Icon';

const InsuranceTravel: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative py-16 bg-brand-secondary overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-50"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {InsuranceType.Travel}
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-text">
              Viaje pelo mundo com a tranquilidade de saber que está protegido contra qualquer imprevisto.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                 <div className="mt-10 lg:mt-0" aria-hidden="true">
                    <img className="mx-auto rounded-lg shadow-xl" src="https://picsum.photos/600/400?random=2" alt="Pessoa viajando pelo mundo" />
                </div>
                <div className="lg:order-first">
                    <h3 className="text-2xl font-extrabold text-brand-secondary tracking-tight sm:text-3xl">
                        Sua única preocupação deve ser o próximo destino.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        Seja a lazer ou a trabalho, viajar exige planejamento. O seguro viagem é um item indispensável, garantindo assistência em situações de emergência e evitando que pequenos problemas se transformem em grandes prejuízos financeiros e dores de cabeça.
                    </p>
                    <div className="mt-8 space-y-5">
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Despesas Médicas e Hospitalares:</strong> Cobertura para acidentes e doenças.</p>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Extravio de Bagagem:</strong> Indenização em caso de perda, roubo ou dano à sua mala.</p>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Cancelamento de Viagem:</strong> Reembolso de despesas em caso de cancelamento.</p>
                      </div>
                       <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Assistência Jurídica:</strong> Suporte legal para diversas situações inesperadas.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm initialInsuranceType={InsuranceType.Travel} />
        </div>
      </div>
    </div>
  );
};

export default InsuranceTravel;
