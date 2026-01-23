import { createContext, useState } from 'react';
import { Toast } from './Toast';

export const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success',
  });

  const showToast = (message, type = 'success') => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast.show && (
        <Toast message={toast.message} type={toast.type} />
      )}
    </ToastContext.Provider>
  );
};
