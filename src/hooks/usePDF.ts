import { useContext } from 'react';
import MessagesContext from '../context/MessagesContext';

function usePDF(){
    const context = useContext(MessagesContext);
    return { currentPage: context?.currentPage, setCurrentPage: context?.setCurrentPage }
}

export default usePDF;
