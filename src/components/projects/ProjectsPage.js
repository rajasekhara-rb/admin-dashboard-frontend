import React from "react";
import ProjectSidebar from "./projectSidebar.js";
import { Outlet } from "react-router-dom";


const ProjectsPage = () => {
    return (
        <>
            <ProjectSidebar />

            <Outlet />
        </>
    )
}
export default ProjectsPage;