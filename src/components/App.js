import React, { useEffect, useState } from "react";
import Employees from "./Employees/Employees";
import EmployeesBirthday from "./EmployeesBirthday/EmployeesBirthday";
import { FetchUsers } from "../services/users";
import "./App.css";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    FetchUsers().then((data) => setUsersList(data));
  }, []);

  return (
    <div className="App">
      <Employees data={usersList} />
      <EmployeesBirthday />
    </div>
  );
};

export default App;
