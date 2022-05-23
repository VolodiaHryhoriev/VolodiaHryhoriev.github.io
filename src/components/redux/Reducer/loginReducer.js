import {actionsLoginTypes} from "../../actionCreator/actionLogin";
const initialState = {
    login: [],
    data: [],
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
        case actionsLoginTypes.SET_DATA:
            return {
                ...state,
                data: action.payload,
                errorUsers: ""
            }
        default:
            return state
    }

}

export default loginReducer;