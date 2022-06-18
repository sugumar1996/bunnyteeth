import axios from 'axios';
//import Axios from '../../config';
//import * as AuthActions from "../../redux/actions/index";
import { toastMsg } from '../utility';
import * as commonService from '../utility'

const handleAuthentication = async (error) => {
    // const config = error.config;
    // const token = storage.get("refresh_token", null);
    // Axios.defaults.headers.common["x-refreshtoken"] = token;
    // return await AuthActions.refreshToken().then(res => {
    //     config.headers.Authorization = `Bearer ${res.token}`;
    //     return Axios.request(config)
    // });
};

export default function errorHandler(error) {
    commonService.isLoading.onNext(false);
    if (axios.isCancel(error)) {
        return Promise.reject(error);
    }

    if (error.message === "Network Error") {
        toastMsg('Error connecting server. Please check your internet connection.', true);
        return Promise.reject(error.message);
    }

    const message = error.response && error.response.data.error ? error.response.data.error.message : error.response.data.message ? error.response.data.message : 'Seems like something went wrong!';
    switch (error.response.status) {
        case 400:
            if (message === "jwt expired") handleAuthentication(error);
            else if (message && message.toLowerCase() === "unauthorized") {
                // AuthActions.logout();
                toastMsg(message, true);
            } else {
                toastMsg(message, true);
            }
            break;
        case 401:
            if (message === "jwt expired") {
                return handleAuthentication(error);
            } else toastMsg(message, true);
            console.log('unauthorized, logging out ...');
            break;
        case 500:
            toastMsg(message, true);
            break;
        case 504:
            toastMsg('Sorry, could not access the external resource to refine the data for your request, please try again later!', true);
            break;
        case 700:
            toastMsg(message, true);
            break;
        case 704:
            toastMsg(message, true);
            break;
        default:
            // toastMsg(message ? message : 'Something went wrong', true);
            break;
    }
    return Promise.reject(error.response);
}
