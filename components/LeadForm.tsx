
import React, { useState } from 'react';
import { InsuranceType } from '../types';
import { processLeadWithGemini } from '../services/geminiService';
import Icon from './Icon';

interface LeadFormProps {
  initialInsuranceType?: InsuranceType;
}

const LeadForm: React.FC<LeadFormProps> = ({ initialInsuranceType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState<InsuranceType | ''>(initialInsuranceType || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !insuranceType) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    setError('');
    setIsLoading(true);
    setSuccessMessage('');

    try {
      const confirmation = await processLeadWithGemini({
        name,
        email,
        phone,
        insuranceType,
      });
      setSuccessMessage(confirmation);
      setName('');
      setEmail('');
      setPhone('');
      setInsuranceType(initialInsuranceType || '');
    } catch (err) {
      setError('Houve um erro ao enviar sua solicitação. Por favor, tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (successMessage) {
    return (
      <div className="bg-orange-50 border-l-4 border-brand-accent text-orange-800 p-6 rounded-lg shadow-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon name="check" className="h-6 w-6 text-brand-accent"/>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold">Solicitação Recebida!</h3>
            <div className="mt-2 text-md">
              <p>{successMessage}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-secondary text-center mb-2">Fale com um Especialista</h3>
      <p className="text-center text-gray-500 mb-6">Preencha o formulário e receba uma cotação personalizada.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary bg-brand-light" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary bg-brand-light" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary bg-brand-light" />
        </div>
        <div>
          <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700">Tenho interesse em</label>
          <select id="insuranceType" value={insuranceType} onChange={(e) => setInsuranceType(e.target.value as InsuranceType)} required className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary sm:text-sm rounded-md bg-brand-light">
            <option value="" disabled>Selecione um seguro</option>
            <option value={InsuranceType.Life}>{InsuranceType.Life}</option>
            <option value={InsuranceType.Travel}>{InsuranceType.Travel}</option>
            <option value={InsuranceType.Dental}>{InsuranceType.Dental}</option>
          </select>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div>
          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-brand-accent hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300">
            {isLoading ? 'Enviando...' : 'Receber Cotação'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;