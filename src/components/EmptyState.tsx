import InfoIcon from "./icons/InfoIcon";
function EmptyState(){
    return (
        <div className="text-center w-6/12 mt-20 self-center items-center justify-center flex flex-col">
            <InfoIcon size={40} />
            <h2 className="text-3xl font-semibold mt-2">How to use</h2>
            <p className="mt-2">
                Type your question in the field bellow, the AI assistant will answer it based on the information present in the document.
            </p>
        </div>
    )
}

export default EmptyState;