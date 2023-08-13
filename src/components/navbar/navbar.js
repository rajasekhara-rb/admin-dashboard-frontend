import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn, userdetails }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear("jwt");
        setIsLoggedIn(false);
        navigate("/signin")
    }
    return (
        <>
            <nav id="navbar"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // background: "#fff",
                    width: "100vw",
                    padding: "15px",
                    background: "#Afb5b7"
                }}>
                {
                    isLoggedIn ? (
                        <div className="nav-left" style={{ width: "30%" }}>
                            <ul style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "20px" }}>
                                <li style={{ listStyle: "none" }}>
                                    <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                                        Admin Dashboard
                                    </Link>
                                </li>
                                <li style={{ listStyle: "none" }}>
                                    <Link to="/projects" style={{ textDecoration: "none", color: "#ffffff" }}>
                                        Projects
                                    </Link>
                                </li>
                                <li style={{ listStyle: "none" }}>
                                    <Link to="/employees" style={{ textDecoration: "none", color: "#ffffff" }}>
                                        Employees
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (

                        <div className="nav-left" style={{ width: "30%" }}>
                            <ul style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "20px" }}>
                                <li style={{ listStyle: "none" }}>
                                    <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                                        Admin Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )
                }

                {isLoggedIn ? (
                    <div className="nav-right"
                        style={{ display: "flex", padding: "0", margin: "0" }}>
                        {/* <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // margin: "auto",
                            background: "#2596be",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",

                        }}>
                            <i class="uil uil-plus"
                                style={{
                                    fontSize: "20px",
                                    padding: "0"
                                    // height: "100%",
                                    // width: "100%"
                                }}></i>
                        </div> */}
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: "0",
                            padding: "0"
                        }}>
                            <div style={{ display: "flex", flexDirection: "column", fontSize: "15px", margin: "0 10px" }}>
                                <h4 style={{ padding: "0", margin: "0" }}>Hi. </h4>
                                <p style={{ padding: "0", margin: "0" }}>@</p>
                            </div>
                            <img
                                src="https://www.w3schools.com/howto/img_avatar.png"
                                alt="avatar"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    margin: "0 10px"
                                }}
                            ></img>
                        </div>
                        <div>
                            <i class="uil uil-signout" style={{
                                fontSize: "40px",
                                padding: "0"
                                // height: "100%",
                                // width: "100%"
                            }} onClick={handleLogout}></i>
                        </div>
                    </div>
                ) : (
                    <div style={{ display: "flex", padding: "0", margin: "0", width: "20%" }}>
                        <ul style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "20px" }}>
                            <li style={{ listStyle: "none" }}>
                                <Link to="/signup" style={{ textDecoration: "none", color: "#ffffff" }}>
                                    Signup
                                </Link>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <Link to="/signin" style={{ textDecoration: "none", color: "#ffffff" }}>
                                    Signin
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}



            </nav>


        </>
    )
}
export default Navbar;
