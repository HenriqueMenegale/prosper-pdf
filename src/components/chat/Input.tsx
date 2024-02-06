import { useState, ChangeEvent, FormEvent } from "react";
import useMessages from "../../hooks/useMessages";

function Input(){
    const { sendMessage } = useMessages();
    const charLimit = 1000;
    const [valid, setValid] = useState(true);
    const [question, setQuestion] = useState("Does Hiscox include waiver of subrogation?");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
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

    const inputClass = "w-full p-3 border-0 rounded outline-0";
    
    return (
        <div className="self-end justify-self-end w-full p-8 mt-auto bg-sky-900">
            <form action="#" onSubmit={onSubmit}>
                <input 
                    type="text"
                    onChange={onChange}
                    className={inputClass}
                    placeholder="Enter your question (max 1000 characters)"
                    value={question} />
            </form>
        </div>
    )
}

export default Input;