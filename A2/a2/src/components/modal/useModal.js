import { useState } from "react";

//Code taken from: https://upmostly.com/tutorials/modal-components-react-custom-hooks
const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export default useModal;