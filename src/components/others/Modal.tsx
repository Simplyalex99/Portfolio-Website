import React from 'react';
import { CloseSVG } from '../svg/common/Close';
export const Modal = ({
  children,
  closeHandler,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  closeHandler: () => void;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        background: ' none',
      }}
    >
      <div
        style={{
          height: 'auto',
          width: 'auto',
          padding: '2em',
          maxWidth: '800px',
          backgroundColor: 'white',
          boxShadow: '0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)',
          borderRadius: '15px',
          zIndex: 999,
        }}
        className={className}
      >
        <div style={{ display: 'flex' }}>
          <CloseSVG style={{ cursor: 'pointer' }} onClick={closeHandler} />
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
