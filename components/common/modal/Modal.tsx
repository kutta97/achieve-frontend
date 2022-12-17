import { Overlay, OverlayProps } from '@components/common/modal/Overlay';
import Image from 'next/image';
import styled from 'styled-components';

interface Props extends OverlayProps {
  title?: string;
  width: number;
}

export const Modal = ({ title, width, ...props }: Props) => {
  const handleClose = () => {
    props.onClose?.();
  };

  return (
    <Overlay {...props}>
      <ModalStyled width={width}>
        <div className="modal-top">
          {title && <span className="title">{title}</span>}
          <span className="close" onClick={handleClose}>
            <Image
              src="/assets/icon/modal/icon_modal_close.svg"
              alt=""
              width={24}
              height={24}
            />
          </span>
        </div>
        {props.children}
      </ModalStyled>
    </Overlay>
  );
};

export const ModalStyled = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  padding: 34px 42px;

  background: ${({ theme }) => theme.colors.BasicWhite};
  box-shadow: 0 10px 60px #c8d8ec;
  border-radius: 30px;

  .modal-top {
    display: flex;

    .title {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }

    .close {
      margin-left: auto;
      cursor: pointer;
    }
  }
`;
