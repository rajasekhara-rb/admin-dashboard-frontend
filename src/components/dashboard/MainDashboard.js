import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, FormGroup, Input, InputGroup, Label } from "reactstrap";
import PieChart from "../charts/pieChart";
import SalesChart from "../charts/salesChart";
import PaymentsTable from "../projects/paymentsTable";
import axios from "axios";

const MainDashboard = ({ isLoggedIn, baseUrl }) => {
    const navigate = useNavigate();

    const [payments, setPayments] = useState([])
    const token = localStorage.getItem("jwt")

    // const [monthlySales, setMonthlySales] = useState([])
    const [salesLables, setSalesLables] = useState([])
    // console.log(monthlySalesLables)
    const [salesAmount, setSalesAmount] = useState([])
    // console.log(monthlySalesAmount)

    const [selectedSales, setSelectedSales] = useState("daily")
    // console.log(selectedSales)

    const [projects, setProjects] = useState([])
    // console.log(projects)
    const [projectStatusLables, setProjectStatusLables] = useState([])
    console.log(projectStatusLables)
    const [projectStatusCounts, setProjectStatusCount] = useState([])
    console.log(projectStatusCounts)

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signin")
        } else {
            navigate("/")
        }
    }, [isLoggedIn, navigate])

    const getProjects = async () => {
        try {
            await axios.get(`${baseUrl}/projects/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((resp) => {
                // setLoading(false)
                setProjects(resp.data)
                // const ontrack = 0;
                resp.data.map((prj) => {
                    if (prj.projectStatus === "On Track") {
                        setProjectStatusLables([])
                        setProjectStatusLables(current => [...current, "On Track"])
                        // ontrack++
                        setProjectStatusCount(current => [...current, current + 1])
                    }
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])


    const getEmployeesData = async () => {
        try {
            await axios.get(`${baseUrl}/employees`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then((resp) => {
                setEmployees(resp.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getEmployeesData()
    }, [])


    const getSales = async () => {
        // e.preventDefault()
        // console.log(selectedSales)
        try {
            await axios.get(`${baseUrl}/sales/${selectedSales}`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then((data) => {
                // setMonthlySales(data.data)
                setSalesLables([])
                setSalesAmount([])
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
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSales()
    }, [0])

    const handleSalesChartChange = (e) => {
        // console.log(selectedSales)
        setSelectedSales(e.target.value);
        // getSalesByMonth()
    }


    useEffect(() => {
        const getPayments = async () => {
            try {
                await axios.get(`${baseUrl}/payments/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((data) => {
                        setPayments(data.data)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        getPayments()
    }, [baseUrl, token])



    return (
        <div style={{ overflow: "scroll", width: "100%", height: "100%" }}>
            <Card
                className="my-2"
                style={{
                    width: '98%',
                    margin: "auto"
                }}
            >
                <CardHeader>
                    Dashboard
                </CardHeader>
                <CardBody style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridGap: "10px" }}>

                    <Card style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0" }}>
                        <CardTitle tag="h5">
                            {projects.length}
                        </CardTitle>
                        <CardTitle tag="h5">
                            Projects
                        </CardTitle>
                    </Card>

                    <Card style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CardTitle tag="h5">
                            {employees.length}
                        </CardTitle>
                        <CardTitle tag="h5">
                            Employees
                        </CardTitle>
                    </Card>

                    <Card style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CardTitle tag="h5">
                            {payments.length}
                        </CardTitle>
                        <CardTitle tag="h5">
                            Payments
                        </CardTitle>
                    </Card>
                    {/* <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Go somewhere
                    </Button> */}
                </CardBody>
                {/* <CardFooter>
                    Footer
                </CardFooter> */}
            </Card>


            <Card
                className="my-2"
                style={{
                    width: '98%',
                    margin: "auto"
                }}
            >
                <CardHeader>
                    Project Charts
                </CardHeader>
                <CardBody style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px" }}>
                    <Card style={{ height: "100%" }}>
                        <CardHeader>
                            Projects Status
                        </CardHeader>
                        <CardBody style={{ margin: "auto" }}>
                            <PieChart />
                        </CardBody>
                    </Card>


                    <Card >
                        <CardHeader>
                            project with unassigned employee
                        </CardHeader>
                        <CardBody>
                            chart
                        </CardBody>
                    </Card>
                </CardBody>
                {/* <CardFooter>
                    Footer
                </CardFooter> */}
            </Card>

            <Card
                className="my-2"
                style={{
                    width: '98%',
                    margin: "auto"
                }}
            >
                <CardHeader>
                    Sales Charts
                </CardHeader>
                <CardBody style={{ display: "grid", gridTemplateColumns: "1fr", gridGap: "10px" }}>

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
                                    <Button

                                        onClick={() => { getSales() }}>Go</Button>
                                </div>
                            </FormGroup>
                        </CardHeader>
                        <CardBody style={{ margin: "auto", width: "100%" }}>
                            {
                                selectedSales ? (
                                    <SalesChart labels={salesLables} amounts={salesAmount} />
                                ) : (
                                    "Loading..."
                                )
                            }
                        </CardBody>
                    </Card>
                    {/* <Card >
                        <CardHeader>
                            Sales Yearly
                        </CardHeader>
                        <CardBody>
                            <SalesChart />
                        </CardBody>
                    </Card> */}

                    <Card >
                        <CardHeader>
                            All Payments
                        </CardHeader>
                        <CardBody>
                            <PaymentsTable payments={payments} />
                        </CardBody>
                    </Card>
                </CardBody>
                {/* <CardFooter>
                    Footer
                </CardFooter> */}
            </Card>
        </div>
    )
}

export default MainDashboard