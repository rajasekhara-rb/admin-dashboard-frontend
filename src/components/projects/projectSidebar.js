import React from "react";

import { Link } from "react-router-dom";

const ProjectSidebar = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", width: "15vw" }}>
                <Link to="/projects/myprojects">
                    <button>Projects</button>
                </Link>
                <Link to="/projects/new">
                <button>Create Project</button>
                </Link>
            </div>
        </>
    )
}
export default ProjectSidebar;