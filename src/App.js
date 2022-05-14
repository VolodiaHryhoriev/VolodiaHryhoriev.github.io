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
import Header from "./components/Header/Header"

function App() {
    const path = useLocation().pathname;
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path={RouteConst.CV} element={<CV />} />
            {/*<Route path={RouteConst.LOGIN} element={} />*/}
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
