import styles from "./CV.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faReact, faGithub, faBootstrap, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {instanceForm} from "../RSUITE components/rsuiteComp";
import {ButtonToolbar, Form} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import {useEffect, useState} from "react";
import {setImgFirebase, uploadFileToFB} from "../API/firebaseCalls";
import {getEditData} from "../actionCreator/actionLogin";
import {useDispatch, useSelector} from "react-redux";
import {useContext} from "react";
import isEditable from "../../context/context";
import {Route, useNavigate} from "react-router-dom";
import {RouteConst} from "../../common/RouteConst";

const CV = () => {
    const {toggle, setToggle} = useContext(isEditable);
    const [img, setImg] = useState();
    const dispatch = useDispatch();
    const getEditDataThunk = () => dispatch(getEditData());
    const editData = useSelector((state) => state.loginReducer.data);
    const setImage = useSelector((state) => state.loginReducer.image);
    const navigate = useNavigate();


    const uploadImg = (e) => {
        e.preventDefault();
        const imgFile = e.target[0].files[0];
        if (!imgFile) {
            return
        }
        uploadFileToFB(imgFile, setImg);
    }



    useEffect(() => {
        setImgFirebase(editData, img)
    }, [img])

    useEffect(() => {
        getEditDataThunk();
    }, [])

    useEffect(() => {
        if (toggle.isEditable) {
            document.querySelector("#disableBut").style.display = "none"
        } else {
            document.querySelector("#disableBut").style.display = "block"
        }
    }, [toggle])

    const navigateToShop = () => {
        navigate(RouteConst.SHOP)
    }


    return (
        <div className={styles.container}>
            <div id="main" className={styles.main}>
                <div className={styles.mainContainer}>
                <div className={styles.mainText}>
                    <h4 id="editableText">Hello there,</h4>
                    <h1 spellCheck="false">I am <br/> Volodymyr Hryhoriev</h1>
                    <p><ReactTypingEffect className={styles.zxc} text={"Front-end Developer."}/></p>
                </div>
                </div>
                    <div>
                    <Tilt className="Tilt" options={{max: 20, scale: 1.01,}}><img src={ img === undefined ? editData.map((item => item.image)): img}
                        alt="profile Image" className={styles.profileLogo}/></Tilt>

                    <form action="" onSubmit={uploadImg}>
                        <ButtonToolbar className={styles.editImgBut} id="disableBut">
                            <input type="file"/>
                            <button type="submit" >Set Image</button>
                        </ButtonToolbar>
                    </form>
                </div>
            </div>

            <div id="aboutMe" className={styles.aboutMe}>
                <h1>A<span className={styles.textName}>bout m</span>e</h1>
                <div className={styles.aboutMeBlock}>
                    <div className={styles.info}>
                        <h3>Info</h3>
                        <p id="info" className="editableText" spellCheck="false">
                            {editData.map((item => item.info))}
                        </p>
                    </div>
                    <div className={styles.experience}>
                        <h3>Experience</h3>
                        <p id="experience" className="editableText"  spellCheck="false">{editData.map((item => item.experience))}</p>
                    </div>
                    <div className={styles.education}>
                        <h3>Education</h3>
                        <p id="educationFirst" className="editableText" spellCheck="false">{editData.map((item => item.education))}</p>
                    </div>
                </div>
            </div>

            <div id={"skills"} className={styles.skills} >
                <h1>S<span className={styles.textName}>kill</span>s</h1>
                <div className={styles.skillsIcons}>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faHtml5} /><h3>HTML5</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faCss3Alt} /><h3>CSS3</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faBootstrap} /><h3>Bootstrap</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faReact} /><h3>React</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faCode} /><h3>TypeScript</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faGithub} /><h3>GitHub</h3></div>
                </div>
            </div>
            <div id="contact" className={styles.contact}>
                <h1>C<span className={styles.textName}>ontac</span>t</h1>
                <Form>
                    <div className={styles.contactInp}>{instanceForm}</div>
                </Form>
            </div>
            <div className={styles.footer}>
                <h3>Vol<span className={styles.textName}>odymyr Hryho</span>riev</h3>
                <div className={styles.footerIcons}>
                    <a href="https://www.linkedin.com/in/volodymyr-hryhoriev-158100215/"><FontAwesomeIcon className={styles.iconElement} icon={faLinkedinIn} /></a>
                    <a href="https://github.com/VolodiaHryhoriev"><FontAwesomeIcon className={styles.iconElement} icon={faGithub} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100011629595872"><FontAwesomeIcon className={styles.iconElement} icon={faFacebookF} /></a>
                </div>
                <p>@ 2022 All Rights Reserved</p>
            </div>
        </div>
    )
}

export default CV
