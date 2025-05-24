  import { useState } from "react";
  import Image from "next/image";
  import favicon from '../app/favicon.ico';
  import { BsArrowUpSquareFill } from "react-icons/bs";
  export default function AICopilot() {
    // intializing states and submit function for managing ai chats to show 
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
     //submitting and adding input value
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim()) {
        setMessages((prev) => [...prev, input.trim()]);
        setInput("");
      }
    };
    return (
      <div className="flex flex-col h-full p-4 justify-between">
        <div className="flex flex-col  items-center" >
          <Image
                      src={favicon}
                      alt="Favicon"
                      width={30}
                      height={30}
                      className="rounded-full mb-1 "
                    />
          <h2 className="text-sm font-semibold mb-1 text-black">Hi, I'm Fin AI Copilot</h2>
          <p className="text-xs text-gray-500 mb-4">Ask me anything about this conversation.</p>
        </div>
          <div className="mb-4 space-y-3 text-sm text-black font-medium overflow-y-auto min-h-[100px] max-h-[325px]">
           {/*Mapping AiCopilot dummy chats  */} 
          {messages.map((msg, index) => (
            <div key={index} className="w-full space-y-1">
      
      <div className="flex justify-end">
        <p className="inline-block bg-purple-100 p-1.5 rounded-xl max-w-[70%] break-words">
          {msg}
        </p>
      </div>

    
      <div className="flex justify-start">
        <p className="inline-block bg-gray-100 p-1.5 rounded-xl max-w-[70%] break-words">
          Working on it...
        </p>
      </div>
    </div>
          ))}
        </div>
        <div className="mt-auto ">
          <div className="text-xs mb-2 text-gray-700 space-y-1.5"><p>Suggested 💡</p>
            <p  onClick={() => setInput("How do I get a refund?")} className="py-1 px-1  hover:scale-105 transition-all duration-500  cursor-pointer border-2 border-purple-200 w-[150px]  rounded-3xl "> How do I get a refund?</p>
            </div>
          {/*Form to take input and submit on button click*/ }
          <form className="relative w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full px-3 py-2 pr-10 text-black border text-sm rounded-lg"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            
            <button
              type="submit"
              className="absolute right-2 hover:scale-105 transition-all duration-500 cursor-pointer top-1/2 transform -translate-y-1/2 text-purple-400"
              
            >
              <BsArrowUpSquareFill size={22} />
            </button>
          </form>
        </div>
          
      </div>
    );
  }