import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Signin = ({ setIsLoggedIn, baseUrl, setUserDetails }) => {

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
        if (!userData.email && !userData.password) {
            alert("Fields cannot be blank")
        } else {
            await axios.post(`${baseUrl}/admin/signin`, user, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("jwt")
                }
            })
                .then((loggedin) => {
                    console.log(loggedin.data)
                    if (loggedin.data.token) {
                        alert(loggedin.data.message)

                        localStorage.setItem("jwt", loggedin.data.token)
                        setIsLoggedIn(true);
                        localStorage.setItem("user", JSON.stringify(loggedin.data.user))
                        setUserDetails(loggedin.data.user)
                        navigate("/");
                    } else {
                        setIsLoggedIn(false);
                        alert(loggedin.data.message)
                    }
                }).catch((error) => {
                    console.log(error)
                    alert(error)
                })
        }
    }

    return (
        <>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <Form style={{ marginTop: "50px", width: "40%", border: "1px solid #f0f0f0", padding: "20px", borderRadius: "10px" }}>
                    <FormGroup>
                        <h2 style={{ textAlign: "center" }}>Admin Sign in</h2>
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
                    <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button color="primary" onClick={handleSubmit} style={{ width: "30%" }}>
                            Sign in
                        </Button>
                        {" "}
                        <Button color="link" onClick={() => { navigate("/signup") }} style={{ width: "50%" }}>
                            Don't have an account? SignUp
                        </Button>
                    </FormGroup>
                </Form>

            </div>

        </>
    )
}
export default Signin;