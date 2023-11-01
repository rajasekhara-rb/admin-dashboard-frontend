import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Input } from "reactstrap";

const EditEmployee = ({ baseUrl }) => {
    const navigate = useNavigate()

    const [employeeData, setEmployeeData] = useState({});
    // const empData = employeeData;

    // const [newEmplooyeeData, setNewEmplooyeeData] = useState({})
    console.log(employeeData)
    const { id } = useParams()
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
                // navigate("/employees/employees")
            })
        }

        getEmployeeData()
    }, [baseUrl, id])

    const handleChange = (e) => {
        setEmployeeData({})
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value })
    }
    console.log(employeeData)

    const updateEmployeeData = async (e) => {
        // e.preventDefault()
        try {
            axios.put(`${baseUrl}/employees/${id}`,
                {
                    name: employeeData.employeeName,
                    email: employeeData.employeeEmail,
                    phone: employeeData.employeePhoneNo,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("jwt")
                    }
                }).then(() => {
                    alert("update successful");
                    navigate("/employees/")
                }).catch((error) => {
                    console.log(error)
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    // const handleDisplay = (val) => {
    //     if (employeeData.val) {
    //         return employeeData.val
    //     } else {
    //         return employeeData.val
    //     }
    //     // newEmplooyeeData ? (newEmplooyeeData.val) : (employeeData.val)
    // }
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
                    {/* Name <Input value="name" > </Input> */}
                    <CardBody>
                        <CardTitle tag="h5">
                            Name <Input
                                name="employeeName"
                                value={employeeData.employeeName}
                                // value={handleDisplay("employeeName")}
                                onChange={handleChange}
                            > </Input>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Email <Input
                                name="employeeEmail"
                                value={employeeData.employeeEmail}
                                // value={handleDisplay("employeeEmail")}
                                onChange={handleChange}
                            > </Input>
                        </CardSubtitle>
                        <CardText>
                            Phone No <Input
                                name="employeePhoneNo"
                                value={employeeData.employeePhoneNo}
                                // value={handleDisplay("employeePhoneNo")}
                                onChange={handleChange}
                            > </Input>
                        </CardText>
                    </CardBody>
                </div>
                <CardFooter>
                    <Button color="primary" onClick={updateEmployeeData}>
                        {/* {projectId === project._id && isdeleted ? (
                                                    <Spinner color="light" size="sm">
                                                        Loading...
                                                    </Spinner>
                                                ) : ( */}
                        <i class="uil uil-save"
                        // onClick={() => {  }}
                        ></i> Save
                        {/* )} */}
                    </Button>
                    {' '}
                    <Link to={`/employees/`}>
                        <Button color="danger">
                            <i class="uil uil-times"></i> Cancel
                        </Button>
                    </Link>
                    {' '}
                    <Link to={`/employees/view/${id}`}>
                        <Button color="primary">
                            <i class="uil uil-eye"></i> View
                        </Button>
                    </Link>
                    {' '}
                </CardFooter>
            </Card>
        </>
    )
}

export default EditEmployee;