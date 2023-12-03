"use client"
import { useState } from 'react';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { PromptTemplate } from 'langchain/prompts';
import { StringOutputParser } from 'langchain/schema/output_parser';
import { retriever } from '../../utils/retriever';
import { combineDocuments } from '../../utils/combineDocuments';
import { RunnablePassthrough, RunnableSequence } from "langchain/schema/runnable";
import { formatConvHistory } from '../../utils/formatConvHistory';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Image from 'next/image';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const sampleQuestion: string[] = [
  "what is the Indian Penal code?",
  "what is Punishment of offences committed within India?",
  "Tell me about Falsification of accounts",
  "Describe Property mark."
]

export default function ChatbotComponent() {
 
  const [convHistory, setConvHistory] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  
  const openAIApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const llm = new ChatOpenAI({ 
      openAIApiKey,
      temperature: 0
  });

  const standaloneQuestionTemplate = `Given some conversation history (if any) and a question, convert the question to a standalone question. 
  conversation history: {conv_history}
  question: {question} 
  standalone question:`;
  const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)
  console.log("standaloneQuestionPrompt", standaloneQuestionPrompt)

  const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given question about Indian penal code based on the context provided and the conversation history. Try to find the answer in the context. If the answer is not given in the context, find the answer in the conversation history if possible. If you really don't know the answer, say "I'm sorry, I don't know the answer to that." And direct the questioner to email help@scrimba.com. Don't try to make up an answer. Always speak as if you were chatting to a friend.
  context: {context}
  conversation history: {conv_history}
  question: {question}
  answer: `;
  const answerPrompt = PromptTemplate.fromTemplate(answerTemplate)
  console.log("answerPrompt", answerPrompt)
  
  const standaloneQuestionChain = standaloneQuestionPrompt
      .pipe(llm)
      .pipe(new StringOutputParser())
  console.log("standaloneQuestionChain", standaloneQuestionChain)

  const retrieverChain = RunnableSequence.from([
      prevResult => prevResult.standalone_question,
      retriever,
      combineDocuments
  ])
  console.log("retrieverChain", retrieverChain)

  const answerChain = answerPrompt
      .pipe(llm)
      .pipe(new StringOutputParser())
  console.log("answerChain", answerChain)

  const chain = RunnableSequence.from([
      {
          standalone_question: standaloneQuestionChain,
          original_input: new RunnablePassthrough()
      },
      {
          context: retrieverChain,
          question: ({ original_input }) => original_input.question,
          conv_history: ({ original_input }) => original_input.conv_history
      },
      answerChain
  ])

  const handleQuestionClick = async (qnum: number) => {
    setUserInput(sampleQuestion[qnum]);
    console.log(userInput)
    sendMessage()
  }

  // const handleUserInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     sendMessage()
  //   }
  // };

  const handleUserInput = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && userInput.trim()) {
      const newMessage = { text: userInput, sender: 'user' as 'user' | 'bot' };
      setMessages([...messages, newMessage]);
      setUserInput('');

      const response = await chain.invoke({
        question: newMessage.text,
        conv_history: formatConvHistory(convHistory),
      })
      console.log(response)

      const botResponse = { text: response, sender: 'bot' as 'user' | 'bot' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }
  };

  const sendMessage = async () => {
    if (userInput.trim()) {
      const newMessage = { text: userInput, sender: 'user' as 'user' | 'bot' };
      setMessages([...messages, newMessage]);
      setUserInput('');

      // Here you can send the userInput to your chatbot backend
      // Simulate a bot response
      await chain.invoke({
        question: newMessage.text,
        conv_history: formatConvHistory(convHistory),
      })
      .then(response => {
        console.log("response", response)
        const botResponse = { text: response, sender: 'bot' as 'user' | 'bot' };
        setMessages(prevMessages => [...prevMessages, botResponse]);
      })
      .catch(error => {
        console.error('Error sending message:', error);
        // Handle the error appropriately
      });
    }
  };

  return (
    <div className="bg-gray-800">
      <Head>Chat Interface</Head>
      <div className="flex flex-col h-screen bg-gray-800 text-white">
        {messages && messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="mb-8">
              <Image src="/240_F_485397626_ydPEYshMKRIyY7HIH2jUCLu8nkC7X2KH.jpg" alt="Logo" width={100} height={100} layout="fixed" />
            </div>
            <h1 className="text-4xl font-semibold mb-10">How can I help you today?</h1>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <button className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => handleQuestionClick(0)}>
                what is the Indian Penal code?
              </button>
              <button className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => handleQuestionClick(1)}>
                what is Punishment of offences committed within India?
              </button>
              <button className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => handleQuestionClick(2)}>
                Tell me about Falsification of accounts
              </button>
              <button className="bg-gray-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => handleQuestionClick(3)}>
                Describe Property mark.
              </button>
            </div>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 space-y-2 mt-16">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-lg mx-auto ${message.sender === 'bot' ? 'bg-blue-500 text-white ml-auto mr-2' : 'bg-gray-100 text-gray-800 mr-auto ml-2'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
        )}
        <div className="w-full px-4 py-16">
          <div className="flex items-center w-full max-w-xl mx-auto bg-gray-700 rounded-full">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleUserInput}
              placeholder="Message LawGPT..."
              className="w-full py-2 pl-5 bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button
              onClick={sendMessage}
              className="p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition duration-200"
            >
              <PaperAirplaneIcon className="w-6 h-6 text-gray-400 rotate" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

