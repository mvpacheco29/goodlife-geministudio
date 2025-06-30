
import React from 'react';
import LeadForm from '../components/LeadForm';
import { InsuranceType } from '../types';
import Icon from '../components/Icon';

const InsuranceLife: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative py-16 bg-brand-secondary overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-50"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {InsuranceType.Life}
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-text">
              Garanta o futuro e a tranquilidade de quem você ama, não importa o que aconteça.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div>
                    <h3 className="text-2xl font-extrabold text-brand-secondary tracking-tight sm:text-3xl">
                        A proteção que sua família merece.
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                        O seguro de vida é um ato de amor e responsabilidade. Ele assegura que, na sua ausência, seus beneficiários terão o suporte financeiro necessário para manter o padrão de vida, custear a educação dos filhos, quitar dívidas e se reorganizar sem preocupações financeiras imediatas.
                    </p>
                    <div className="mt-8 space-y-5">
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Cobertura por Morte:</strong> Pagamento do capital segurado aos beneficiários.</p>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Invalidez Permanente:</strong> Indenização em caso de acidente que cause invalidez.</p>
                      </div>
                      <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Doenças Graves:</strong> Receba um valor em vida para auxiliar no tratamento.</p>
                      </div>
                       <div className="flex items-start">
                          <div className="flex-shrink-0">
                              <Icon name="check" className="h-6 w-6 text-brand-accent" />
                          </div>
                          <p className="ml-3 text-gray-700"><strong>Assistência Funeral:</strong> Suporte para a família nos momentos mais difíceis.</p>
                      </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0" aria-hidden="true">
                    <img className="mx-auto rounded-lg shadow-xl" src="https://picsum.photos/600/400?random=1" alt="Família feliz e protegida" />
                </div>
            </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm initialInsuranceType={InsuranceType.Life} />
        </div>
      </div>

    </div>
  );
};

export default InsuranceLife;
