import { Box } from "@mui/material";
import {
  Home,
  LoginPage,
  Page404,
  StudentPage,
  TeacherPage,
} from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
        />
        {isLogin ? (
          <>
            <Route path="/student" element={<StudentPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
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
