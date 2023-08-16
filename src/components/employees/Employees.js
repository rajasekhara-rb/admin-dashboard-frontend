import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle } from "reactstrap";

const Employees = ({ baseUrl }) => {

    const [employees, setEmployees] = useState([]);
    const token = localStorage.getItem("jwt")

    const getEmployeesData = async () => {
        try {
            await axios.get(`${baseUrl}/employees`, {
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

    useEffect(() => {
        getEmployeesData()
    }, [])
    return (
        <>
            <Card className="my-2">
                <CardHeader>
                    <CardTitle tag="h5">
                        Employees
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "10px" }}>
                        {
                            employees.map((employee) => {
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
                                                Assign Other Project
                                            </Button>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </div>


                </CardBody>
            </Card>
        </>
    )
}
export default Employees;