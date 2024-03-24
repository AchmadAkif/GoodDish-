import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = (msg) => {
  toast.success(msg, {autoClose: 1500});
}

const notifyError = (msg) => {
  toast.error(msg, {autoClose: 1500})
}

export {notifySuccess, notifyError}
