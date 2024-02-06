import { useState, useContext } from 'react';
import MessagesContext from '../context/MessagesContext';
function useMessages() {
    const context = useContext(MessagesContext);

    const [error, setError] = useState("");

    const url = 'https://prosper-conversations-beta.onrender.com/assistant/ask_question';
    const headers = {
        'Content-Type': 'application/json',
        'X-Api-Key': 'test-challenge',
        'X-Organization': 'test'
    }
  

    const sendMessage = async (message: string) => {
        console.log("message", message);
        const newMessages = [
            {
                content: message,
                author: 'user'
            }
        ]

        context?.setMessages([
            ...context?.messages,
            ...newMessages
        ]);

        context?.setIsLoading(true);

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "question": message
            })
        })
        .then((response) => {
            return response.json();            
        })
        .then((data) => {
            console.log("data", data);
            newMessages.push({
                content: data?.message?.text,
                author: 'system'
            });
            context?.setMessages([
                ...context?.messages,
                ...newMessages
            ]);
            context?.setIsLoading(false);
        })
        .catch((error) => {
            console.log("error", error);
            setError(error);
        });

        
    }

    return {sendMessage, messages: context?.messages, isLoading: context?.isLoading};
}

export default useMessages;