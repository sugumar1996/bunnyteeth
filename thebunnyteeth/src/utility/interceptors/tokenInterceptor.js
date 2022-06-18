//import store from '../../redux/store/store';
import successHandler from "../successHandler/successHandler";

const tokenInterceptor = (response) => {
    return successHandler(response);
}

export default tokenInterceptor;