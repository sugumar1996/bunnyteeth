import * as API from 'api/authAPI'
import { loginPending, loginSuccessful, logoutUserSuccessfull } from '.'
import * as commonService from 'utility/utility'
import storage from 'utility/storage';
import { routes } from 'utility/constants/constants';
import { ActionTypes } from 'redux/reducers/actionType';

export const getSinglePost = (id) => dispatch => dispatch({
    type: ActionTypes.SINGLE_POST,
    payload: API.getSinglePost(id)
        .then(response => { debugger;
            return response.data;
        }).catch(error => { debugger;
            return error;
        })
})
export const getCategoriesList = () => dispatch => dispatch({
    type: ActionTypes.GET_ALL_CATEGORIES,
    payload: API.getCategoriesList()
        .then(response => {
            return response.data;
        }).catch(error => {
            return error;
        })
})
