import { useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import usePDF from '../../hooks/usePDF';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

function PdfContainer(){
    const pdfUrl = "https://prosper-assist-llm.s3.amazonaws.com/prosper-conversations/hiscox_gl_fe_challenge.pdf";
    const pdfNavigation = pageNavigationPlugin();

    const {currentPage} = usePDF();
    
    useEffect(() => {
        pdfNavigation.jumpToPage(currentPage ?? 0);
    }, [currentPage])

    return (
        <div className="pdf border-r-2 p-0 h-screen m-0">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} initialPage={currentPage} plugins={[pdfNavigation]} />
            </Worker>
        </div>
    )
}

export default PdfContainer;
