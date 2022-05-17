import styles from "./Header.module.css";
import { RouteConst } from "../../common/RouteConst";
import "rsuite/dist/rsuite.min.css";
import React from "react";
import {instanceNavBut} from "./../RSUITE components/rsuiteComp"
import {ButtonToolbar} from "rsuite";
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

const Header = () => {
    return (
        <div>
            <nav>
                <div className={styles.navLeft}>
                    <Link className={styles.link} to="main"
                          spy={true}
                          smooth={true}
                          offset={1}
                          duration={500}>
                        Home
                    </Link>
                <Link className={styles.link} to="skills"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>
                    Skills
                </Link>
                <Link className={styles.link} to="aboutMe"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>
                    About Me
                </Link>
                <Link className={styles.link} to="contact"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}>
                    Contact
                </Link>
                </div>
                <div className={styles.navRight}>
                    <ButtonToolbar>{instanceNavBut}</ButtonToolbar>
                <Link className={styles.logButt} to={RouteConst.LOGIN}>
                    Login
                </Link>
                </div>
            </nav>
        </div>
    );


}

export default Header