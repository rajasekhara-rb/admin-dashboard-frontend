import React from "react";
import ProjectSidebar from "./projectSidebar.js";
// import CreateProject from "./createProject.js";
// import { Route, Routes } from "react-router-dom";

const Projects = () => {
    return (
        <>
            <ProjectSidebar />
            
            <div style={{ display: "flex" }}>
                {/* <Routes>
                    <Route path="/projects/projects" element={<ProjectSidebar />} />
                    <Route path="/projects/create" element={<CreateProject />} />
                </Routes> */}


            </div>
        </>
    )
}
export default Projects;