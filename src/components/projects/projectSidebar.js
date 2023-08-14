import React from "react";

import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const ProjectSidebar = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", width: "15vw", minWidth:"15vw", height: "100vh", background: "#f0f0f0" }}>
                {/* <ul>
                    <li >
                        <Link to="/projects/myprojects">
                            <Button color="primary">
                                Projects
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects/new">
                            <Button color="primary">
                                Create Project
                            </Button>
                        </Link>
                    </li>
                </ul> */}
                <ListGroup style={{ margin: "10px" }}>
                    <Link to="/projects/myprojects" style={{ textDecoration: "none" }}>
                        <ListGroupItem
                            action
                            // active
                            tag="button"
                        >
                            Projects
                        </ListGroupItem>
                    </Link>
                    <Link to="/projects/new" style={{ textDecoration: "none" }}>
                        <ListGroupItem
                            action
                            // active
                            tag="button"
                        >
                            Create Projects
                        </ListGroupItem>
                    </Link>

                </ListGroup>
            </div>
        </>
    )
}
export default ProjectSidebar;