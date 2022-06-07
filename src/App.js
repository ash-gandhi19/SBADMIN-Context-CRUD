import "./App.css";
import Siderbar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import AllStudents from "./Components/AllStudents";
import AddStudents from "./Components/AddStudents";
import Hooks from "./Components/Hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditStudent from "./Components/EditStudent";
import React, { useState } from "react";

export const StudentsContext = React.createContext();
export const dashboardData = React.createContext();
function App() {
  let data = {
    annual: "20,000",
    earning: "2,40,000",
    pending: "12",
    task: "20",
  };

  let [students, setStudents] = useState([
    {
      name: "Aishwarya",
      email: "ash@gmail.com",
      mobile: "8983662057",
      class: "B30WD",
    },
    {
      name: "Rucha",
      email: "rucha@gmail.com",
      mobile: "7894561230",
      class: "B30WD",
    },
    {
      name: "Dheeraj",
      email: "dheeraj@gmail.com",
      mobile: "7523698412",
      class: "B30WD",
    },
  ]);
  return (
    <>
      <Router>
        <StudentsContext.Provider value={{ students, setStudents }}>
          <dashboardData.Provider value={data}>
            <div style={{ display: "grid", gridTemplateColumns: "17% 83%" }}>
              <div>
                <Siderbar />
              </div>
              <div>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/all-students" element={<AllStudents />} />
                  <Route path="/add-students" element={<AddStudents />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/hooks" element={<Hooks />} />
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </div>
            </div>
          </dashboardData.Provider>
        </StudentsContext.Provider>
      </Router>
    </>
  );
}

export default App;
