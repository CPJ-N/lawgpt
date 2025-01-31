"use client"
import { useState } from 'react';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { PromptTemplate } from 'langchain/prompts';
import { StringOutputParser } from 'langchain/schema/output_parser';
import { retriever } from '../../utils/retriever';
import { combineDocuments } from '../../utils/combineDocuments';
import { RunnablePassthrough, RunnableSequence } from "langchain/schema/runnable";
import { formatConvHistory } from '../../utils/formatConvHistory';
import { Send } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-background">
      <Head>Chat Interface</Head>
      <div className="flex flex-col h-screen">
        {messages && messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-grow px-4 animate-fade-in-up">
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/240_F_485397626_ydPEYshMKRIyY7HIH2jUCLu8nkC7X2KH.jpg" 
                alt="Logo" 
                width={120} 
                height={120} 
                className="rounded-full shadow-lg"
                layout="fixed" 
              />
            </div>
            <h1 className="text-4xl font-bold mb-10 text-center text-foreground">
              How can I help you today?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full px-4">
              {sampleQuestion.map((question, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  className="h-auto py-4 px-6 text-left hover:bg-accent transition-all duration-300 
                    shadow-lg hover:shadow-xl text-sm md:text-base animate-fade-in-up whitespace-normal break-words
                    min-h-[80px] flex items-start justify-start"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleQuestionClick(index)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 space-y-4 mt-16">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  message.sender === 'bot' ? 'justify-start' : 'justify-end',
                  message.sender === 'bot' ? 'animate-fade-in-left' : 'animate-fade-in-right'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card
                  className={cn(
                    "p-4 max-w-[80%] md:max-w-[70%] shadow-md hover:shadow-lg transition-all duration-200 break-words",
                    message.sender === 'bot' 
                      ? 'bg-secondary text-secondary-foreground ml-2' 
                      : 'bg-primary text-primary-foreground mr-2'
                  )}
                >
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message.text}</p>
                </Card>
              </div>
            ))}
          </div>
        )}
        <div className="w-full px-4 py-6 bg-background/95 backdrop-blur-sm border-t">
          <div className="flex items-center gap-2 w-full max-w-2xl mx-auto">
            <Input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleUserInput}
              placeholder="Message LawGPT..."
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              size="icon"
              className="shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

