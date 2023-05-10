import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const options = {
    autoClose: 2000,
    theme: "colored",
}

export const SuccessNotification = (message) => {
    toast.success(message,options)
}

export const InfoNotification = (message) => {
    toast.info(message,options)
}

export const ErrorNotification = (message) => {
    toast.error(message,options)
}

export const WarnNotification = (message) => {
    toast.warn(message,options)
}