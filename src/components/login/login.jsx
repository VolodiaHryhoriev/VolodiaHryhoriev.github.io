import {Button, ButtonToolbar, Form} from "rsuite";
import {UsernameField, model, PasswordField} from "../RSUITE components/rsuiteComp"
import "rsuite/dist/rsuite.min.css";
import  styles from "./login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../actionCreator/actionLogin";
import {useEffect} from "react";
import {RouteConst} from "../../common/RouteConst";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const dispatch = useDispatch();
    const getLoginThunk = () => dispatch(getLogin());
    const login = useSelector((state) => state.loginReducer.login);
    const redirectedPath = RouteConst.ADMIN;
    const navigate = useNavigate();

    useEffect(() => {
        getLoginThunk();
    }, [])

        const loginCheck = (setAdmin) => {
        let userNameValue = document.querySelector("#name");
        let userPasswordValue = document.querySelector("#password");
        login.map((item) => {
            console.log(item)
                if (userNameValue.value === item.Username && userPasswordValue.value === item.Password) {
                    navigate(redirectedPath);
                    item.role === "admin"? localStorage.setItem("user", JSON.stringify({role: "admin"})) : console.log("you can't access this page");
                } else {
                    userNameValue.value = "";
                    userPasswordValue.value = "";
                    userNameValue.style.border = "1px solid red";
                    userPasswordValue.style.border = "1px solid red";
                    document.querySelector("#incorrect").style.display = "block";
                }
        });

    };



    return (
        <div>
        <Form className={styles.loginBlock} model={model}>
            <div className={styles.loginForm}>
                <h3>Please<span className={styles.textName}> complete login </span> form</h3>
                <UsernameField />
                <PasswordField />
                <p id="incorrect" className={styles.incorrect}>Login or password were incorrect</p>
                <ButtonToolbar>
                <Button className={styles.loginButton} appearance="primary" type="submit" onClick={loginCheck}>
                    Submit
                </Button>
                </ButtonToolbar>
            </div>
        </Form>
        </div>
    )
}
