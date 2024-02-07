import { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import useMessages from "../../hooks/useMessages";
import MessagesContext from "../../context/MessagesContext";
import Loader from "../Loader";

function ChatContainer() {
    const context = useContext(MessagesContext);
    const {isLoading, messages} = useMessages();
    return (
        <div className="h-screen flex flex-col p-0 m-0">
            <Messages messages={messages} />
            <Input />
        </div>
    )
}

export default ChatContainer;