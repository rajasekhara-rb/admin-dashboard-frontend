import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, FormGroup, Input, Label } from "reactstrap";
// import PaymentsTable from "./paymentsTable";
import SalesChart from "../charts/salesChart";

const ProjectDashboard = ({ baseUrl }) => {
    const token = localStorage.getItem("jwt");
    const [projects, setProjects] = useState([]);
    // console.log(projects);
    const [projectById, setProjectById] = useState({});
    const [projectId, setProjectId] = useState();
    // console.log(projectId);

    // const [monthlySales, setMonthlySales] = useState([])
    const [salesLables, setSalesLables] = useState([]);
    // console.log(monthlySalesLables)
    const [salesAmount, setSalesAmount] = useState([]);
    // console.log(monthlySalesAmount)

    const [selectedSales, setSelectedSales] = useState("daily");
    // console.log(selectedSales)

    useEffect(() => {
        const getProjects = async () => {
            try {
                await axios.get(`${baseUrl}/projects/`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((resp) => {
                    // console.log(resp.data);
                    // setLoading(false)
                    setProjects(resp.data)
                })
            } catch (error) {
                console.log(error)
            }
        }

        getProjects();
    }, [baseUrl, token])
    
    useEffect(() => {
        const getProjectById = async () => {
            const url = `${baseUrl}/projects/${projectId}`;
            // console.log(token)
            try {
                await axios.get(url, {
                    headers: {
                        // "Content-Type": "html/text",
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    // console.log(data.data)
                    setProjectById(res.data);
                    // setProjectId(res.data._id)
                    // alert(data.data)
                    // statusColorDefine(data.data.projectStatus)
                })
                // .catch((error) => {
                //     console.log(error)
                // })
            } catch (error) {
                console.log(error)
            }
        }
        getProjectById();
    }, [baseUrl, projectId, token]);

    useEffect(()=>{
        setProjectId(projects[0]?._id);
    },[projects]);


    useEffect(() => {
    const getSales = async () => {
        // e.preventDefault()
        try {
            await axios.get(`${baseUrl}/sales?salestype=${selectedSales}&projectid=${projectId}`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then((data) => {
                // setMonthlySales(data.data)
                setSalesLables([])
                setSalesAmount([])
                // eslint-disable-next-line
                data.data.map((sales) => {
                    if (selectedSales === "daily") {
                        setSalesLables(current => [...current, `${sales._id.day}-${sales._id.month}-${sales._id.year}`])
                        setSalesAmount(current => [...current, sales.amount])
                    } else if (selectedSales === "monthly") {
                        setSalesLables(current => [...current, `${sales._id.month}-${sales._id.year}`])
                        setSalesAmount(current => [...current, sales.amount])
                    } else if (selectedSales === "yearly") {
                        setSalesLables(current => [...current, `${sales._id.year}`])
                        setSalesAmount(current => [...current, sales.amount])
                    } else {
                        alert("error in sales details fetching")
                    }
                })
            })
            // .catch((error) => {
            //     console.log(error)
            // })
        } catch (error) {
            console.log(error)
        }
    }

        getSales();
        // getProjectById();
    }, [baseUrl, selectedSales, projectId, token])

    const handleSalesChartChange = (e) => {
        // console.log(selectedSales)
        setSelectedSales(e.target.value);
        // getSalesByMonth()
    }

    return (
        <>
            {/* <Card style={{ width: "100%" }}>
                <CardHeader>
                    Welcome to Dashboard
                </CardHeader>

            </Card> */}
            <Card>
                <CardHeader>

                    <CardBody style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Label for="exampleSelect" style={{ width: "50%" }}>
                            Welcome to {projectById.projectName} Dashboard
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            style={{ width: "25%", padding: "10px", marginRight: "10px" }}
                            onChange={
                                (e) => {
                                    setProjectId(e.target.value);
                                }}
                        >
                            {
                                projects?.map((p) => {
                                    return (
                                        <option value={p._id} key={p._id}>
                                            {p.projectName}
                                        </option >
                                    )
                                })
                            }

                        </Input>
                    </CardBody>
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
                                        //     // setSelectedSales(e.target.value);
                                        //     // getSalesByMonth()
                                        // }}
                                        onChange={
                                            (e) => {
                                                handleSalesChartChange(e);
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
                                    {/* <Button

                                    onClick={() => { getSales() }}
                                    >
                                        Go</Button> */}
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
                            <SalesChart labels={salesLables} amounts={salesAmount} />
                        </CardBody>
                    </Card>
                </CardBody>
                {/* <CardBody>
                    <PaymentsTable />
                </CardBody> */}
            </Card>
        </>
    )
}

export default ProjectDashboard;