import { useState, useContext } from 'react';
import MessagesContext from '../context/MessagesContext';
import usePreferences from './usePreferences';
import IMessage from '../Types/Message';

function useMessages() {
    const context = useContext(MessagesContext);
    const { sendChatHistory } = usePreferences();

    const url = 'https://prosper-conversations-beta.onrender.com/assistant/ask_question';
    const headers = {
        'Content-Type': 'application/json',
        //this should be in an env file
        'X-Api-Key': 'test-challenge',
        'X-Organization': 'test'
    }
  

    const sendMessage = async (message: string) => {
        const newMessages : IMessage[] = [
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

        //verifies if it should send just the last message our the whole chat history
        let question;
        if(sendChatHistory){
            question = context?.messages.map((message) => message.content).join(' ');
        }
        question += `\n ${message}`;

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "question": question
            })
        })
        .then((response) => {
            return response.json();            
        })
        .then((data) => {
            console.log("data", data);
            newMessages.push({
                content: data?.message?.text,
                author: 'system',
                citations: data?.message?.citations
            });
            context?.setMessages([
                ...context?.messages,
                ...newMessages
            ]);
            context?.setIsLoading(false);
        })
        .catch((error) => {
            console.log("error", error);
            newMessages.push({
                content: "An error occurred. Please try again in a moment, if the problem persists contact the support team.",
                author: 'error'
            });
            context?.setMessages([
                ...context?.messages,
                ...newMessages
            ]);
            context?.setIsLoading(false);
        }); 
    }

    return {sendMessage, messages: context?.messages, isLoading: context?.isLoading};
}

export default useMessages;