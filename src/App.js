import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/projects/ProjectsPage';
import Employees from './components/employees/Employees';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/navbar';
import CreateProject from './components/projects/createProject';
import ProjectsPage from './components/projects/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/projects' element={<ProjectsPage />}>
            <Route path='myprojects' element={<Projects />} />
            {/* <Route path='project/:id' element={<Projects />} /> */}
            <Route path='new' element={<CreateProject />} />

          </Route>
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
