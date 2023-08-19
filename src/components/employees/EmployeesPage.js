import React from "react";
import EmployeesSidebar from "./employeesSidebar";
import { Outlet } from "react-router-dom";

const EmployeesPage = () => {
    return (
        <>
            <div
                style={{ display: "flex", height: "100%", width: "100%" }}
            >
                <div style={{ position: "abolute" }}>
                    <EmployeesSidebar />
                </div>
                <div style={{ position: "relative", overflowY: "scroll", width: "85vw", height: "100%" }}>
                    <Outlet />
                </div>
            </div>

        </>
    )
}
export default EmployeesPage;