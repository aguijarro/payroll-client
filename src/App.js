import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import styled from 'styled-components'

import { get_employees, get_employee } from "./services/employeeServices";

import Header from './components/Header'
import Home from './components/Home'

import './App.css';

function App() {

  const [employeeId, setEmployeeId] = useState('1');
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await get_employees();
    setEmployees(response.data);
  };

  const fetchEmployee = async (employee_id) => {
    const response = await get_employee(employee_id);
    setEmployees([response.data]);
  };

  const handleSubmit = () => {
    if (employeeId !== ''){
      fetchEmployee(parseInt(employeeId))
    }else{
      fetchEmployees()
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, [employeeId]);

  return (
    <div className="App">
      <Router>
        {
          <Container>
            <Header employeeId={employeeId} 
                setEmployeeId={setEmployeeId}
                handleSubmit={handleSubmit}
            />
            <Main>
              <Switch>
                <Route path="/home">
                  <Home employees={employees}/>
                </Route>
                <Redirect from="/" exact to="/home" />
              </ Switch>
            </Main>
          </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
`
