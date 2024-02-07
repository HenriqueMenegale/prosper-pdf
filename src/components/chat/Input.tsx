import { useState, ChangeEvent, FormEvent } from "react";
import useMessages from "../../hooks/useMessages";
import usePreferences from "../../hooks/usePreferences";
import SendIcon from "../icons/SendIcon";

function Input(){
    const { sendMessage } = useMessages();
    const { charLimit } = usePreferences();
    const [valid, setValid] = useState(true);

    // test question: Does Hiscox include waiver of subrogation?
    const [question, setQuestion] = useState("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!valid || question.length < 1) return;
        sendMessage(question);
        setQuestion("");
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
        if(e.target?.value?.length > charLimit){
            setValid(false);
            return;
        }
        setValid(true);
    }

    let inputClass = "p-3 border-0 rounded outline-0 flex-grow " + (!valid ? "border-red-500 border-2" : '');

    return (
        <div className="self-end justify-self-end w-full p-8 mt-auto bg-sky-900">
            <form action="#" onSubmit={onSubmit}>
                <div className="w-full bg-white flex items-center rounded pr-4">
                    <input 
                        type="text"
                        onChange={onChange}
                        className={inputClass}
                        placeholder={`Enter your question (max ${charLimit} characters)`}
                        value={question} />
                    <div className="mr-4">{charLimit - question.length} / {charLimit}</div>
                    <button><SendIcon /></button>
                </div>
            </form>
        </div>
    )
}

export default Input;
