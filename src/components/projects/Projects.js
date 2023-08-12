import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const Projects = () => {

    const [projectsArr, setProjectsArr] = useState([]);
    // console.log(projectsArr)
    const token = localStorage.getItem("jwt-token");

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get("http://localhost:9020/projects/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((resp) => {
                        setProjectsArr(resp.data)
                    })
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    },[token])

    // useEffect(() => {
    // },[])



    return (
        <>
            <div>
                {projectsArr.map(project => {
                    return (
                        <Card
                            style={{
                                width: '18rem'
                            }}
                            key={[project._id]}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {project.projectName}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>

        </>
    )
}
export default Projects;