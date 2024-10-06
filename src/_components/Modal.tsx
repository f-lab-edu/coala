import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title: string;
  children: ReactNode;
  submitLabel?: string;
};

export const Modal = ({ isOpen, onClose, onSubmit, title, children, submitLabel = 'Submit' }: ModalProps) => {
  return (
    <>
      <input type="checkbox" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal">
        <div className="modal-box">
          <h2 className="mb-4 text-xl font-bold">{title}</h2>
          {children}
          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>
              취소
            </button>
            {onSubmit && (
              <button type="button" className="btn btn-primary" onClick={onSubmit}>
                {submitLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
