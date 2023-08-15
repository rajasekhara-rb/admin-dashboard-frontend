import React from "react";
import ProjectSidebar from "./projectSidebar.js";
import { Outlet } from "react-router-dom";


const ProjectsPage = () => {
    return (
        < >
            <div
                style={{ display: "flex", height: "100%", width: "100%" }}
            >
                <div style={{ position: "abolute" }}>
                    <ProjectSidebar />
                </div>
                <div style={{ position: "relative", overflowY: "scroll", width: "85vw" }}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
export default ProjectsPage;