import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle } from "reactstrap";

const EmployeeById = () => {
    return (
        <>
            <Card
                style={{ margin: "10px" }}
            >
                <CardHeader>
                    EMPLOYEE
                </CardHeader>
                <div style={{
                    // width: '18rem',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // margin: "10px"
                }}>
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                        style={{
                            width: "250px",
                            height: "250px",
                            borderRadius: "50%",
                            margin: "20px",
                            border: "5px solid #fcf0fc"
                        }}
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card title
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
                </div>
                <CardFooter>
                    <Link to={`/employees/edit/:id`}>
                        <Button color="warning">
                            <i class="uil uil-edit"></i>
                        </Button>
                    </Link>
                    <Button color="danger" >
                        {/* {projectId === project._id && isdeleted ? (
                                                    <Spinner color="light" size="sm">
                                                        Loading...
                                                    </Spinner>
                                                ) : ( */}
                        <i class="uil uil-trash-alt"
                        // onClick={() => { deleteProject(project._id) }}
                        ></i>
                        {/* )} */}
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default EmployeeById;