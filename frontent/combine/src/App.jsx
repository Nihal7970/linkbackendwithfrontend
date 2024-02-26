import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("/api")
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <>
      <h1>hello</h1>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee.name}, {employee.email}, {employee.age}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
