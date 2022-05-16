import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import "rsuite/dist/rsuite.min.css";
import React from "react";


const Header = () => {
    return (
        <div>
            <nav>
                <div className={styles.navLeft}>
                    <Link className={styles.link} to={RouteConst.CV}>
                        Home
                    </Link>
                <Link className={styles.link} to={"#"}>
                    Skills
                </Link>
                <Link className={styles.link} to={"#"}>
                    About Me
                </Link>
                <Link className={styles.link} to={"#"}>
                    Contact
                </Link>
                </div>
                <div className={styles.navRight}>
                <Link className={styles.logButt} to={RouteConst.LOGIN}>
                    Login
                </Link>
                </div>
            </nav>
        </div>
    );


}

export default Header