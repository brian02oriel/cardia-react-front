import { useEffect, type HTMLAttributes } from "react";
import { Close } from "../utilities/Icons";

type IModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalHeader = ({ isOpen, onClose, children }: IModalProps) => {
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
        <div className="flex items-start justify-center w-full gap-2 p-4">
            <div className="flex flex-col w-full">
                {children}
            </div>
            <div className="w-fit justify-self-end">
                <Close width={30} height={30} onClick={onClose} className="cursor-pointer"/> 
            </div>
        </div>
    )
}

export default ModalHeader;