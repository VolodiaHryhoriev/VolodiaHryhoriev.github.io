// import {MyInfo, UserInterface, UserThunkType} from "../../common/types";
import {getInfoFirebase, getLoginFirebase} from "../API/firebaseCalls"



export const actionsLoginTypes = {
    SET_LOGIN: "SET_LOGIN",
    SET_ERROR: "SET_ERROR",
    SET_DATA: "SET_DATA",
}

export const actionsLogin = {
    setLogin: (login) => ({type:actionsLoginTypes.SET_LOGIN, payload: login}),
    setEditData: (data) => ({type:actionsLoginTypes.SET_DATA, payload: data}),
    setError: (error) => ({type:actionsLoginTypes.SET_ERROR, payload: error,}),
};

export const getLogin = () => async (dispatch) => {
    getLoginFirebase(dispatch);
}

export const getEditData = () => async (dispatch) => {
    getInfoFirebase(dispatch);
}
