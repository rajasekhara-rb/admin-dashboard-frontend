import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CreateEmployees = ({ baseUrl }) => {
    const token = localStorage.getItem("jwt")
    const [employee, setEmployee] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    }
    console.log(employee)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newEmployee = {
            name: employee.name,
            email: employee.email,
            phoneNO: employee.phone,
        }
        try {
            await axios.post(`${baseUrl}/employees`, newEmployee, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then((resp) => {
                alert(resp.data.message)
                navigate("/employees/employees")
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <Form style={{ marginTop: "50px", width: "95%", border: "1px solid #f0f0f0", padding: "20px", borderRadius: "10px" }}>
                    <FormGroup>
                        <h2 style={{ textAlign: "center" }}>Create Employee</h2>
                        <hr style={{ border: "1px solid blue" }}></hr>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="exampleEmail"
                        // hidden
                        >
                            Employee Name
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="name"
                            placeholder="Employee Name"
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label
                            for="examplePassword"
                        // hidden
                        >
                            Employee Email
                        </Label>
                        <Input
                            id="examplePassword"
                            name="email"
                            placeholder="Employee Email"
                            type="email"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label
                            for="examplePassword"
                        // hidden
                        >
                            Employee Phone No
                        </Label>
                        <Input
                            id="examplePassword"
                            name="phone"
                            placeholder="Employee Phone No"
                            type="number"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button color="primary"
                            onClick={handleSubmit}
                            style={{ width: "100%" }}>
                            Submit
                        </Button>
                        {/* {" "}
                        <Button color="link" onClick={() => { navigate("/signup") }} style={{ width: "50%" }}>
                            Don't have an account? SignUp
                        </Button> */}
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}
export default CreateEmployees;