import { useState } from 'react';
import Message from './Message';
import IMessage from '../../Types/Message';
import EmptyState from '../EmptyState';

type Props = {
    messages: IMessage[] | undefined;
}

function Messages({ messages }: Props){
    return (
        <div className="flex flex-col w-full p-4">
            {messages?.length ? (
                <>
                    { messages.map((message: IMessage, index) => (
                        <Message message={message} key={ index } />
                    ))}
                </>
            ): (
                <EmptyState />
            )}
        </div>        
    )
}

export default Messages;