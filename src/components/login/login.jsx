import {Button, Form } from "rsuite";
import {UsernameField, model, PasswordField} from "../RSUITE components/rsuiteComp"
import "rsuite/dist/rsuite.min.css";
import  styles from "./login.module.css"


export const Login = () => {
    return (
        <Form className={styles.loginBlock} model={model}>
            <div className={styles.loginForm}>
                <h3>Please<span className={styles.textName}> complete login </span> form</h3>
                <UsernameField />
                <PasswordField />
                <Button className={styles.loginButton} appearance="primary" type="submit">
                    Submit
                </Button>
            </div>

        </Form>

    )
}