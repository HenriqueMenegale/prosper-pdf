import Message from './Message';
import IMessage from '../../Types/Message';
import EmptyState from '../EmptyState';
import useMessages from '../../hooks/useMessages';
import Loader from '../Loader';

function Messages(){

    const { isLoading, messages } = useMessages();

    return (
        <div className="flex flex-col w-full p-4 h-full h-max-full overflow-scroll">
            {messages?.length ? (
                <>
                    { messages.map((message: IMessage, index) => (
                        <Message message={message} key={ index } />
                    ))}
                </>
            ): (
                <EmptyState />
            )}
            {isLoading && (
                <Loader />
            )}
        </div>        
    )
}

export default Messages;
