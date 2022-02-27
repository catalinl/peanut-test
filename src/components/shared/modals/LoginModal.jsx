import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const LoginModal = ({ title, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-wrapper">
                <h2>{title}</h2>
                <i onClick={onClose}>Close</i>
                <button>Login</button>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

LoginModal.prototypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default LoginModal;
