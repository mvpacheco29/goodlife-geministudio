
import React, { useState } from 'react';
import Icon from './Icon';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-start text-left text-gray-700"
        >
          <span className="text-lg font-medium text-brand-primary">{question}</span>
          <span className="ml-6 h-7 flex items-center">
            <Icon name="chevron-down" className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`} />
          </span>
        </button>
      </dt>
      <dd className={`mt-2 pr-12 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-base text-gray-600 pt-2">{answer}</p>
      </dd>
    </div>
  );
};

export default FaqItem;
