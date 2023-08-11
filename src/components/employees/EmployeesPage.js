import React from "react";
import EmployeesSidebar from "./employeesSidebar";
import { Outlet } from "react-router-dom";

const EmployeesPage = () => {
    return (
        <>
            <EmployeesSidebar />
            <Outlet />
        </>
    )
}
export default EmployeesPage;