import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import loginReducer from "./Reducer/loginReducer";

const rootReducer = combineReducers({
     loginReducer: loginReducer,
})
// type rootReducerType = typeof rootReducer;

// export type AppStateType = ReturnType<rootReducerType>;
//
// export type PropertiesTypes<T> = T extends { [key: string]: infer U }
//     ? U
//     : never;

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;