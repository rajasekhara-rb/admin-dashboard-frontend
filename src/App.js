import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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

function App() {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("jwt"))
  // const token = localStorage.getItem("jwt");
  // if (!token) {
  //   setIsLoggedIn(false)
  //   // navigate("/signin")
  // } else {
  //   setIsLoggedIn(true)
  //   // navigate("/")
  // }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/projects' element={<ProjectsPage />}>
            <Route path='myprojects' element={<Projects />} />
            {/* <Route path='project/:id' element={<Projects />} /> */}
            <Route path='new' element={<CreateProject />} />
          </Route>
          <Route path='/employees' element={<EmployeesPage />}>
            <Route path='employees' element={<Employees />} />
            <Route path='new' element={<CreateEmployees />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
