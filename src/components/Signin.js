import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Signin = () => {

    const [userData, setUserData] = useState({});

    // http://localhost:9020/projects/
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Form>
                <FormGroup>
                    <Label
                        for="exampleEmail"
                        hidden
                    >
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="examplePassword"
                        hidden
                    >
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                    />
                </FormGroup>
                {' '}
                <Button>
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default Signin;