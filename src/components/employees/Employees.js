import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Spinner } from "reactstrap";

const Employees = ({ baseUrl }) => {
    const navigate = useNavigate()
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


    const deleteEmployee = async (id) => {
        try {
            axios.delete(`${baseUrl}/employees/${id}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("jwt")
                }
            }).then((del) => {
                alert(del.data.message);
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
            <Card className="my-2" style={{ width: "100%" }}>
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
                                    // style={{
                                    //     // width: '18rem'
                                    // }}
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


                                        </CardBody>
                                        <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Link to={`/employees/view/${employee._id}`}>
                                                <Button color="primary">
                                                    <i class="uil uil-eye"></i>
                                                </Button>
                                            </Link>
                                            <Link to={`/employees/edit/${employee._id}`}>
                                                <Button color="warning">
                                                    <i class="uil uil-edit"></i>
                                                </Button>
                                            </Link>
                                            <Button color="danger" >
                                                {/* {projectId === project._id && isdeleted ? (
                                                    <Spinner color="light" size="sm">
                                                        Loading...
                                                    </Spinner>
                                                ) : ( */}
                                                <i class="uil uil-trash-alt"
                                                    onClick={() => { deleteEmployee(employee._id) }}
                                                ></i>
                                                {/* )} */}
                                            </Button>
                                            {/* <Button color="danger">
                                                Assign Other Project
                                            </Button> */}
                                        </CardFooter>
                                    </Card>
                                )
                            })
                        }
                    </div>


                </CardBody>
            </Card >
        </>
    )
}
export default Employees;