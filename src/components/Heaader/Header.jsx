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
        <div>
           Edit Mode <Toggle onClick={toggleBut} />
        </div>
    );

 // const toggleEdit = () => {
     // if (document.querySelectorAll(".editableText")[0].contentEditable === true) {
     //     return false
     // } else {
     //     return true
     // }
     // switch () {
     //    case
     // }
 // }
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
        // toggle
        // console.log(editField)
        // editField.forEach(element => console.log(element.contentEditable ) )
        // editField.forEach(element => {
        //     if(element.contentEditable) {
        //         console.log('element is editable')
        //         element.contentEditable = true;
        // }
        //     else {
        //         console.log('element isnt editable')
        //         element.contentEditable = false;
        // }
        // })
            // ?  console.log(true) : console.log(false) )
        // if (editField.forEach(element => element.contentEditable === false)) {
        //     console.log('element')
        //      editField.forEach(element => element.contentEditable = true)
        // } else {
        //     console.log('else');
        //     document.querySelectorAll(".editableText").forEach(element => element.contentEditable = false)
        // }
        // document.querySelectorAll(".editableText").forEach(element =>  console.log(element.contentEditable))
        // console.log(document.querySelectorAll(".editableText").forEach(element => element.contentEditable === true ? true : false))
        // document.querySelectorAll(".editableText").forEach(element =>  console.log(element.contentEditable))
        // === true ? console.log('first') : console.log("second"))
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