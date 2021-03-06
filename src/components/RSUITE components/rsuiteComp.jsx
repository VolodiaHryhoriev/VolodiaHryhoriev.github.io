import {Button, ButtonToolbar, Form, Input, Schema, } from "rsuite";
import React from "react";
import styles from "../Heaader/Header.module.css";


const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

export const model = Schema.Model({
    name: Schema.Types.StringType().isRequired('This field is required.'),
    email: Schema.Types.StringType().isEmail('Please enter a valid email address.')
});

export const instanceForm = (
    <Form model={model}>
        <Form.Group>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" />
            <br/>
            <Form.HelpText tooltip>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" />
            <br/>
            <Form.HelpText tooltip>Email is required</Form.HelpText>

        </Form.Group>
        <Form.Group controlId="textarea">
            <Form.ControlLabel>Textarea</Form.ControlLabel>
            <Form.Control rows={5} name="textarea" accepter={Textarea} />
        </Form.Group>
        <Form.Group>
            <ButtonToolbar>
                <Button appearance="primary" type={"submit"}>Submit</Button>
            </ButtonToolbar>
        </Form.Group>
    </Form>
);



const nameRule = Schema.Types.StringType().isRequired('This field is required.');
export function UsernameField() {
    return (
        <div>
        <Form.Group controlId="name">
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" className="hello" rule={nameRule} />
        </Form.Group>
        </div>
    );
}

 export function PasswordField() {
    return (
        <div>
            <Form.Group controlId="password">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password"/>
        </Form.Group>
        </div>
    );
}




