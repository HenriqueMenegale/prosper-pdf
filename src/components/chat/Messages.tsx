import { useState } from 'react';
import Message from './Message';
import IMessage from '../../Types/Message';

type Props = {
    messages: IMessage[] | undefined;
}

function Messages({ messages }: Props){
    return (
        <div className="flex flex-col w-full p-4">
            {messages && (
                <>
                    { messages.map((message: IMessage, index) => (
                        <Message message={message} key={ index } />
                    ))}
                </>
            )}
        </div>        
    )
}

export default Messages;