import {getImageFirebase, getInfoFirebase, getLoginFirebase} from "../API/firebaseCalls"



export const actionsLoginTypes = {
    SET_LOGIN: "SET_LOGIN",
    SET_ERROR: "SET_ERROR",
    SET_DATA: "SET_DATA",
    SET_IMAGE: "SET_IMAGE",
    SET_EDIT_MODE: "SET_EDIT_MODE"
}

export const actionsLogin = {
    setLogin: (login) => ({type:actionsLoginTypes.SET_LOGIN, payload: login}),
    setEditData: (data) => ({type:actionsLoginTypes.SET_DATA, payload: data}),
    setImage: (image) => ({type:actionsLoginTypes.SET_IMAGE, payload: image}),
    setEditMode: (isEditable) => ({type: actionsLoginTypes.SET_EDIT_MODE, payload: isEditable}),
    setError: (error) => ({type:actionsLoginTypes.SET_ERROR, payload: error,}),
};

export const getLogin = () => async (dispatch) => {
    getLoginFirebase(dispatch);
}

export const getEditData = () => async (dispatch) => {
    getInfoFirebase(dispatch);
}

export const getImage = () => async (dispatch) => {
    getImageFirebase(dispatch);
}

export const getEditMode = () => (dispatch) => {

}