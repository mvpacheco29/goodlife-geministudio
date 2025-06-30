
import { GoogleGenAI } from "@google/genai";
import { InsuranceType } from '../types';

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export interface LeadData {
    name: string;
    email: string;
    phone: string;
    insuranceType: InsuranceType;
}

export const processLeadWithGemini = async (leadData: LeadData): Promise<string> => {
    const { name, email, phone, insuranceType } = leadData;

    const prompt = `
      Você é um assistente de uma corretora de seguros chamada "Seguros Goodlife".
      Um novo lead foi enviado através do site. Formate as informações abaixo para o corretor e, em seguida, crie uma mensagem de confirmação amigável para o cliente.

      **Dados do Lead:**
      - Nome: ${name}
      - Email: ${email}
      - Telefone: ${phone}
      - Interesse: ${insuranceType}

      **Formato da Resposta (JSON):**
      Responda APENAS com um objeto JSON com duas chaves: "brokerSummary" e "customerConfirmation".
      - "brokerSummary": Um resumo em texto simples para o corretor com os dados do lead.
      - "customerConfirmation": Uma mensagem calorosa para o cliente, confirmando o recebimento e informando que um especialista entrará em contato em breve. A mensagem deve ser otimista e tranquilizadora.

      Exemplo de como o JSON deve ser:
      {
        "brokerSummary": "Novo Lead: João Silva, E-mail: joao@email.com, Telefone: (11) 98765-4321, Interesse: Seguro de Vida.",
        "customerConfirmation": "Olá, João! Recebemos seu interesse em nosso Seguro de Vida. Pode ficar tranquilo, um de nossos especialistas analisará suas informações e entrará em contato em breve para te ajudar a encontrar a melhor proteção. Equipe Seguros Goodlife."
      }
    `;

    try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-preview-04-17",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          }
        });

        let jsonStr = response.text.trim();
        const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
        const match = jsonStr.match(fenceRegex);
        if (match && match[2]) {
            jsonStr = match[2].trim();
        }

        const parsedData = JSON.parse(jsonStr);
        // We only need to return the confirmation for the customer to see.
        // The broker summary would be sent to a CRM in a real application.
        return parsedData.customerConfirmation || "Obrigado por seu contato! Em breve, um de nossos consultores falará com você.";

    } catch (error) {
        console.error("Error processing lead with Gemini:", error);
        return `Obrigado, ${name}! Recebemos seu interesse em ${insuranceType}. Um de nossos especialistas entrará em contato em breve pelo telefone ${phone} ou email ${email}.`;
    }
};