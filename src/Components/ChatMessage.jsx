import { MessageCircleCode } from 'lucide-react';

export default function ChatMessage ({chat}) {
  return(
    <div className={`message ${chat.role === "model" ? 'bot': 'user'}-message`}>
      {chat.role === "model" && <MessageCircleCode className='chatbot-icon'/>}
      <p className='message-text'>{chat.text}</p>
    </div>
  )  
}