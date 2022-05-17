import styles from "./Header.module.css";
import { RouteConst } from "../../common/RouteConst";
import "rsuite/dist/rsuite.min.css";
import React from "react";
import {instanceNavBut} from "./../RSUITE components/rsuiteComp"
import {ButtonToolbar} from "rsuite";
import {Link as Link1, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import {Link as Link2} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <nav>
                <div className={styles.navLeft}>
                    <Link1 className={styles.link} to="main"
                          spy={true}
                          smooth={true}
                          offset={1}
                          duration={500}>
                        Home
                    </Link1>
                <Link1 className={styles.link} to="skills"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>
                    Skills
                </Link1>
                <Link1 className={styles.link} to="aboutMe"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>
                    About Me
                </Link1>
                <Link1 className={styles.link} to="contact"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>
                    Contact
                </Link1>
                </div>
                <div className={styles.navRight}>
                    <ButtonToolbar>{instanceNavBut}</ButtonToolbar>
                <Link2 className={styles.logButt} to={RouteConst.LOGIN}>
                    Login
                </Link2>
                </div>
            </nav>
        </div>
    );


}

export default Header