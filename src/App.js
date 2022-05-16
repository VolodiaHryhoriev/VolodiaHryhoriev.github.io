import './App.css';
import VolodymyrHryhorievPage from "./pages/VolodymyrHryhorievPage"
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { RouteConst } from "./common/RouteConst";
import { Provider } from "react-redux";
import CV from "./pages/CV"
import Header from "./components/Heaader/Header"
import {Login} from "./components/login/login"

function App() {
    const path = useLocation().pathname;
    const showNavbar = () => {
        switch (path) {
            case RouteConst.CV:
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
        </Routes>
    </div>
  );
}

const AppContainer = () => (
    // <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </Provider>
);

export default AppContainer;
