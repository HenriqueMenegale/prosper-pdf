import { createContext, Dispatch, SetStateAction } from "react";
import IMessage from "../Types/Message";

interface IMessageContext {
    messages: IMessage[],
    setMessages: (Dispatch<SetStateAction<IMessage[]>>),
    isLoading: boolean
    setIsLoading: (Dispatch<SetStateAction<boolean>>),
    currentPage: number;
    setCurrentPage: (Dispatch<SetStateAction<number>>),
}

const MessagesContext = createContext<IMessageContext | undefined>(undefined);

export default MessagesContext;