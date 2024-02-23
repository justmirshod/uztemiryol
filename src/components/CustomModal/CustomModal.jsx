import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function CustomModal({
  children,
  isOpen,
  onRequestClose,
  style,
  className,
  overlayClassName,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={style}
      onRequestClose={onRequestClose}
      className={className}
      overlayClassName={overlayClassName}
    >
      {children}
    </ReactModal>
  );
}

export default CustomModal;
