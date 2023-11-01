import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const EditProject = ({ baseUrl }) => {
    const navigate = useNavigate()

    const { id } = useParams()
    const token = localStorage.getItem("jwt")

    const [project, setProject] = useState({})
    // const [employees, setEmployees] = useState([])
    // console.log(employees)
    // console.log(project)

    useEffect(() => {
    const getProjectById = async () => {
        const url = `${baseUrl}/projects/${id}`;
        // console.log(token)
        try {
            await axios.get(url, {
                headers: {
                    "Content-Type": "html/text",
                    Authorization: `Bearer ${token}`
                }
            }).then((project) => {
                // console.log(data.data)
                setProject(project.data)
                // alert(data.data)
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }
        getProjectById()
    }, [baseUrl, id, token])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newProject = {
                name: project.projectName,
                description: project.projectDescription,
                status: project.projectStatus,
                progress: project.projectProgress
            }
            await axios.put(`${baseUrl}/projects/${id}`, newProject, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then((data) => {
                alert("Project Updated")
                navigate(`/projects/view/${data.data.project._id}`)
            })
        } catch (error) {
            console.log(error)
        }
    }

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



    return (
        <>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <Form style={{ marginTop: "50px", width: "95%", border: "1px solid #f0f0f0", padding: "20px", borderRadius: "10px" }}>
                    <FormGroup>
                        <h2 style={{ textAlign: "center" }}>Edit Project</h2>
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
                            name="projectName"
                            placeholder=" Project Name"
                            type="text"
                            value={project.projectName}
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
                            name="projectDescription"
                            placeholder="Project Description"
                            type="textarea"
                            value={project.projectDescription}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label>
                            Status
                        </Label>
                        <Input
                            className="mb-3"
                            type="select"
                            name="projectStatus"
                            value={project.projectStatus}
                            onChange={handleChange}
                        >
                            <option disabled>
                                Select one
                            </option>
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
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label>
                            Progress
                        </Label>
                        <div style={{display:"flex"}}>
                        <Input
                            className="mb-3"
                            type="range"
                            name="projectProgress"
                            value={project.projectProgress}
                            min={0}
                            max={100}
                            onChange={handleChange}
                        >
                        </Input>
                       <span> {project.projectProgress}</span>
                        </div>
                    </FormGroup>
                    {' '}
                    {/* <FormGroup>
                        <Label>
                            Assign Employees
                        </Label>
                        <Input
                            id="exampleSelectMulti"
                            multiple
                            name="assignedEmployees"
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

export default EditProject;