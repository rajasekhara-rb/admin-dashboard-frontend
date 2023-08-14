import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from "reactstrap";

const Projects = ({ baseUrl }) => {

    const [projectsArr, setProjectsArr] = useState([]);
    const [projectId, setProjectId] = useState()
    // console.log(projectsArr)
    const token = localStorage.getItem("jwt");

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get(`${baseUrl}/projects/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((resp) => {
                    setProjectsArr(resp.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [token, baseUrl])


    const deleteProject = async (project_id) => {
        setProjectId(project_id)
        try {
            await axios.delete(`${baseUrl}/projects/${project_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((isdeleted) => {
                alert(isdeleted.message)
            })
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    // },[])
    return (
        <>
            <div style={{
                display: "flex",
                // gridTemplateColumns: "repeat(3, 1fr)",
                // gridGap: "20px",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "20px",
                width: "100%"
            }}>
                {projectsArr.map(project => {
                    return (
                        <Card
                            style={{
                                width: '15rem',
                                // height: "5rem",
                                margin: "10px"
                            }}
                            key={[project._id]}
                        >
                            <CardHeader>
                                {project._id}
                            </CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">
                                    {project.projectName}
                                </CardTitle>
                                {/* <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {project.projectStatus}
                                </CardSubtitle> */}
                                <CardText>
                                    {project.projectDescription}
                                </CardText>
                            </CardBody>
                            <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
                                <Link to={`/projects/project/${project._id}`}>
                                    <Button color="primary">
                                        <i class="uil uil-eye"></i>
                                    </Button>
                                </Link>
                                <Link to="/projects/project/:id">
                                    <Button color="warning">
                                        <i class="uil uil-edit"></i>
                                    </Button>
                                </Link>
                                <Button color="danger" >
                                    {projectId === project._id ? ("l") : (
                                        <i class="uil uil-trash-alt"
                                            onClick={() => { deleteProject(project._id) }}
                                        ></i>
                                    )}
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>

        </>
    )
}
export default Projects;