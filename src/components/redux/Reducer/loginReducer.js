import {actionsLoginTypes} from "../../actionCreator/actionLogin";
const initialState = {
    login: [],
    errorLogin: "",
}

const loginReducer = (state=initialState, action) => {
    switch (action.type){
        case actionsLoginTypes.SET_LOGIN:
            return {
                ...state,
                login: action.payload,
                errorUsers: "",
            };
        case actionsLoginTypes.SET_ERROR:
            return {
                ...state,
                errorUsers: action.payload
            }
        default:
            return state
    }

}

export default loginReducer;