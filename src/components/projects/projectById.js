import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Progress } from "reactstrap";

const ProjectById = ({ baseUrl }) => {

    const [project, setproject] = useState({})
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        const getProjectById = async () => {
            const url = `${baseUrl}/projects/${id}`;
            const token = localStorage.getItem("jwt")
            console.log(token)
            try {
                await axios.get(url, {
                    headers: {
                        "Content-Type": "html/text",
                        Authorization: `Bearer ${token}`
                    }
                }).then((data) => {
                    console.log(data.data)
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
    }, []

    )
    // useEffect(() => {
    //     getProjectById()
    // }, [])

    return (
        <>
            <div style={{ width: "100%", margin: "10px" }}>
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

            </div>
        </>
    )
}
export default ProjectById;