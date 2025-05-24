import { FiPaperclip, FiSmile } from 'react-icons/fi';
import { useState } from 'react';
interface MessageInputProps {
  onSend: (text: string) => void;
}
export default function MessageInput({ onSend }: MessageInputProps) {
   
  const [input, setInput] = useState('');
//handling submit sending input value to update in selectedchatindex
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };
  return (
    //Form to take input and submit on enter
      <form onSubmit={handleSubmit} className="border-t p-2 flex items-center gap-2">
      <button><FiPaperclip className="text-gray-500 cursor-pointer" /></button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Press Enter to Send"
        className="flex-1 px-3 py-2  text-black border rounded-lg text-sm"
      />
      <button><FiSmile className="text-gray-500 cursor-pointer" /></button>
      </form>
    
  );
}