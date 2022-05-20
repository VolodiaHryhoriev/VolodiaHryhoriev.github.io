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

function App() {
    const path = useLocation().pathname;
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
            <Route path={RouteConst.ADMIN} element={<Admin />} />
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
