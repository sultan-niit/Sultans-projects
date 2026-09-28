import React from 'react';
import { useModalState } from '../components/ModalContext';

export default function ToastNotification() {
  const { toastMessage } = useModalState();

  if (!toastMessage) return null;

  return (
    <div className="clincore-toast-notification">
      <i className="bi bi-check-circle-fill toast-icon"></i>
      <span className="toast-text">{toastMessage.message}</span>
    </div>
  );
}


