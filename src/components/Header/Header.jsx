import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";

const Header = () => {
    return(
        <div className={styles.container}>
            <Link className={styles.link} to={RouteConst.CV}>
                CV
            </Link>
        </div>
    )
}

export default Header