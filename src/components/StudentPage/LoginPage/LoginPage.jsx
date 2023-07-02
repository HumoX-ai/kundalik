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
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

export const LoginPage = ({ handleLogin }) => {
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]); // Store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        const jsonData = response.data;
        console.log(response.data);
        setData(jsonData); // Set the fetched data
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    setIsLoading(true); // Set loading state to true

    // Check if the login and password match a user's credentials
    const user = Object.values(data).find(
      (item) => item.username === username && item.password === password
    );

    setTimeout(() => {
      if (user) {
        handleLogin();
        navigate(
          user.type === "Teacher"
            ? "/teacher"
            : user.type === "Student"
            ? "/student"
            : "/parent",
          {
            state: { name: user.name, surname: user.surname },
          }
        );
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
            name="username"
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
            control={<Checkbox value="remember" color="success" />}
            label="Eslab qolish"
          />
          {loginError && (
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
              <Typography>Kirish</Typography>
            )}
          </Button>
        </Box>
        <Link to="/register">
          <Typography
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#000",
            }}
          >
            Registratsiya qilish
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};
