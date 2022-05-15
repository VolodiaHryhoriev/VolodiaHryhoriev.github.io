import {Button, ButtonToolbar, Form, Input, Schema} from "rsuite";
import { forwardRef } from "react";
import {Navbar, Nav, Dropdown} from "rsuite";
import React from "react";


const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

export const model = Schema.Model({
    name: Schema.Types.StringType().isRequired('This field is required.'),
    email: Schema.Types.StringType().isEmail('Please enter a valid email address.')
});

export const instanceForm = (
    <Form>
        <Form.Group controlId="name">
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" />
            <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" />
            <Form.HelpText tooltip>Email is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group>
        <Form.Group controlId="textarea">
            <Form.ControlLabel>Textarea</Form.ControlLabel>
            <Form.Control rows={5} name="textarea" accepter={Textarea} />
        </Form.Group>
        <Form.Group>
            <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
            </ButtonToolbar>
        </Form.Group>
    </Form>
);



const nameRule = Schema.Types.StringType().isRequired('This field is required.');
export function UsernameField() {
    return (
        <Form.Group controlId="name">
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" rule={nameRule} />
        </Form.Group>
    );
}

const emailRule = Schema.Types.StringType().isEmail('Please enter a valid email address.');
 export function EmailField() {
    return (
        <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" rule={emailRule} />
        </Form.Group>
    );
}

