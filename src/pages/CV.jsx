import styles from "./CV.module.css"
import profileImg from "./../images/profileImg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faReact, faGithub, faBootstrap, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {instanceForm} from "../components/RSUITE components/rsuiteComp";
import {Form} from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const CV = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.mainText}>
                    <h4>Hello there,</h4>
                <h1>I am <br/> Volodymyr Hryhoriev</h1>
                    <h3><ReactTypingEffect text={"Front-end Developer."}/></h3>
                </div>
                <Tilt className="Tilt" options={{max: 20, scale: 1.01,}}><img src={profileImg} alt="profile Image" className={styles.profileLogo}/></Tilt>
            </div>

            <div id="aboutMe" className={styles.aboutMe}>
                <h1>A<span className={styles.textName}>bout m</span>e</h1>
                <div className={styles.aboutMeBlock}>
                    <div className={styles.info}>
                        <h3>Info</h3>
                        <p>I'm a person who has a big interest in programming and tries to improve skills, thats why I am  ready to learn and gain experience.
                            Frontend developer, with experience in SPA using React, Redux, Firebase, HTML, CSS, JS.
                            Also, I really love the teamwork, as in this way you can achieve the final success in minimal time.</p>
                    </div>
                    <div className={styles.experience}>
                        <h3>Experience</h3>
                        <p>React development using redux, react-redux, react-router-dom, redux-thunk Axios, React Suite. Bug fixing, refactoring into TypeScript,
                            login form creation using Firebase.</p>
                    </div>
                    <div className={styles.education}>
                        <h3>Education</h3>
                        <p>Front-end Development <br/>
                            (React / Redux / TypeScript / Firebase) in Logos IT Academy 2021-2022.</p>
                        <p>National University “Lviv Polytechnic” Incomplete higher education, Faculty of Transport Technology.</p>
                    </div>
                </div>
            </div>

            <div className={styles.skills} >
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
                    <Form.Group>
                        {instanceForm}
                    </Form.Group>
                </Form>
            </div>
            <div className={styles.footer}>
                <h3>Vol<span className={styles.textName}>odymyr Hryho</span>riev</h3>
                <div className={styles.footerIcons}>
                    <a href="https://www.linkedin.com/in/volodia-hryhoriev-158100215/"><FontAwesomeIcon className={styles.iconElement} icon={faLinkedinIn} /></a>
                    <a href="https://github.com/VolodiaHryhoriev"><FontAwesomeIcon className={styles.iconElement} icon={faGithub} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100011629595872"><FontAwesomeIcon className={styles.iconElement} icon={faFacebookF} /></a>
                </div>
            </div>
        </div>
    )
}

export default CV