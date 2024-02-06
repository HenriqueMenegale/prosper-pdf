import IMessage from "../../Types/Message";
import Markdown from "react-markdown";

type Props = {
    message: IMessage
}

function Message( { message }: Props){
    let messageClasses = 'w-full p-3 my-2 rounded ';
    messageClasses += message.author === "system" ? "bg-cyan-400/20" : "bg-blue-400/20 "
    
    return (
        <div className={messageClasses}>
            <Markdown>{ message.content }</Markdown>
        </div>
    )
}

export default Message;