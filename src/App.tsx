import { useState } from 'react';
import ChatContainer from './components/chat/ChatContainer';
import PdfContainer from './components/pdf/PdfContainer';
import MessagesContext from './context/MessagesContext';
import IMessage from './Types/Message';
import './App.css';

function App() {

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <MessagesContext.Provider value={{messages, setMessages, isLoading, setIsLoading, currentPage, setCurrentPage}}>
      <div className="columns-2 gap-0">
        <PdfContainer />
        <ChatContainer />
      </div>
    </MessagesContext.Provider>
  );
}

export default App;
