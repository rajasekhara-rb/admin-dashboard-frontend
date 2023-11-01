import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle } from "reactstrap";

const EmployeeById = ({ baseUrl }) => {
    const [employeeData, setEmployeeData] = useState({})
    console.log(employeeData)
    const { id } = useParams()
    const navigate = useNavigate()
    // console.log(id)
    useEffect(() => {
    const getEmployeeData = async () => {
        await axios.get(`${baseUrl}/employees/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Brarer " + localStorage.getItem("jwt")
            }
        }).then((employee) => {
            setEmployeeData(employee.data)
        })
    }
 
        getEmployeeData()
    }, [baseUrl, id])

    const deleteEmployee = async () => {
        try {
            axios.delete(`${baseUrl}/employees/${id}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("jwt")
                }
            }).then((del) => {
                alert(del.data.message);
                navigate("/employees/")
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Card
                style={{ margin: "10px" }}
            >
                <CardHeader>
                    EMPLOYEE
                </CardHeader>
                <div style={{
                    // width: '18rem',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // margin: "10px"
                }}>
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            margin: "20px",
                            border: "5px solid #fcf0fc"
                        }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Name: {employeeData.employeeName}
                            {/* <Input value={employeeData.employeeName} disabled> </Input> */}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Email : {employeeData.employeeEmail}
                        </CardSubtitle>
                        <CardText>
                            Phone No: {employeeData.employeePhoneNo}
                        </CardText>
                        <CardText>
                            Id: {employeeData._id}
                        </CardText>
                    </CardBody>
                </div>
                <CardFooter>
                    <Link to={`/employees/`}>
                        <Button color="primary">
                            <i class="uil uil-times"></i> Close
                        </Button>
                    </Link>
                    {' '}
                    <Link to={`/employees/edit/${id}`}>
                        <Button color="warning">
                            <i class="uil uil-edit"></i> Edit
                        </Button>
                    </Link>
                    {' '}
                    <Button color="danger" onClick={() => { deleteEmployee() }}>
                        {/* {projectId === project._id && isdeleted ? (
                                                    <Spinner color="light" size="sm">
                                                        Loading...
                                                    </Spinner>
                                                ) : ( */}
                        <i class="uil uil-trash-alt"

                        ></i> Delete
                        {/* )} */}
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default EmployeeById;