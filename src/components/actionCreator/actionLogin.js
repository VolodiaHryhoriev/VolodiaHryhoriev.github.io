// import {MyInfo, UserInterface, UserThunkType} from "../../common/types";
import {getLoginFirebase} from "../API/firebaseCalls"



export const actionsLoginTypes = {
    SET_LOGIN: "SET_LOGIN",
    SET_ERROR: "SER_ERROR",
}

export const actionsLogin = {
    setLogin: (login) => ({type:actionsLoginTypes.SET_LOGIN, payload: login}),
    setError: (error) => ({type:actionsLoginTypes.SET_ERROR, payload: error,}),
};

export const getLogin = () => async (dispatch) => {
    getLoginFirebase(dispatch);
}
