import { useState } from "react";

const ModalTrailer = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleVerClick = () => {
        setShowMessage(true);
    }

    const handleCloseClick = () => {
        setShowMessage(false);
    }

    return {
        showMessage,
        handleVerClick,
        handleCloseClick
    };
}

export default ModalTrailer;
