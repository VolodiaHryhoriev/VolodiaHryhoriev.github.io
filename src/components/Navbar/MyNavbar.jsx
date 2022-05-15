import styles from "./MyNavbar.module.css";
import { Link } from "react-router-dom";
import { RouteConst } from "../../common/RouteConst";
import {Navbar, Nav, Dropdown} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import NavBarInstance from "rsuite/cjs/Navbar/NavbarBrand";
import React from "react";
import {instanceNavbar} from "../RSUITE components/rsuiteComp";


const MyNavbar = () => {
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

export default MyNavbar