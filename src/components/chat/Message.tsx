import IMessage from "../../Types/Message";
import Markdown from "react-markdown";
import usePDF from "../../hooks/usePDF";
import UserIcon from "../icons/UserIcon";
import RobotIcon from "../icons/RobotIcon";
import { extractPage } from "../../helpers/text";

type Props = {
    message: IMessage
}

function Message( { message }: Props){
    let messageClasses = 'w-full p-3 my-2 rounded ';
    const { setCurrentPage } = usePDF();

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
            <div className="font-bold capitalize flex mb-2">
                { message.author === 'user' && (<UserIcon />) }
                { message.author === 'system' && (<RobotIcon />)}
                
                <div className="ml-2">
                    { message.author === "system" ? "Prosper" : message.author }
                </div>
            </div>
            <Markdown>{ message.content }</Markdown>
            {message.citations && message.citations.length > 0 && (
                <div className="my-2 p-2 bg-white/40">
                    <div className="font-bold">
                        Citations:
                    </div>
                    { message.citations.map((citation, index) => (
                        <button
                        onClick={() => setCurrentPage!(parseInt(extractPage(citation)) - 1)}
                        key={index}
                        className="px-2 py-1  bg-sky-900 text-white text-sm">
                            p. { extractPage(citation) }
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Message;