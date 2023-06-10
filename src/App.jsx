import { Box } from "@mui/material";
import {
  Home,
  LoginPage,
  Page404,
  Register,
  StudentPage,
  TeacherPage,
} from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const handleLogin = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", true);
  };

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  };

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<Register handleLogin={handleLogin} />}
        />
        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
        />

        {isLogin ? (
          <>
            <Route
              path="/student"
              element={<StudentPage handleLogout={handleLogout} />}
            />
            <Route
              path="/teacher"
              element={<TeacherPage handleLogout={handleLogout} />}
            />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/404" />} />
        )}

        <Route path="/404" element={<Page404 />} />
      </Routes>
    </Box>
  );
}

export default App;
