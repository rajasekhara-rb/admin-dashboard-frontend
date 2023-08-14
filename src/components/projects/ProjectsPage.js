import React from "react";
import ProjectSidebar from "./projectSidebar.js";
import { Outlet } from "react-router-dom";


const ProjectsPage = () => {
    return (
        < >
            <div style={{ display: "flex", height: "100%", width: "100%" }}>
                <ProjectSidebar />
                <Outlet />
            </div>
        </>
    )
}
export default ProjectsPage;