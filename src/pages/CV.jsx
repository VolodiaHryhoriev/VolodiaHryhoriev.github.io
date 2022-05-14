import styles from "./CV.module.css"
import profileImg from "./../images/profileImg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faReact, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons'

const CV = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
            <div className={styles.profileLogo}>
                <img src={profileImg} alt="profile Image" className={styles.profileLogo}/>
            </div>
            </div>
            <div className={styles.skills} >
                <h1>S<span className={styles.blockHeader}>kill</span>s</h1>
                <div className={styles.skillsIcons}>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faHtml5} /><h3>HTML5</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faCss3Alt} /><h3>CSS3</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faBootstrap} /><h3>Bootstrap</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faReact} /><h3>React</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faCode} /><h3>TypeScript</h3></div>
                    <div><FontAwesomeIcon className={styles.iconElement} icon={faGithub} /><h3>GitHub</h3></div>
                </div>
            </div>
            <div className={styles.aboutMe}>
                <h1 className={styles.blockHeader}>About me</h1>
            </div>
            <div className={styles.contact}></div>
            <div className={styles.footer}></div>
        </div>
    )
}

export default CV