import IMessage from "../../Types/Message";
import Markdown from "react-markdown";

type Props = {
    message: IMessage
}

function Message( { message }: Props){
    let messageClasses = 'w-full p-3 my-2 rounded ';
    
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
                <div className="citations">
                    { message.citations.map((citation, index) => (
                        <button key={index}>index</button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Message;