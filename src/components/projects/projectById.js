import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Progress } from "reactstrap";

const ProjectById = ({ baseUrl }) => {

    const [project, setproject] = useState({})
    const [projectEmployes, setProjectEmployees] = useState([])
    console.log(projectEmployes)
    const { id } = useParams();
    const [statuscolor, setStatusColor] = useState("warning");
    // console.log(id)
    const token = localStorage.getItem("jwt")
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
                }).then((data) => {
                    // console.log(data.data)
                    setproject(data.data)
                    // alert(data.data)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getProjectById()
    }, [baseUrl, id]

    )


    const statusColorDefile = (value) => {
        if (value === "Not Started") {
            setStatusColor("danger")
        } else if (value === "On Track") {
            setStatusColor("info")
        } else if (value === "Pending") {
            setStatusColor("warning")
        } else if (value === "Completed") {
            setStatusColor("Success")
        } else {
            setStatusColor("primary")
        }
    }

    const getAssignedEmployesByProjectId = async () => {
        try {

            await axios.get(`${baseUrl}/employees/projectId/${id}`, {
                headers: {
                    "Content-Type": "html/text",
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

    useEffect(() => {
        getAssignedEmployesByProjectId()
    }, [])
    return (
        <>
            <div
                style={{ width: "98%", margin: "10px", height: "100%" }}
            >
                <Card className="my-2">
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/180"
                        style={{
                            height: 180
                        }}
                        top
                        width="100%"
                    />
                    {/* <CardHeader>
                    </CardHeader> */}
                    <CardBody>
                        <CardText style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button color={statuscolor} onChange={() => { statusColorDefile(project.projectStatus) }}>
                                {project.projectStatus}
                            </Button>
                        </CardText>
                        <CardTitle tag="h5">
                            {project.projectName}
                        </CardTitle>
                        {' '}
                        <CardText>
                            {project.projectDescription}
                        </CardText>

                        <Progress
                            className="my-2"
                            animated
                            // bar
                            color="success"
                            value={project.projectProgress}
                        >
                            Project Progress :
                            {project.projectProgress}%
                        </Progress>
                        <CardText>
                            Status: {project.projectStatus}
                        </CardText>

                        <CardText>
                            <small className="text-muted">
                                Created on {moment(project.createdAt).utc().format("DD/MM/YYYY")}
                            </small>
                            <br></br>
                            <small className="text-muted">
                                Last updated {moment(project.updatedAt).utc().format("DD/MM/YYYY")}
                            </small>
                        </CardText>
                    </CardBody>
                    <CardFooter style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div>
                            <Button color="info" >
                                {/* {projectId === project._id && isdeleted ? (
                            <Spinner color="light" size="sm">
                                Loading...
                            </Spinner>
                        ) : ( */}
                                <i class="uil uil-user-plus"
                                // onClick={() => { deleteProject(project._id) }}
                                ></i>
                                {/* )} */}
                            </Button>
                            {' '}
                            <Link to="/projects/edit/:id">
                                <Button color="warning">
                                    <i class="uil uil-edit"></i>
                                </Button>
                            </Link>
                            {' '}
                            <Button color="danger" >
                                {/* {projectId === project._id && isdeleted ? (
                            <Spinner color="light" size="sm">
                                Loading...
                            </Spinner>
                        ) : ( */}
                                <i class="uil uil-trash-alt"
                                // onClick={() => { deleteProject(project._id) }}
                                ></i>
                                {/* )} */}
                            </Button>
                        </div>
                    </CardFooter>
                </Card>


                <Card className="my-2">
                    <CardHeader>
                        <CardTitle tag="h5">
                            Assigned Employees
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
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

            </div>

            {/* <div style={{ width: "100%", margin: "10px" }}>
                <Card className="my-2">
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/180"
                        style={{
                            height: 180
                        }}
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {project.projectName}
                        </CardTitle>
                        <CardText>
                            {project.projectDescription}
                        </CardText>

                        <Progress
                            className="my-2"
                            animated
                            // bar
                            color="success"
                            value={project.projectProgress}
                        >
                            Project Progress :
                            {project.projectProgress}%
                        </Progress>
                        <CardText>
                            Status: {project.projectStatus}
                        </CardText>

                        <CardText>
                            <small className="text-muted">
                                Created on {moment(project.createdAt).utc().format("DD/MM/YYYY")}
                            </small>
                            <br></br>
                            <small className="text-muted">
                                Last updated {moment(project.updatedAt).utc().format("DD/MM/YYYY")}
                            </small>
                        </CardText>
                    </CardBody>
                </Card>

            </div> */}
        </>
    )
}
export default ProjectById;