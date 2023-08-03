import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Employees from './components/employees/Employees';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/navbar';
import Test from './components/Test';
import CreateProject from './components/projects/createProject';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Test />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='projects' element={<Projects />}>
            <Route path='new' element={<CreateProject />} />
          </Route>
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
