import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { ChatMessage } from '../types';
import Icon from './Icon';

const SYSTEM_INSTRUCTION = `Você é o "Assistente Virtual Seguro Certo" da corretora de seguros "Seguros Goodlife". Sua principal função é responder a perguntas sobre os produtos e serviços de seguros (vida, viagem, odontológico) de forma clara, amigável, concisa e informativa. **Diretrizes:** Seja sempre cordial e profissional. Use uma linguagem acessível para quem não é especialista em seguros. NÃO forneça cotações, valores ou peça informações pessoais (nome, e-mail, telefone). Se a pergunta for sobre como contratar, oriente o usuário a preencher o formulário de contato do site ou a falar com um especialista pelo WhatsApp. Se a pergunta for fora do escopo de seguros, responda educadamente que você só pode ajudar com dúvidas sobre seguros. Mantenha as respostas curtas e diretas, idealmente em um ou dois parágrafos.`;

export const VirtualAssistant: React.FC = () => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (process.env.API_KEY) {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const chatInstance = ai.chats.create({
                model: 'gemini-2.5-flash-preview-04-17',
                config: { systemInstruction: SYSTEM_INSTRUCTION },
            });
            setChat(chatInstance);
        } else {
            setError("A chave da API não está configurada. O assistente virtual está desativado.");
        }
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);
        setError('');

        try {
            const stream = await chat.sendMessageStream({ message: currentInput });
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model', content: '' }]);

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = modelResponse;
                    return newMessages;
                });
            }
        } catch (err) {
            console.error("Error sending message:", err);
            setError("Desculpe, ocorreu um erro ao se comunicar com o assistente. Tente novamente.");
            setMessages(prev => prev.filter(msg => msg.role !== 'model' || msg.content !== ''));
        } finally {
            setIsLoading(false);
        }
    };

    const formatContent = (text: string) => {
      const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/(\r\n|\n|\r)/g, '<br />');
      return { __html: formattedText };
    };

    return (
        <section className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary">Como podemos te ajudar?</h2>
                    <p className="mt-4 text-xl text-gray-500">Tire suas dúvidas com nosso assistente virtual.</p>
                </div>

                <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col">
                    <div className="p-4 sm:p-6 border-b flex items-center gap-4">
                        <div className="flex-shrink-0 bg-brand-secondary text-white rounded-full p-3 flex items-center justify-center">
                           <Icon name="question" className="w-8 h-8"/>
                        </div>
                        <div>
                           <h3 className="text-xl sm:text-2xl font-bold text-brand-secondary">Assistente Virtual Seguro Certo</h3>
                           <p className="text-sm text-gray-500">Respondendo com IA</p>
                        </div>
                    </div>
                    
                    <div className="h-96 overflow-y-auto p-4 sm:p-6 space-y-6">
                        <div className="flex gap-3">
                            <div className="flex-shrink-0 bg-brand-accent text-white rounded-full h-8 w-8 flex items-center justify-center">
                                <Icon name="quote" className="w-5 h-5"/>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none shadow-sm">
                                <p className="text-sm text-gray-800">Tem alguma dúvida sobre seguros? Pergunte ao nosso assistente com Inteligência Artificial. <b>Ex: "Qual a diferença entre seguro de vida e de acidentes pessoais?"</b></p>
                            </div>
                        </div>

                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                {msg.role === 'model' && (
                                     <div className="flex-shrink-0 bg-brand-accent text-white rounded-full h-8 w-8 flex items-center justify-center">
                                        <Icon name="quote" className="w-5 h-5"/>
                                     </div>
                                )}
                                <div className={`p-3 rounded-lg max-w-sm sm:max-w-md md:max-w-lg shadow-sm ${
                                    msg.role === 'user'
                                        ? 'bg-brand-secondary text-white rounded-br-none'
                                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                }`}>
                                   <div className="text-sm prose prose-sm max-w-none" dangerouslySetInnerHTML={formatContent(msg.content)}></div>
                                </div>
                            </div>
                        ))}

                        {isLoading && messages[messages.length - 1]?.role === 'model' && (
                           <div className="flex gap-3">
                                <div className="flex-shrink-0 bg-brand-accent text-white rounded-full h-8 w-8 flex items-center justify-center">
                                    <Icon name="quote" className="w-5 h-5"/>
                                </div>
                                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center space-x-1">
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                                </div>
                           </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 sm:p-6 border-t bg-gray-50/50 rounded-b-2xl">
                        <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-4 items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Digite sua pergunta..."
                                className="w-full p-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent transition shadow-sm"
                                disabled={isLoading || !chat || !!error}
                            />
                            <button 
                                type="submit" 
                                disabled={isLoading || !input.trim() || !chat || !!error}
                                className="flex-shrink-0 w-12 h-12 bg-brand-accent text-white rounded-full flex items-center justify-center hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-sm"
                                aria-label="Enviar pergunta"
                            >
                               <Icon name="send" className="w-6 h-6"/>
                            </button>
                        </form>
                        {error && <p className="mt-2 text-xs text-center text-red-600">{error}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};