import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Signup = () => {

    const [userData, setUserData] = useState({});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <Form style={{ marginTop: "50px", width: "40%", border: "1px solid #f0f0f0", padding: "20px", borderRadius: "10px" }}>
                    <FormGroup>
                        <h2 style={{ textAlign: "center" }}>Admin Sign Up</h2>
                        <hr style={{ border: "1px solid blue" }}></hr>
                    </FormGroup>
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
                    <FormGroup>
                        <Label
                            for="examplePassword"
                            hidden
                        >
                            Confirm Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button color="warning" onClick={handleSubmit} style={{ width: "30%" }}>
                            Sign Up
                        </Button>
                        {" "}
                        <Button color="link" onClick={() => { navigate("/signin") }} style={{ width: "50%" }}>
                            Existing User? SignIn
                        </Button>
                    </FormGroup>
                </Form>

            </div>
        </>
    )
}
export default Signup;