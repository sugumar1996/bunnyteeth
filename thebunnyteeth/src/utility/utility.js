import jwtDecode from 'jwt-decode';
import { store } from 'react-notifications-component';
import { BehaviorSubject } from "rx";

export const isLoading = new BehaviorSubject(false);

export const isDialogOpen = new BehaviorSubject(false);

export const baseImagePath = (path_url) => {
    return require(`../assets/images/${path_url}`)
}

export const isTokenValid = (token) => {
    const data = jwtDecode(token);
    let Valid = true;

    if (new Date() < new Date(parseInt(data.exp * 1000))) {
        Valid = true;
    } else {
        Valid = false
    }
    return Valid;
}

// for production removing console logs
export const removeConsoleLog = () => {
    function emptyfunc() { }
    console.log = emptyfunc;
    console.warn = emptyfunc;
    console.error = emptyfunc;
}

export const toastMsg = (msg, error = false, autoClose = 2000) => {
    if (error) {
        store.addNotification({
            title: "Error",
            message: msg,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: autoClose,
                //   onScreen: true,
                showIcon: true
            }
        });
    } else {
        store.addNotification({
            title: "Success",
            message: msg,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: autoClose,
                //   onScreen: true,
                showIcon: true
            }
        });
    }
}