import {
  StyledModal,
  StyledModalContainer,
  StyledModalOverlay,
} from "./Modal.styles";
import { IModalProps } from "./Modal.types";

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <StyledModalContainer isOpen={isOpen}>
      <StyledModalOverlay onClick={() => setIsOpen(false)} isOpen={isOpen} />
      <StyledModal isOpen={isOpen}>{children}</StyledModal>
    </StyledModalContainer>
  );
};

export default Modal;
