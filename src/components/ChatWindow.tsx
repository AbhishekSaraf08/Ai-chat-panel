import MessageInput from './MessageInput';
interface ChatWindowProps {
  fullName: string;
  messages: { from: string; text: string }[];
  onSendMessage: (text: string) => void;
}
export default function ChatWindow({ messages, fullName,onSendMessage }: ChatWindowProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4 font-semibold text-black">{fullName}</div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Mapping particular  chat/msg in chatwindow  */}
        {messages.map((msg: any, idx: number) => (
          <div key={idx} className={`flex ${msg.from === 'agent' ? 'justify-end' : 'justify-start'}`}>
            <div className={`${msg.from === 'agent' ? 'bg-purple-100' : 'bg-gray-100'} p-3 rounded-xl w-fit max-w-[70%]`}>
              <p className="text-sm text-black">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <MessageInput onSend={onSendMessage} />
    </div>
  );
}