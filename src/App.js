import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { RouteConst } from "./common/RouteConst";
import { Provider } from "react-redux";
import CV from "./components/CV/CV"
import Header from "./components/Heaader/Header"
import Admin from "./components/admin/Admin"
import {Login} from "./components/login/login"
import NotFoundPage from "./components/404/NotFoundPage";
import store from "./components/redux/store";
import PrivateRoute from "./components/HOC/PrivateRoute";
import {editDataFirebase} from "./components/API/firebaseCalls";
import {useContext, useState} from "react";
import isEditable from "../src/context/context";

function App() {
    const user = JSON.parse(localStorage.getItem("user"));
    const path = useLocation().pathname;
    const {toggle, setToggle} = useContext(isEditable);

    const showNavbar = () => {
        switch (path) {
            case RouteConst.CV:
            case RouteConst.ADMIN:
                return true;
            default:
                return false;
        }
    };

    return (
    <div className="App">
        {showNavbar() && <Header />}
        <Routes>
            <Route path={RouteConst.CV} element={<CV />} />
            <Route path={RouteConst.LOGIN} element={<Login />} />

            <Route element={<PrivateRoute
                isAllowed={user?.role === "admin"}
            />}>
            <Route path={RouteConst.ADMIN} element={<Admin />} />
        </Route>

            <Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />




            <Route path="*" element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />} />
        </Routes>
    </div>
  );
}

const AppContainer = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

export default AppContainer;
