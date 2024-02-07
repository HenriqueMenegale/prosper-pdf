import { useContext } from "react";
import IMessage from "../../Types/Message";
import Markdown from "react-markdown";
import MessagesContext from "../../context/MessagesContext";
import { extractPage } from "../../helpers/text";

type Props = {
    message: IMessage
}

function Message( { message }: Props){
    let messageClasses = 'w-full p-3 my-2 rounded ';
    const context = useContext(MessagesContext);

    switch(message.author){
        case "system":
            messageClasses += 'bg-cyan-400/20 ';
            break;
        case "user":
            messageClasses += 'bg-blue-400/20 ';
            break;
        case "error":
            messageClasses += 'bg-red-400/20 ';
            break;
    }  
    
    return (
        <div className={messageClasses}>
            <Markdown>{ message.content }</Markdown>
            {message.citations && (
                <div className="my-2 p-2 bg-white/40">
                    <div className="font-bold">
                        Citations:
                    </div>
                    { message.citations.map((citation, index) => (
                        <button
                        onClick={() => context?.setCurrentPage(parseInt(extractPage(citation)) - 1)}
                        key={index}
                        className="px-2 py-1  bg-sky-900 text-white">
                            { extractPage(citation) }
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Message;