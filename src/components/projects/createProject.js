import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CreateProject = ({ baseUrl }) => {

    // const handleChange = () => { }
    // const handleSubmit=()=>{}
    return (
        <>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <Form style={{ marginTop: "50px", width: "95%", border: "1px solid #f0f0f0", padding: "20px", borderRadius: "10px" }}>
                    <FormGroup>
                        <h2 style={{ textAlign: "center" }}>Create Project</h2>
                        <hr style={{ border: "1px solid blue" }}></hr>
                    </FormGroup>
                    <FormGroup>
                        <Label
                            for="exampleEmail"
                            // hidden
                        >
                            Project Name
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="name"
                            placeholder=" Project Name"
                            type="text"
                        // onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label
                            for="examplePassword"
                            // hidden
                        >
                            Project Description
                        </Label>
                        <Input
                            id="examplePassword"
                            name="description"
                            placeholder="Project Description"
                            type="textarea"
                        // onChange={handleChange}
                        />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label>
                            Status
                        </Label>
                        <Input
                            className="mb-3"
                            type="select"
                        >
                            <option>
                                Not Started
                            </option>
                            <option>
                                On Track
                            </option>
                            <option>
                                Pending
                            </option>
                            <option>
                                Completed
                            </option>
                        </Input>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label>
                            Progress
                        </Label>
                        <Input
                            className="mb-3"
                            type="range"
                            min={0}
                            max={100}
                        >

                        </Input>
                    </FormGroup>
                    {' '}
                    <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button color="primary"
                            // onClick={handleSubmit}
                            style={{ width: "100%" }}>
                            Submit
                        </Button>
                        {/* {" "}
                        <Button color="link" onClick={() => { navigate("/signup") }} style={{ width: "50%" }}>
                            Don't have an account? SignUp
                        </Button> */}
                    </FormGroup>
                </Form>
            </div>

        </>
    )
}
export default CreateProject;