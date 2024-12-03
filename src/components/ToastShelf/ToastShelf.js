import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastList, setToastList }) {
  const removeToast = (id) => {
    setToastList(toastList.filter((toastListItem) => toastListItem.id !== id));
  };

  if (toastList.length === 0) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
      {toastList.map(({ message, id, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            handleClose={() => {
              removeToast(id);
            }}
            variant={variant}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
