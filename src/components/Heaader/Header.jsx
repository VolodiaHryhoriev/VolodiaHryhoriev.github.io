import styles from "./Header.module.css";
import { RouteConst } from "../../common/RouteConst";
import "rsuite/dist/rsuite.min.css";
import React, {useState} from "react";
import {Button, ButtonToolbar, Toggle} from "rsuite";
import {Link as Link1} from 'react-scroll';
import {Link as Link2, useLocation} from "react-router-dom"

const Header = () => {
    const path = useLocation().pathname;
    const showEditBut = () => {
        switch (path) {
            case RouteConst.ADMIN:
                return true;
            default:
                return false;
        }
    };

    const instanceNavBut = (
        <div className={styles.editMode}>
           <p>Edit</p> <Toggle onClick={toggleBut} />
        </div>
    );

    const [toggle, setToggle] = useState({
        isEditable: true,
    })
    function toggleBut () {
        setToggle({
            isEditable: !toggle.isEditable
        })
        let editField = document.querySelectorAll(".editableText");
         console.log(toggle.isEditable)
        return editField.forEach(element => element.contentEditable = toggle.isEditable )
    }

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
                    About
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
                    {showEditBut() && instanceNavBut}
                <Link2 className={styles.logButt} to={RouteConst.LOGIN}>
                    Login
                </Link2>
                </div>
            </nav>
        </div>
    );


}

export default Header