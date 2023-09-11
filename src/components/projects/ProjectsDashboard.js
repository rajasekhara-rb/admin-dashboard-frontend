import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, FormGroup, Input, Label } from "reactstrap";
import PaymentsTable from "./paymentsTable";
import SalesChart from "../charts/salesChart";

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
                        [projects]?.map((p) => {
                            return (
                                <option value={p._id} >
                                    {p.projectName}
                                </option >
                            )
                        })
                    }

                </Input>
                <CardHeader>
                    {projectById.projectName}NAMW
                </CardHeader>
                <CardBody>
                    <Card style={{ height: "100%" }}>
                        <CardHeader >
                            <FormGroup style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Label for="exampleSelect" style={{ width: "20%" }}>
                                    Sales
                                </Label>
                                <div style={{ width: "20%", display: "flex" }}>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        style={{ width: "100%", padding: "10px", marginRight: "10px" }}
                                        // onChange={(e) => {
                                        //     // setSelectedSales(e.target.value);
                                        //     setSelectedSales(e.target.value);
                                        //     getSalesByMonth()
                                        // }}
                                        onChange={
                                            (e) => {
                                                // handleSalesChartChange(e);
                                                // getSalesByMonth()
                                            }}
                                    >
                                        <option value="daily" selected>
                                            Daily
                                        </option >
                                        <option value="monthly">
                                            Monthly
                                        </option>
                                        <option value="yearly">
                                            Yearly
                                        </option>
                                    </Input>
                                    <Button

                                    // onClick={() => { getSales() }}
                                    >
                                        Go</Button>
                                </div>
                            </FormGroup>
                        </CardHeader>
                        <CardBody style={{ margin: "auto", width: "100%" }}>
                            {/* {
                                selectedSales ? (
                                    <SalesChart labels={salesLables} amounts={salesAmount} />
                                ) : (
                                    "Loading..."
                                )
                            } */}
                            <SalesChart />
                        </CardBody>
                    </Card>
                </CardBody>
                <CardBody>
                    <PaymentsTable />
                </CardBody>
            </Card>
        </>
    )
}

export default ProjectDashboard;