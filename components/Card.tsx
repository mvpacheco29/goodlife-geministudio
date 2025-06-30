
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

interface CardProps {
  icon: 'life' | 'travel' | 'dental';
  title: string;
  description: string;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, linkTo }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center transform hover:-translate-y-2">
      <div className="bg-brand-accent text-white p-4 rounded-full mb-6">
        <Icon name={icon} className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-brand-secondary mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={linkTo}
        className="mt-auto inline-block bg-brand-secondary text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-primary transition-colors duration-300"
      >
        Saber Mais
      </Link>
    </div>
  );
};

export default Card;
