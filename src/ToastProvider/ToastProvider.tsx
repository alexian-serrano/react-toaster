import { createContext, FunctionComponent, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Toast from '../Toast/Toast';

import './ToastProvider.css';
import { toaster } from './ToastProvider.stories';

interface ToasterContext {
  add: (message: string) => void;
  remove: (id: number) => void;
}
export const ToasterContext = createContext<ToasterContext>({
  add: () => {
    console.error('A real toaster context implementation should be provided');
  },
  remove: () => {
    console.error('A real toaster context implementation should be provided');
  },
});

type ToastContent = {
  id: number;
  message: string;
};

const ToastProvider: FunctionComponent = ({ children }) => {
  const idRef = useRef(0);
  const [toasts, setToasts] = useState<ToastContent[]>([]);

  const value = useMemo<ToasterContext>(
    () => ({
      add: (message: string) => {
        // idRef.current++ caused strange double increment of id (1, 3, 5, 7, ...)
        setToasts((toasts) => [...toasts, { id: idRef.current, message }]);
        idRef.current += 1;
      },
      remove: (id: number) => {
        setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
      },
    }),
    []
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <ToasterContext.Provider value={value}>
      {toasts.length
        ? createPortal(
            <div className="toast-container">
              {toasts.map((toast) => (
                <Toast key={toast.id} onClose={() => value.remove(toast.id)}>
                  {`${toast.message} ${toast.id}`}
                </Toast>
              ))}
            </div>,
            document.body
          )
        : null}
      {children}
    </ToasterContext.Provider>
  );
};

export default ToastProvider;
