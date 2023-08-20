import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from "reactstrap";

const MainDashboard = () => {
    return (
        <div style={{ overflow: "scroll", width:"100%", height:"100%" }}>
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
                            10
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

                    <Card >
                        <CardHeader>
                            Pie cahart project status wise
                        </CardHeader>
                        <CardBody>
                            chart
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

                    <Card >
                        <CardHeader>
                            Sales month wise
                        </CardHeader>
                        <CardBody>
                            chart
                        </CardBody>
                    </Card>
                    <Card >
                        <CardHeader>
                            sales yearly
                        </CardHeader>
                        <CardBody>
                            chart
                        </CardBody>
                    </Card>

                    <Card >
                        <CardHeader>
                            all Payments
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
        </div>
    )
}

export default MainDashboard