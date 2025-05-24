# AI Chat Panel

## Overview

AI Chat Panel is a modern chat interface built with **Next.js**, **React**, and **Tailwind CSS**.  
It offers a complete messaging experience, including an inbox, chat window, message input, and an AI assistant panel.  
The app features smooth animations and a responsive layout optimized for all screen sizes.

---

## Project Structure

- **`app/page.tsx`**: Main page component that integrates all subcomponents and manages chat and selection states.
- **`components/Sidebar.tsx`**: A collapsible sidebar with animated toggle using Framer Motion.
- **`components/ChatList.tsx`**: Lists all conversations with contact name, message preview, and timestamp.
- **`components/ChatWindow.tsx`**: Displays messages of the currently selected chat and includes a message input area.
- **`components/MessageInput.tsx`**: Form component for sending new messages, with attachment and emoji icons.
- **`components/AICopilot.tsx`**: Simulates an AI assistant panel, with user input and sample suggestions.
- **`data/chats.ts`**: Contains the initial dummy chat data used for rendering messages and contacts.

---

## chats.ts File

The `chats.ts` file contains static chat data used to simulate real-time conversations.  
Each chat object includes:

- `name`: The contact's name  
- `preview`: A short message preview  
- `time`: Timestamp of the last message  
- `messages`: An array of messages, each with `from` and `text` fields

This mock data is imported into `page.tsx` to initialize and manage chat state without needing a backend.

---

## Component Details

### Sidebar

- Collapsible with smooth animation  
- Uses Framer Motion for expanding/collapsing  
- Displays a profile image when expanded  

### ChatList

- Displays contact names, preview messages, and timestamps  
- Highlights the selected chat  
- Click to switch between chats  

### ChatWindow

- Displays messages for the selected chat  
- Aligns messages based on sender (agent or user)  
- Scrollable message area  

### MessageInput

- Form input for sending new messages  
- Icons for attachment and emoji  
- Messages update selected chat on submit  

### AICopilot

- User can enter a query or select a suggested one  
- Simulated AI responses displayed  
- Scrollable assistant chat history  

---

## Functionalities Implemented

- Animated sidebar toggle with Framer Motion  
- Chat list with selectable conversations  
- Sending messages with user/agent distinction  
- Static simulated responses for agent and AI assistant  
- Scrollable chat and AI history sections  
- Responsive and mobile-friendly layout using Tailwind CSS  
- Subtle hover and transition effects for interactivity  

---

## Animations and Styling

- Sidebar animation with Framer Motion  
- Hover scale effect on chat list items  
- Tailwind CSS for consistent layout and spacing  
- Color-coded messages with rounded corners  
- Icon animations and transitions for better UI feedback  

---

## How to Run

 1. Create the project (if starting fresh)
npx create-next-app@latest ai-chat-panel
cd ai-chat-panel

 2. Install required dependencies
npm install
npm install react-icons
npm install framer-motion

 3. Start the development server
npm run dev

 4. Open in browser
http://localhost:3000


##Future Improvements
Connect to a real AI backend (e.g. OpenAI, Dialogflow)
Store chat data in local storage or database
Enable real file attachments and emoji picker
Generate dynamic AI and agent responses

## Technologies/Libraries Used
- Next.js – React framework
- 2.React – UI library
- Tailwind CSS – Utility-first CSS framework
- Framer Motion – Animation library
- React Icons – Icon library for UI
