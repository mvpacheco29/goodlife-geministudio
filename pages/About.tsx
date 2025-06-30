
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-brand-accent tracking-wide uppercase">Sobre Nós</h2>
          <p className="mt-1 text-4xl font-extrabold text-brand-secondary sm:text-5xl sm:tracking-tight lg:text-6xl">
            Nossa Jornada é Proteger a Sua
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Nascemos do desejo de simplificar o mundo dos seguros, tornando a proteção acessível e compreensível para todos.
          </p>
        </div>
      </div>
      
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                        <pattern id="74b34009-0152-4dbf-a0ae-1716e1d916b6" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#74b34009-0152-4dbf-a0ae-1716e1d916b6)" />
                </svg>
            </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
                <h3>
                    <span className="block text-base text-center text-brand-accent font-semibold tracking-wide uppercase">Nossa História</span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-brand-secondary sm:text-4xl">Conectando pessoas à tranquilidade</span>
                </h3>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                    A Corretora Goodlife foi fundada em 2020 por um grupo de especialistas com vasta experiência no mercado de seguros, mas frustrados com a burocracia e a falta de transparência que dominavam o setor. A visão era clara: usar a tecnologia não para substituir o toque humano, mas para potencializá-lo, criando uma experiência fluida, educativa e, acima de tudo, confiável.
                </p>
                <p className="mt-6 text-xl text-gray-500 leading-8">
                    Começamos com uma pequena equipe e uma grande ambição. Hoje, atendemos clientes em todo o Brasil, sempre fiéis aos nossos princípios de clareza, empatia e inovação.
                </p>
            </div>
             <div className="mt-16 text-lg max-w-prose mx-auto prose prose-indigo prose-lg text-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-brand-secondary">Missão</h3>
                        <p className="mt-4">Democratizar o acesso a seguros de qualidade, oferecendo consultoria personalizada e soluções inovadoras que protejam o que é mais valioso para nossos clientes em todas as fases da vida.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-brand-secondary">Visão</h3>
                        <p className="mt-4">Ser a corretora de seguros digital mais admirada do Brasil, reconhecida pela excelência no atendimento, inovação constante e por construir relações de confiança duradouras.</p>
                    </div>
                </div>
                 <div className="mt-8">
                     <h3 className="text-2xl font-bold text-brand-secondary text-center">Valores</h3>
                     <ul className="mt-4 list-disc list-inside space-y-2">
                        <li><strong>Confiança:</strong> A base de tudo que fazemos.</li>
                        <li><strong>Transparência:</strong> Comunicação clara, honesta e sem letras miúdas.</li>
                        <li><strong>Empatia:</strong> Colocamo-nos no lugar do cliente para entender suas reais necessidades.</li>
                        <li><strong>Inovação:</strong> Buscamos constantemente novas formas de melhorar nossos serviços e processos.</li>
                        <li><strong>Compromisso:</strong> Estamos ao lado do nosso cliente, especialmente nos momentos mais difíceis.</li>
                     </ul>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default About;