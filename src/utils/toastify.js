import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (msg) => {
  toast.success(msg, {autoClose: 1500});
}

export const notifyError = (msg) => {
  toast.error(msg, {autoClose: 1500})
}
