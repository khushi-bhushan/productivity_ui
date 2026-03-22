import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css"; // Tailwind CSS

// Pages
// import UserPage from "./pages/UserPage";
import Dashboard from "./pages/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* Redirect / to /dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/user" element={<UserPage />} /> */}
    </Routes>
  </BrowserRouter>
);