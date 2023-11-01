import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, FormGroup, Input, Label } from "reactstrap";

const AssignEmployees = ({ baseUrl, id }) => {
    console.log(id, baseUrl)
    const token = localStorage.getItem("jwt")
    const [projectEmployes, setProjectEmployees] = useState([])
    const [employees, setEmployees] = useState([])

    const [assignEmployeesAction, setAssignEmployeesAction] = useState(false)

    const [newAssignedEmployees, setNewAssignedEmployees] = useState()

    useEffect(() => {
        const getAssignedEmployesByProjectId = async () => {
            try {

                await axios.get(`${baseUrl}/employees/projectId/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((resp) => {
                        setProjectEmployees(resp.data)
                    }).catch((error) => {
                        console.log(error)
                    })
            } catch (error) {
                console.log(error)
            }
        }

        getAssignedEmployesByProjectId()
    }, [baseUrl, id, token])

    useEffect(() => {
        const getEmployeesData = async () => {
            try {
                await axios.get(`${baseUrl}/unassigned/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }).then((resp) => {
                    setEmployees(resp.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getEmployeesData()
    }, [baseUrl, token])

    const assignEmployees = async () => {
        // setAssignEmployeesAction(true)
        // const assignEmp = []
        try {
            await axios.patch(`${baseUrl}/projects/assignemployees`,
                {
                    projectId: id,
                    assignedEmployeesIds: newAssignedEmployees
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token
                    }
                }).then(() => {
                    setAssignEmployeesAction(false)
                    // getAssignedEmployesByProjectId()
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const array = []
        const options = e.target.options
        // console.log(array)
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                array.push(options[i].value)
                setNewAssignedEmployees(array)
            }
        }
    }
    // console.log(newAssignedEmployees)


    return (
        <>
            <Card className="my-2">
                <CardHeader>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <CardTitle tag="h5">
                            Assigned Employees
                        </CardTitle>
                        {' '}
                        <Button color="info"
                            onClick={() => { setAssignEmployeesAction(true) }}
                        >
                            {/* {projectId === project._id && isdeleted ? (
                            <Spinner color="light" size="sm">
                                Loading...
                            </Spinner>
                        ) : ( */}
                            <i class="uil uil-user-plus"
                            // onClick={() => { deleteProject(project._id) }}
                            ></i> Add Employees
                            {/* )} */}
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                    {assignEmployeesAction ? (
                        <div>
                            <FormGroup>
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
                                            <option value={employee._id}>
                                                {employee.employeeName}_{employee._id}
                                            </option>
                                        )
                                    })}
                                </Input>

                            </FormGroup>
                            <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button color="primary"
                                    onClick={assignEmployees}
                                    style={{ width: "100%" }}>
                                    Submit
                                </Button>
                                {' '}
                            </FormGroup>
                        </div>
                    ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "10px" }}>
                            {
                                projectEmployes.map((employee) => {
                                    return (
                                        // <Card>
                                        //     <CardTitle tag="h5">
                                        //         {employee.assignedProject}
                                        //     </CardTitle>
                                        // </Card>
                                        // <div>{employee._id}</div>


                                        <Card
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <img
                                                alt="Sample"
                                                src="https://picsum.photos/300/200"
                                            />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {employee.employeeName}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                    {employee.employeeEmail}
                                                </CardSubtitle>
                                                <CardText>
                                                    {employee.employeePhoneNo}
                                                </CardText>
                                                <Button color="danger">
                                                    Remove
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    )}
                </CardBody>
            </Card>

        </>
    )
}

export default AssignEmployees;