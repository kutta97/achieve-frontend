import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface OverlayProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Overlay = ({
  isOpen = false,
  onClose,
  children,
}: OverlayProps) => {
  const handleExternalClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <OverlayWrapper onClick={handleExternalClick}>
            <OverlayModal>{children}</OverlayModal>
          </OverlayWrapper>,
          document.querySelector('#modal-root') as HTMLDivElement
        )}
    </>
  );
};

export const OverlayWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;

  background: ${({ theme }) => theme.colors.ShadeGray30}50;
  align-items: center;
  justify-content: center;
`;

export const OverlayModal = styled.div`
  position: fixed;
  z-index: 20;
`;
