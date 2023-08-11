import React from "react";
import { Link } from "react-router-dom";

const EmployeesSidebar = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", width: "15vw" }}>
                <Link to="/employees/employees">
                    <button>Employees</button>
                </Link>
                <Link to="/employees/new">
                    <button>Create Employee</button>
                </Link>
            </div>
        </>
    )
}
export default EmployeesSidebar;