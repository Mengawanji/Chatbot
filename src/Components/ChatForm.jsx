import { ArrowUp } from 'lucide-react';
import { useRef } from 'react';


export default function ChatForm ({chatHistory, setChatHistory, generateBotResponse}) {

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
      e.preventDefault();  
      const userMessage = inputRef.current.value.trim();
      if (!userMessage) return;  
      inputRef.current.value = ''; 
       
      //Update Chat history with the user's message
      setChatHistory(history => [...history, {role: 'user', text: userMessage }]);
     
      //Delay 600ms before showing thinking and display "Thinking..." and generate response      
      setTimeout(() => {
        //Add a thinking placeholder for the bot's response
        setChatHistory((history) => [...history, {role: 'model', text: 'Thinking...' }]);
      
        //call the function to generate the bot's response
        generateBotResponse([...chatHistory, {role: 'user', text: userMessage}]);
      }, 600);
      

    };

    return(
      <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder='Message...'  className='message-input' required/>
        <button className='mat-rounded'> <ArrowUp /></button>
      </form>
    );
}