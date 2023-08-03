import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProjectSidebar = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", width: "15vw" }}>
                <Link to="/projects/projects">
                    <Button variant="text" size="large" sx={{ margin: 1 }}>Projects</Button>
                </Link>
                <Link to="/projects/new">
                    <Button variant="text" size="large" sx={{ margin: 1 }}>Create Projects</Button>
                </Link>
            </div>
        </>
    )
}
export default ProjectSidebar;