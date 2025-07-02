import { ArrowDown, ArrowUp } from 'lucide-react';
import { MessageCircleCode } from 'lucide-react';
import ChatForm from './Components/ChatForm';
import { useState } from 'react';
import ChatMessage from './Components/ChatMessage';

export default function App() {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = (history) => {
    console.log(history);
  }

  return (
    <div className='container'>
      <div className='chatbot-popup'>

        {/* Chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <MessageCircleCode className='circle' />
            <h2 className='logo-text'> Chat Bot </h2>
          </div>
          <button className='mat-rounded'> <ArrowDown /></button>
        </div>

         {/* Chatbot body */} 
        <div className="chat-body">
          <div className="message bot-message">
            <MessageCircleCode className='chatbot-icon'/>
            <p className='message-text'>
              Hey there 👋 <br/> How can I help you today?
            </p>
          </div>


          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))} 
        </div>

        {/* Chatbot footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>

      </div>
      
    </div>
  )

}

