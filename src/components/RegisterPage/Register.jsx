/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = ({ handleLogin }) => {
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [existingUser, setExistingUser] = useState(false);
  const [universityError, setUniversityError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const login = data.get("login");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const university = data.get("university");

    // Check if required fields are empty
    if (
      !login.length < 5 ||
      !password < 6 ||
      !firstName < 3 ||
      !lastName < 3 ||
      (!isTeacher && !isStudent) ||
      !university ||
      university.toLowerCase() !== "cambridge"
    ) {
      setLoginError(!login);
      setPasswordError(!password);
      setFirstNameError(!firstName);
      setLastNameError(!lastName);
      setUniversityError(
        !university || university.toLowerCase() !== "cambridge"
      );
      return;
    }

    setIsLoading(true);

    try {
      // Check if the user with the provided login already exists
      const checkResponse = await axios.get(
        `http://localhost:3000/posts?login=${login}`
      );

      if (checkResponse.data.length > 0) {
        // User already exists
        setExistingUser(true);
        setIsLoading(false);
        return;
      }

      // User doesn't exist, proceed with registration
      const response = await axios.post("http://localhost:3000/posts", {
        login,
        password,
        firstName,
        lastName,
        role: isTeacher ? "teacher" : "student",
      });

      handleLogin();
      navigate("/login");

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setLoginError(true);
      setPasswordError(true);
    }
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
          Registratsiya
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
            color="success"
            error={loginError}
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
            color="success"
            error={passwordError}
            helperText={passwordError ? "Parolni kiriting" : ""}
            onChange={() => setPasswordError(false)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Ism"
            name="firstName"
            autoComplete="given-name"
            color="success"
            error={firstNameError}
            helperText={firstNameError ? "Ismni kiriting" : ""}
            onChange={() => setFirstNameError(false)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Familiya"
            name="lastName"
            autoComplete="family-name"
            color="success"
            error={lastNameError}
            helperText={lastNameError ? "Familiyani kiriting" : ""}
            onChange={() => setLastNameError(false)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="university"
            label="Kalit so'z"
            name="university"
            autoComplete="off"
            color="success"
            error={universityError}
            helperText={universityError ? "Kalit so'zni kiriting" : ""}
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              setUniversityError(value !== "cambridge");
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="teacher"
                color="success"
                checked={isTeacher}
                onChange={() => {
                  setIsTeacher(!isTeacher);
                  setIsStudent(false);
                }}
              />
            }
            label="O'qituvchi"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="student"
                color="success"
                checked={isStudent}
                onChange={() => {
                  setIsStudent(!isStudent);
                  setIsTeacher(false);
                }}
              />
            }
            label="Talaba"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color={loginError ? "error" : "success"}
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Ro`yxatdan o`tish"}
          </Button>
          {existingUser && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mt: 1, textAlign: "center" }}
            >
              Bunday foydalanuvchi allaqachon mavjud
            </Typography>
          )}
        </Box>
        <Link to="/login">
          <Typography
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#000",
            }}
          >
            Allaqachon ro`yxatdan o`tganmisiz
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default Register;
