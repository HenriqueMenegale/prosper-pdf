import InfoIcon from "./icons/InfoIcon";
function EmptyState(){
    return (
        <div className="text-center w-6/12 self-center justify-self-center mt-20">
            <InfoIcon />
            <h2 className="text-3xl font-semibold">How to use</h2>
            <p className="mt-2">
                Type your question in the field bellow, the AI assistant will answer it based on the information present in the document.
            </p>
        </div>
    )
}

export default EmptyState;