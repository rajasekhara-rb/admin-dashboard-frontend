import axios from "axios";
import React, { useState } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const Projects = async () => {

    const [projectsArr, setProjectsArr] = useState([]);
    // console.log(projectsArr)

    try {
        await axios.get("http://localhost:9020/projects/", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZGR5QGdtYWlsLmNvbSIsImlkIjoiNjRiM2FkNTdlYTA0OWI4NzFlOTczZTllIiwiaWF0IjoxNjg5NTAwNTA5fQ.zdKjgzbtADh4wSV6HzJQa_NNlq82jDyBfYY4ff-S5IY"
            }
        })
            .then((resp) => {
                setProjectsArr(resp.data)
            })
    } catch (error) {
        console.log(error)
    }


    return (
        <>
            <div>
                {projectsArr.map((project) => {
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                {project.name}
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
                })}
            </div>

        </>
    )
}
export default Projects;