import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginInPage from "./LogInPage/LoginInPages";
import RegisterPage from "./RegisterPage/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentListPage from "./StudentListPage/StudentListPage";
function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/teacher-portal" element={<RegisterPage />} />
          <Route path="/" element={<RegisterPage />} />
          <Route path="/logIn" element={<LoginInPage />} />
          <Route path="/studentList" element={<StudentListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
