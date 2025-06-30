
import React from 'react';
import LeadForm from '../components/LeadForm';
import { InsuranceType } from '../types';
import Icon from '../components/Icon';

const InsuranceDental: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative py-16 bg-brand-secondary overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-50"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {InsuranceType.Dental}
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-text">
              Cuide do seu sorriso com os melhores profissionais e uma ampla rede de cobertura.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                    <h3 className="text-2xl font-extrabold text-brand-secondary tracking-tight sm:text-3xl">
                        Um sorriso saudável abre muitas portas.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        A saúde começa pela boca. Com um plano odontológico, você tem acesso a tratamentos preventivos e corretivos que não apenas garantem um sorriso mais bonito, mas também contribuem para o seu bem-estar geral, evitando complicações futuras.
                    </p>
                    <div className="mt-8 space-y-5">
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Consultas e Prevenção:</strong> Incluindo limpeza, aplicação de flúor e exames.</p>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Tratamentos:</strong> Cobertura para restaurações, tratamento de canal e gengiva.</p>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Urgência e Emergência:</strong> Atendimento 24h para aliviar dores e resolver imprevistos.</p>
                      </div>
                       <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Ortodontia e Próteses:</strong> Planos completos com cobertura para aparelhos e próteses.</p>
                      </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0" aria-hidden="true">
                    <img className="mx-auto rounded-lg shadow-xl" src="https://picsum.photos/600/400?random=3" alt="Pessoa sorrindo com confiança" />
                </div>
            </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm initialInsuranceType={InsuranceType.Dental} />
        </div>
      </div>
    </div>
  );
};

export default InsuranceDental;
