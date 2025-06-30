
import React from 'react';
import FaqItem from '../components/FaqItem';

const faqData = [
  {
    question: "O que é um seguro de vida?",
    answer: "O seguro de vida é um contrato que você faz com uma seguradora para garantir proteção financeira para seus familiares e/ou pessoas que dependem de você, no caso de sua falta. Também pode te amparar em casos de doenças graves e invalidez."
  },
  {
    question: "Por que eu preciso de um seguro viagem?",
    answer: "O seguro viagem é essencial para cobrir despesas inesperadas durante suas viagens, como emergências médicas, cancelamento de voo, perda de bagagem, entre outros. Em muitos países, a contratação é obrigatória para a entrada de turistas."
  },
  {
    question: "Quais são os benefícios de um plano odontológico?",
    answer: "Um plano odontológico oferece acesso a uma ampla rede de dentistas para consultas, exames, limpeza, tratamentos de canal, extrações e outros procedimentos. Ele ajuda a manter a saúde bucal em dia com um custo mensal previsível."
  },
  {
    question: "Como funciona a cotação online?",
    answer: "Você preenche um formulário com algumas informações básicas sobre seu perfil e o tipo de seguro que deseja. Nosso sistema, com o auxílio de inteligência artificial, busca as melhores opções nas principais seguradoras e apresenta as propostas mais adequadas para você."
  },
  {
    question: "Posso cancelar meu seguro a qualquer momento?",
    answer: "Sim, a maioria dos seguros pode ser cancelada a qualquer momento. As condições para cancelamento, como eventuais multas ou devolução de prêmios, variam de acordo com o contrato e a seguradora. Nossa equipe pode te auxiliar em todo o processo."
  }
];

const Faq: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-brand-secondary sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-center mt-4 text-lg text-gray-600">
            Tudo o que você precisa saber para tomar a melhor decisão.
          </p>
          <dl className="mt-12 space-y-6 divide-y divide-gray-200">
            {faqData.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
