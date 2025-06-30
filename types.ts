
export enum InsuranceType {
    Life = 'Seguro de Vida',
    Travel = 'Seguro Viagem',
    Dental = 'Plano Odontológico',
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
