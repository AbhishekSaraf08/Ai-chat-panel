"use client"
import { useState } from 'react';
import { FiCircle, FiClock } from 'react-icons/fi';



export default function ChatList({ chats, selected, onSelect }: any) {

   
  return (
    <div className="p-4 overflow-y-auto ">
      <h2 className="text-lg font-semibold mb-4 text-black">Your inbox</h2>
      <div className="space-y-2">
        {/*Mapping chats  name, preview, time, of all chats*/ }
        {chats.map((msg:any, i:number) => (
          <div
            key={i}
            onClick={()=>onSelect(i)}
            className={`p-2 hover:scale-105  rounded-lg flex items-center gap-2 transition-all duration-500 ${i === selected ? 'bg-yellow-100' : 'hover:bg-gray-100 cursor-pointer'}`}
          >
            <FiCircle className={`text-black rounded-full ${i === selected ? 'bg-purple-200' : 'hover:bg-gray-100 cursor-pointer'}`} />
            <div className=" text-black flex flex-col">
              <span className="font-medium text-sm">{msg.name}</span>
              <span className="text-xs text-gray-500">{msg.preview}</span>
            </div>
            
            <span className="ml-auto text-xs text-gray-400">{msg.time}</span>
            <FiClock className='text-gray-400'/>
            
          </div>
        ))}
      </div>
    </div>
  );
}