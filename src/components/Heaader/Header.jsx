import styles from "./Header.module.css";
import { RouteConst } from "../../common/RouteConst";
import "rsuite/dist/rsuite.min.css";
import React, {useContext, useEffect, useState} from "react";
import {Toggle} from "rsuite";
import {Link as Link1} from 'react-scroll';
import {Link as Link2, useLocation} from "react-router-dom"
import {editDataFirebase, editInfoFirebase} from "../API/firebaseCalls";
import {useDispatch, useSelector} from "react-redux";
import {getEditData} from "../actionCreator/actionLogin";
import isEditable from "../../context/context";

const Header = () => {
    const editData = useSelector(
        (state) => state.loginReducer.data
    )
    const dispatch = useDispatch();
const getEditDataThunk = () => dispatch(getEditData());

    const path = useLocation().pathname;
    const showEditBut = () => {
        switch (path) {
            case RouteConst.ADMIN:
                return true;
            default:
                return false;
        }
    };

    function toggleBut () {
        editData?.map((item) => {
            editDataFirebase(item.id,{
                info: document.querySelector("#info").innerHTML,
                experience: document.querySelector("#experience").innerHTML,
                education: document.querySelector("#educationFirst").innerHTML,
            })
        })
        setToggle({
            isEditable: !toggle.isEditable
        })
        let editField = document.querySelectorAll(".editableText");
        editField.forEach(element => element.contentEditable = toggle.isEditable );
    }

    const instanceNavBut = (
        <div className={styles.editMode}>
           <p>Edit</p> <Toggle onClick={toggleBut} />
        </div>
    );


useEffect(() => {
getEditDataThunk();
})

const {toggle, setToggle} = useContext(isEditable);

    // useEffect(() => {
    //     // if (toggle.isEditable)
    //     // console.log(toggle.isEditable)
    // }, [toggle])





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