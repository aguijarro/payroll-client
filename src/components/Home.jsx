import React from "react";
import styled from "styled-components";


const Home = ({employees}) => {
    
  return (
    <Container>
      <Content>
          {
            <table>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contract Type Name</th>
                    <th>Role Id</th>
                    <th>Role Name</th>
                    <th>Role Description</th>
                    <th>Hourly Salary</th>
                    <th>Hourly Salary</th>  
                    <th>Monthly Salary</th>
                    <th>Anual Salary</th>                                                                                          
                </tr>
                {              
                    employees.map((employee, index) => {
                        return(
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.contractTypeName}</td>
                                <td>{employee.roleId}</td>
                                <td>{employee.roleName}</td>
                                <td>{employee.roleDescription}</td>
                                <td>{employee.hourlySalary}</td>
                                <td>{employee.monthlySalary}</td>
                                <td>{employee.annual_salary}</td>
                            </tr>
                            
                        )
                    })
                }
            </table>
          }

      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F0F4EF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
    width: 50%;
    height: 40vh;
    background: white;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`