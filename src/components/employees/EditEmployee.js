import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Input } from "reactstrap";

const EditEmployee = ({ baseUrl }) => {

    const [employeeData, setEmployeeData] = useState({});
    // const empData = employeeData;

    const [newEmplooyeeData, setNewEmplooyeeData] = useState({})
    console.log(employeeData)
    const { id } = useParams()
    // console.log(id)
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
    useEffect(() => {
        getEmployeeData()
    }, [0])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmplooyeeData({ ...newEmplooyeeData, [name]: value })
    }
    console.log(newEmplooyeeData)

    const updateEmployeeData = async (e) => {
        // e.preventDefault()
        try {
            axios.put(`${baseUrl}/employees/${id}`, newEmplooyeeData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("jwt")
                }
            }).then(() => {
                alert("update successful")
            }).catch((error) => {
                console.log(error)
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleDisplay = (val) => {
        if (newEmplooyeeData.val) {
            return newEmplooyeeData.val
        } else {
            return employeeData.val
        }
        // newEmplooyeeData ? (newEmplooyeeData.val) : (employeeData.val)
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
                    {/* Name <Input value="name" > </Input> */}
                    <CardBody>
                        <CardTitle tag="h5">
                            Name <Input
                                name="name"
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
                                name="email"
                                value={employeeData.employeeEmail}
                                // value={handleDisplay("employeeEmail")}
                                onChange={handleChange}
                            > </Input>
                        </CardSubtitle>
                        <CardText>
                            Phone No <Input
                                name="phone"
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
                </CardFooter>
            </Card>
        </>
    )
}

export default EditEmployee;