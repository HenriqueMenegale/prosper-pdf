import Messages from "./Messages";
import Input from "./Input";

function ChatContainer() {
    return (
        <div className="h-screen flex flex-col p-0 m-0">
            <Messages />
            <Input />
        </div>
    )
}

export default ChatContainer;