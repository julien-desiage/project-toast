import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const addToast = ({ message, variant }) => {
    setToastList([
      ...toastList,
      {
        message,
        variant,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const removeToast = (id) => {
    setToastList(toastList.filter((toastListItem) => toastListItem.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toastList, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
