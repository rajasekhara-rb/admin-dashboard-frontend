import React from "react";

import { Typography, Button } from "@mui/material";

const Test = () => {
    return (
        <>
            <div>
                <Typography variant="h1" sx={{ color: "red" }}>
                    Hello word i am MUI
                </Typography>

            </div>

            <div>
                <Button onClick={() => alert("Button Clicked")} variant="contained" size="large" sx={{ margin: 3 }} color="success">First</Button>
                <Button onClick={() => alert("Button Clicked")} variant="outlined" size="medium" sx={{ margin: 3 }} color="error">First</Button>
                <Button onClick={() => alert("Button Clicked")} variant="text" size="small" sx={{ margin: 3 }} color="info">First</Button>
            </div>
        </>
    )
}
export default Test;