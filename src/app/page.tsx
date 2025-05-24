'use client'
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatList from '@/components/ChatList';
import ChatWindow from '@/components/ChatWindow';
import AICopilot from '@/components/AICopilot';
import { initialChats } from '@/data/chats';
export default function Home() {
  
//  Managing chats and selected chats
  const [chats, setChats] = useState(initialChats);
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  //adding more chats messages to their respective selectedchatindex
  const addMessageToChat = (text: string) => {
    const updatedChats = [...chats];
    updatedChats[selectedChatIndex].messages.push({ from: 'agent', text }, { from: 'user', text:' Ok ! Thanks ' });
    setChats(updatedChats);
  };

  return (
    <main className="flex h-screen w-full bg-purple-100 p-2 sm:p-4">
      <div className="flex w-full rounded-2xl bg-white overflow-y-auto shadow-lg sm:overflow-hidden flex-col sm:flex-row">
        <Sidebar />
        <div className="flex flex-col sm:w-1/5 w-full border-t sm:border-t-0 sm:border-r border-gray-200">
          {/* Passing chats , selected index , update value of index */}
          <ChatList 
            chats={chats} 
            selected={selectedChatIndex} 
            onSelect={setSelectedChatIndex} 
          />
        </div>
        <div className="flex flex-col flex-1">
          {/* passing fullname , messages from chats as per respected selected chatindex also addmessage function to update chat */}
          <ChatWindow 
            fullName={chats[selectedChatIndex].name} 
            messages={chats[selectedChatIndex].messages} 
            onSendMessage={addMessageToChat}
          />
        </div>
        <div className="sm:w-1/3 w-full border-t sm:border-t-0 sm:border-l border-gray-200">
          <AICopilot />
        </div>
      </div>
    </main>
  );
}
