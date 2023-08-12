import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({isLoggedIn, setIsLoggedIn}) => {

    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/signin")
        } else {
            navigate("/")
        }
    }, [isLoggedIn, navigate])
    return (
        <>
            Dashboard


        </>
    )
}
export default Dashboard;