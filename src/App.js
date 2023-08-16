import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/projects/projects';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/navbar';
import CreateProject from './components/projects/createProject';
import ProjectsPage from './components/projects/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeesPage from './components/employees/EmployeesPage';
import Employees from './components/employees/Employees';
import CreateEmployees from './components/employees/createEmployees';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ProjectById from './components/projects/projectById';

// import { Toast, ToastBody, ToastHeader } from "reactstrap";

function App() {
  const baseUrl = "http://localhost:9020";
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("jwt"));
  const userlocal = JSON.parse(localStorage.getItem("user"));
  const [userdetails, setUserDetails] = useState(userlocal);
  // console.log(userlocal)
  // useEffect(() => {
  //   setUserDetails(userlocal);
  // }, [userlocal])
  // const token = localStorage.getItem("jwt");
  // if (!token) {
  //   setIsLoggedIn(false)
  //   // navigate("/signin")
  // } else {
  //   setIsLoggedIn(true)
  //   // navigate("/")
  // }

  return (
    < >
      <Router>
        <div style={{ width: "100vw" }}>
          <Navbar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setUserDetails={setUserDetails}
            userdetails={userdetails}
          />
        </div>
        {/* <div className="p-3 bg-success my-2 rounded">
          <Toast>
            <ToastHeader>
              Success
            </ToastHeader>
            <ToastBody>
              This is a toast on a success background — check it out!
            </ToastBody>
          </Toast>
        </div> */}
        <div style={{ width: "100vw", height: "85vh" }}>
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} baseUrl={baseUrl} userdetails={userdetails} setUserDetails={setUserDetails} />} />
            <Route path='/' element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/projects' element={<ProjectsPage />}>
              <Route path='myprojects' element={<Projects baseUrl={baseUrl} />} />
              <Route path='project/:id' element={<ProjectById baseUrl={baseUrl} />} />
              <Route path='new' element={<CreateProject baseUrl={baseUrl} />} />
            </Route>
            <Route path='/employees' element={<EmployeesPage />}>
              <Route path='employees' element={<Employees baseUrl={baseUrl} />} />
              <Route path='new' element={<CreateEmployees baseUrl={baseUrl} />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
