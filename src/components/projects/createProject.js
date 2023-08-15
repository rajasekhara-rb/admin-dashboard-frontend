import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CreateProject = ({ baseUrl }) => {
    const token = localStorage.getItem("jwt")

    // const [employees, setEmployees] = useState([])
    // console.log(employees)
    const [project, setProject] = useState({});
    const navigate = useNavigate()



    // useEffect(() => {
    //     const getEmployees = async () => {
    //         try {
    //             await axios.get(`${baseUrl}/employees/`, {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             }).then((employees) => {
    //                 setEmployees(employees.data)
    //             }).catch((error) => {
    //                 console.log(error)
    //             })
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getEmployees()
    // }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value })
    }
    console.log(project)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newProject = {
                name: project.name,
                description: project.description
            }
            await axios.post(`${baseUrl}/projects/`, newProject, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then((data) => {
                navigate(`/projects/project/${data.data.project._id}`)
                alert("Project created")
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
                        <h2 style={{ textAlign: "center" }}>Create Project</h2>
                        <hr style={{ border: "1px solid blue" }}></hr>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="exampleEmail"
                        // hidden
                        >
                            Project Name
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="name"
                            placeholder=" Project Name"
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
                            Project Description
                        </Label>
                        <Input
                            id="examplePassword"
                            name="description"
                            placeholder="Project Description"
                            type="textarea"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    {/* <FormGroup>
                        <Label>
                            Status
                        </Label>
                        <Input
                            className="mb-3"
                            type="select"
                            name="status"
                            onChange={handleChange}
                        >
                            <option>
                                Not Started
                            </option>
                            <option>
                                On Track
                            </option>
                            <option>
                                Pending
                            </option>
                            <option>
                                Completed
                            </option>
                        </Input>
                    </FormGroup> */}
                    {' '}
                    {/* <FormGroup>
                        <Label>
                            Progress
                        </Label>
                        <Input
                            className="mb-3"
                            type="range"
                            name="progress"
                            min={0}
                            max={100}
                            onChange={handleChange}
                        >

                        </Input>
                    </FormGroup> */}
                    {' '}
                    {/* <FormGroup>
                        <Label>
                            Assign Employees
                        </Label>
                        <Input
                            id="exampleSelectMulti"
                            multiple
                            name="selectMulti"
                            type="select"
                            onChange={handleChange}
                        >
                            {employees?.map((employee) => {
                                return (
                                    <option>
                                        {employee.employeeName}_{employee._id}
                                    </option>
                                )
                            })}
                        </Input>
                    </FormGroup> */}
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
export default CreateProject;