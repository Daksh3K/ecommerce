import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthProvider from "./components/AuthProvider";
import Navigation from "./components/Navigation";
import Dashboard from "./Dashboard";
import Signin from "./pages/Signin";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
);

