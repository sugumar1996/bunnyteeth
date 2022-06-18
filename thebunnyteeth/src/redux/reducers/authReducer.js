import { createReducer } from 'redux-act';
import storage from 'utility/storage';
import * as actions from '../actions/auth/index'
import { ActionTypes } from '../../../src/redux/reducers/actionType';

const user = storage.get('user', null)
const token = storage.get('token', null)
const refresh_token = storage.get('refresh_token', null)

export const initialState = {
    token: token,
    refresh_token: refresh_token,
    user: user,
    isLoading: false,
    singlePostData: [],
    categories: [],
    data: [],
    categories_list: [],

}

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SINGLE_POST_PENDING:
            return updateObject(state, { isLoading: true, data: {} })
        case ActionTypes.SINGLE_POST_FULFILLED: debugger;
            return updateObject(state, { isLoading: false, data: action.payload })

        case ActionTypes.GET_ALL_CATEGORIES_PENDING:
            return updateObject(state, { isLoading: true })
        case ActionTypes.GET_ALL_CATEGORIES_FULFILLED: debugger;
            return updateObject(state, { isLoading: false, categories_list: action.payload})
        default: return state;
    }
}