import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const EmployeesSidebar = () => {
    return (
        <>
            {/* <div style={{ display: "flex", flexDirection: "column", width: "15vw" }}>
                <Link to="/employees/employees">
                    <button>Employees</button>
                </Link>
                <Link to="/employees/new">
                    <button>Create Employee</button>
                </Link>
            </div> */}

            <div style={{ display: "flex", flexDirection: "column", width: "15vw", minWidth: "15vw", height: "100vh", background: "#f0f0f0" }}>

                <ListGroup style={{ margin: "10px" }}>
                    <Link to="/employees/employees" style={{ textDecoration: "none" }}>
                        <ListGroupItem
                            action
                            // active
                            tag="button"
                        >
                            Employees
                        </ListGroupItem>
                    </Link>
                    <Link to="/employees/new" style={{ textDecoration: "none" }}>
                        <ListGroupItem
                            action
                            // active
                            tag="button"
                        >
                            Create Employees
                        </ListGroupItem>
                    </Link>

                </ListGroup>
            </div>
        </>
    )
}
export default EmployeesSidebar;