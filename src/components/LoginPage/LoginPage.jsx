/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../../api/db.json"; // Import the JSON file
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
export const LoginPage = ({ handleLogin }) => {
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let isTeacher = false;
  let isStudent = false;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        const jsonData = response.data;
        setIsLoading(false);

        // Use jsonData for further processing
        console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const login = data.get("login");
    const password = data.get("password");

    // Check if the login and password match a teacher's credentials
    const isTeacher = db.teachers.some(
      (teacher) => teacher.login === login && teacher.password === password
    );

    // Check if the login and password match a student's credentials
    const isStudent = db.students.some(
      (student) => student.login === login && student.password === password
    );

    setIsLoading(true); // Set loading state to true

    setTimeout(() => {
      if (isTeacher || isStudent) {
        handleLogin();
        navigate(isTeacher ? "/teacher" : "/student");
      } else {
        setLoginError(true);
        setPasswordError(true);
      }
      setIsLoading(false); // Set loading state to false after the delay
    }, 3000);
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Tizimga kirish
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="text"
            autoFocus
            error={loginError}
            color="success"
            helperText={loginError ? "Loginni kiriting" : ""}
            onChange={() => setLoginError(false)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Parol"
            type="password"
            id="password"
            autoComplete="current-password"
            error={passwordError}
            color="success"
            helperText={passwordError ? "Parolni kiriting" : ""}
            onChange={() => setPasswordError(false)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Eslab qolish"
          />
          {loginError && !isTeacher && !isStudent && (
            <Typography color="error">
              Bunday foydalanuvchi mavjud emas
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color={loginError ? "error" : "success"}
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              (isTeacher || isStudent) && <Link to="/">Kirish</Link>
            )}
            {!isLoading && !(isTeacher || isStudent) && "Kirish"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
