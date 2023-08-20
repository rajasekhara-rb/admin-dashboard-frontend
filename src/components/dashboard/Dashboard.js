import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainDashboard from "../projects/MainDashboard";

const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {

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
            <MainDashboard />
        </>
    )
}
export default Dashboard;