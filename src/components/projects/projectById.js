import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle, Progress } from "reactstrap";
import AssignEmployees from "./AssignedEmployees";

const ProjectById = ({ baseUrl }) => {

    const navigate = useNavigate()

    const [project, setproject] = useState({})

    // console.log(projectEmployes)
    const { id } = useParams();
    const [statuscolor, setStatusColor] = useState();
    // console.log(statuscolor)
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
                    statusColorDefine(data.data.projectStatus)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getProjectById()
    }, [baseUrl, id, token]

    )


    const statusColorDefine = (status) => {
        // const color = value
        // console.log(color)
        if (status === "Not Started") {
            setStatusColor("danger")
        } else if (status === "On Track") {
            setStatusColor("info");
        } else if (status === "Pending") {
            setStatusColor("warning")
        } else if (status === "Completed") {
            setStatusColor("success")
        } else {
            setStatusColor("primary")
        }
    }
    console.log(statuscolor)

        const deleteProject = async (project_id) => {
        // setProjectId(project_id)
        // setIsDeleted(true)
        const confirmDelete = window.prompt(`To confirm delete enter project id : ${project_id} ?`);
        if (confirmDelete === project_id) {
            try {
                await axios.delete(`${baseUrl}/projects/${project_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((isdeleted) => {
                    // getData()
                    // setIsDeleted(false)
                    alert(isdeleted.data.message)
                    navigate("/projects/myprojects")

                })
            } catch (error) {
                console.log(error)
            }
        } else {
            // setIsDeleted(false)
        }

    }
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
                            <Button color={statuscolor}>
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

                            <Link to={`/projects/edit/${project._id}`}>
                                <Button color="warning">
                                    <i class="uil uil-edit"></i> Edit
                                </Button>
                            </Link>
                            {' '}
                            <Button color="danger"
                                onClick={() => { deleteProject(project._id) }}
                            >
                                {/* {projectId === project._id && isdeleted ? (
                            <Spinner color="light" size="sm">
                                Loading...
                            </Spinner>
                        ) : ( */}
                                <i class="uil uil-trash-alt"
                                ></i> Delete
                                {/* )} */}
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                <AssignEmployees baseUrl={baseUrl} id={id} />
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