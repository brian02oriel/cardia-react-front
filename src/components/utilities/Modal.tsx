
import React, { useEffect } from 'react';
type IModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  useEffect(() => {
    const handleEscape = (e: any) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 h-[90vh] max-h-[90vh] overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Modal;
