import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Input } from "reactstrap";

const ProjectDashboard = ({ baseUrl }) => {
    const token = localStorage.getItem("jwt");

    const [projects, setProjects] = useState([]);
    const [projectById, setProjectById] = useState([]);
    const [projectId, setProjectId] = useState("")

    const getProjects = async () => {
        try {
            await axios.get(`${baseUrl}/projects/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((resp) => {
                // setLoading(false)
                setProjects(resp.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])


    useEffect(() => {
        const getProjectById = async () => {
            const url = `${baseUrl}/projects/${projectId}`;
            // console.log(token)
            try {
                await axios.get(url, {
                    headers: {
                        "Content-Type": "html/text",
                        Authorization: `Bearer ${token}`
                    }
                }).then((data) => {
                    // console.log(data.data)
                    setProjectById(data.data)
                    // alert(data.data)
                    // statusColorDefine(data.data.projectStatus)
                }).catch((error) => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        }
        getProjectById()
    }, [baseUrl, projectId, token]

    )


    return (
        <>
            <Card>
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                    style={{ width: "25%", padding: "10px", marginRight: "10px" }}

                    onChange={
                        (e) => {
                        }}
                >
                    {
                        projects?.map((p) => {
                            return (
                                <option value={p._id} >
                                    {p.projectName}
                                </option >
                            )
                        })
                    }

                </Input>
                <CardHeader>
                    Project Name
                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>
        </>
    )
}

export default ProjectDashboard;