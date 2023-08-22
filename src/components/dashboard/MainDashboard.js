import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from "reactstrap";
import PieChart from "../charts/pieChart";
import SalesChart from "../charts/salesChart";
import PaymentsTable from "../projects/paymentsTable";
import axios from "axios";

const MainDashboard = ({ isLoggedIn, baseUrl }) => {

    const [payments, setPayments] = useState([])
    const token = localStorage.getItem("jwt")

    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signin")
        } else {
            navigate("/")
        }
    }, [isLoggedIn, navigate])


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
                            3
                        </CardTitle>
                        <CardTitle tag="h5">
                            Projects
                        </CardTitle>
                    </Card>

                    <Card style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <CardTitle tag="h5">
                            9
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
                        <CardHeader>
                            Sales Monthly
                        </CardHeader>
                        <CardBody style={{ margin: "auto", width: "100%" }}>
                            <SalesChart />
                        </CardBody>
                    </Card>
                    <Card >
                        <CardHeader>
                            Sales Yearly
                        </CardHeader>
                        <CardBody>
                            <SalesChart />
                        </CardBody>
                    </Card>

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