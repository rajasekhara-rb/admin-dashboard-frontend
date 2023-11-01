import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Projects from './components/projects/projects.js';
// import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/navbar.js';
import CreateProject from './components/projects/createProject.js';
import ProjectsPage from './components/projects/ProjectsPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeesPage from './components/employees/EmployeesPage.js';
import Employees from './components/employees/Employees.js';
import CreateEmployees from './components/employees/createEmployees.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import ProjectById from './components/projects/projectById.js';
import EmployeeById from './components/employees/EmployeeById.js';
import EditEmployee from './components/employees/EditEmployee.js';
import EditProject from './components/projects/EditProject.js';
import ProjectDashboard from './components/projects/ProjectsDashboard.js';
import MainDashboard from './components/dashboard/MainDashboard.js';
import ProjectsList from './components/projects/ProjectsList.js';

// import { Toast, ToastBody, ToastHeader } from "reactstrap";

function App() {
  // const baseUrl = "http://localhost:9020";
  const baseUrl = "https://admin-dashboard-for-it-company-api.onrender.com";


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
        <div style={{ width: "100vw", height: "85vh", overflow: "hidden" }}>
          <Routes>
            <Route path='/signup' element={<Signup baseUrl={baseUrl} />} />
            <Route path='/signin' element={<Signin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} baseUrl={baseUrl} userdetails={userdetails} setUserDetails={setUserDetails} />} />
            {/* <Route path='/' element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} /> */}
            <Route path='/' element={<MainDashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} baseUrl={baseUrl} />} />
            <Route path='/projects' element={<ProjectsPage />}>
              <Route path='' element={<ProjectDashboard baseUrl={baseUrl} />} />
              <Route path='myprojects' element={<ProjectsList baseUrl={baseUrl} />} />
              <Route path='view/:id' element={<ProjectById baseUrl={baseUrl} />} />
              <Route path='edit/:id' element={<EditProject baseUrl={baseUrl} />} />
              <Route path='new' element={<CreateProject baseUrl={baseUrl} />} />
            </Route>
            <Route path='/employees' element={<EmployeesPage />}>
              <Route path='' element={<Employees baseUrl={baseUrl} />} />
              <Route path='view/:id' element={<EmployeeById baseUrl={baseUrl} />} />
              <Route path='edit/:id' element={<EditEmployee baseUrl={baseUrl} />} />
              <Route path='new' element={<CreateEmployees baseUrl={baseUrl} />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
