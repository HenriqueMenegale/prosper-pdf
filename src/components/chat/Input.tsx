import { useState, ChangeEvent, FormEvent } from "react";
import useMessages from "../../hooks/useMessages";

function Input(){
    const { sendMessage } = useMessages();
    const charLimit = 1000;
    const [valid, setValid] = useState(true);
    // test question: Does Hiscox include waiver of subrogation?
    const [question, setQuestion] = useState("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(question.length > charLimit) return;

        sendMessage(question);
        setQuestion("");
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
        if(e.target?.value?.length > charLimit){
            setValid(false);
            console.log("invalid");
            return;
        }
        setValid(true);
    }

    let inputClass = "w-full p-3 border-0 rounded outline-0 " + (!valid ? "border-red-500 border-2" : '');

    return (
        <div className="self-end justify-self-end w-full p-8 mt-auto bg-sky-900">
            <form action="#" onSubmit={onSubmit}>
                <input 
                    type="text"
                    onChange={onChange}
                    className={inputClass}
                    placeholder={`Enter your question (max ${charLimit} characters)`}
                    value={question} />
            </form>
        </div>
    )
}

export default Input;