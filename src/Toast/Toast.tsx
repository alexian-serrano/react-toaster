import { FunctionComponent } from 'react';
import Close from '../Icons/Close';
import './Toast.css';

interface ToastProps {
  onClose?: () => void;
}

const Toast: FunctionComponent<ToastProps> = (props) => {
  const { onClose, children } = props;
  return (
    <div className="toast">
      {children}
      <Close className="close-icon" onClick={onClose} cursor="pointer" />
    </div>
  );
};

export default Toast;
