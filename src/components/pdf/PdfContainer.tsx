import { useEffect, useContext } from 'react';
import MessagesContext from '../../context/MessagesContext';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

function PdfContainer(){
    const pdfUrl = "https://prosper-assist-llm.s3.amazonaws.com/prosper-conversations/hiscox_gl_fe_challenge.pdf";
    const pdfNavigation = pageNavigationPlugin();

    const context = useContext(MessagesContext);
    
    useEffect(() => {
        pdfNavigation.jumpToPage(context?.currentPage ?? 0);
    }, [context?.currentPage])

    return (
        <div className="pdf border-r-2 p-0 h-screen m-0">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} initialPage={context?.currentPage} plugins={[pdfNavigation]} />
            </Worker>
        </div>
    )
}

export default PdfContainer;
