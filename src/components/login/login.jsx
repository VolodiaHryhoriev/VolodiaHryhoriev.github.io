import {Button, Form } from "rsuite";
import {EmailField, UsernameField, model} from "../RSUITE components/rsuiteComp"
import "rsuite/dist/rsuite.min.css";


export const Login = () => {
    return (
        <Form model={model}>
            <UsernameField />
            <EmailField />
            <Button appearance="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}