
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Icon from '../components/Icon';
import { InsuranceType } from '../types';
import { VirtualAssistant } from '../components/VirtualAssistant';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-secondary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-50 -skew-y-3"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Proteção descomplicada para <span className="text-brand-accent">você e sua família</span>.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-text">
            Encontre o seguro ideal com a agilidade que você precisa e a confiança que você merece. Vida, Viagem ou Sorriso: estamos aqui para cuidar do seu futuro.
          </p>
          <div className="mt-10">
            <Link 
              to="/contato"
              className="inline-block bg-brand-accent text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-accent-hover transition-transform transform hover:scale-105 shadow-lg"
            >
              Iniciar Cotação
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-brand-secondary sm:text-4xl">Sua tranquilidade é o nosso compromisso</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Na Goodlife, acreditamos que proteger o que você mais ama não precisa ser complicado. Nascemos para reinventar a experiência de contratar seguros, com tecnologia, transparência e um atendimento que realmente se importa.
            </p>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card 
              icon="life"
              title={InsuranceType.Life}
              description="Garanta a tranquilidade financeira de quem você ama, mesmo na sua ausência. Proteção e segurança para o futuro da sua família."
              linkTo="/seguro-vida"
            />
            <Card 
              icon="travel"
              title={InsuranceType.Travel}
              description="Viaje pelo mundo com a certeza de estar protegido contra imprevistos. Cobertura para despesas médicas, extravio de bagagem e mais."
              linkTo="/seguro-viagem"
            />
            <Card 
              icon="dental"
              title={InsuranceType.Dental}
              description="Cuide do seu sorriso e da sua saúde bucal com uma ampla rede de dentistas e clínicas. Prevenção e tratamentos com a qualidade que você merece."
              linkTo="/plano-odontologico"
            />
          </div>
        </div>
      </section>
      
      <VirtualAssistant />

      {/* Why Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base text-brand-accent font-semibold tracking-wide uppercase">Por que escolher a Goodlife?</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brand-secondary sm:text-4xl">
                    Um novo jeito de pensar em seguros
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Combinamos tecnologia e atendimento humano para oferecer a melhor experiência.
                </p>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                           <Icon name="check" className="h-6 w-6"/>
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-brand-secondary">Simples e Rápido</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Cotações online em poucos minutos, sem burocracia e com total transparência.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                           <Icon name="user" className="h-6 w-6"/>
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-brand-secondary">Atendimento Humano</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Nossos especialistas estão sempre prontos para te ajudar a escolher a melhor opção.
                        </p>
                    </div>
                </div>
                 <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-accent text-white">
                           <Icon name="quote" className="h-6 w-6"/>
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-brand-secondary">Consultoria de IA</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Use nosso assistente virtual para receber uma análise inicial do seu perfil e necessidades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;