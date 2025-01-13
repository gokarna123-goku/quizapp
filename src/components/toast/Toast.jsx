import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Configure Toast
// toast.configure();

export const showToast = (message, type = "success") => {
    toast[type](message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
};
