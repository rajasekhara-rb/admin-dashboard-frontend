import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Signin = ({ isLoggedIn, setIsLoggedIn, baseUrl }) => {

    const [userData, setUserData] = useState({});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email: userData.email,
            password: userData.password
        }

        await axios.post(`${baseUrl}/admin/signin`, user)
            .then((loggedin) => {
                console.log(loggedin)
                alert("logged in successful")
                localStorage.setItem("jwt", loggedin.data.token);
                setIsLoggedIn(true);
                navigate("/");
            }).catch((error) => {
                console.log(error)
                alert(error)
            })
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
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default Signin;