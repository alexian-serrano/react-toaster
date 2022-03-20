import { useContext } from 'react';
import { ToasterContext } from './ToastProvider';

const useToaster = () => useContext(ToasterContext);

export default useToaster;
