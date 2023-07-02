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
  const [nameError, setnameError] = useState(false);
  const [surnameError, setsurnameError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isParent, setIsParent] = useState(false); // New state for parent type
  const [existingUser, setExistingUser] = useState(false);
  const [universityError, setUniversityError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("login");
    const password = data.get("password");
    const name = data.get("name");
    const surname = data.get("surname");
    const university = data.get("university");

    // Check if required fields are empty
    if (
      username.length < 5 ||
      password.length < 6 ||
      name.length < 3 ||
      surname.length < 3 ||
      (!isTeacher && !isStudent && !isParent) ||
      !university ||
      university.toLowerCase() !== "cambridge"
    ) {
      setLoginError(username.length < 5);
      setPasswordError(password.length < 6);
      setnameError(name.length < 3);
      setsurnameError(surname.length < 3);
      setUniversityError(
        !university || university.toLowerCase() !== "cambridge"
      );
      return;
    }

    setIsLoading(true);

    try {
      const checkResponse = await axios.get(
        `http://localhost:3000/posts?username=${username}`
      );

      if (checkResponse.data && checkResponse.data.length > 0) {
        setExistingUser(true);
        setIsLoading(false);
        return;
      }

      const response = await axios.post("http://localhost:3000/posts", {
        username,
        password,
        name,
        surname,
        type: isTeacher ? "teacher" : isStudent ? "Student" : "parent",
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
            id="name"
            label="Ism"
            name="name"
            autoComplete="given-name"
            color="success"
            error={nameError}
            helperText={nameError ? "Ismni kiriting" : ""}
            onChange={() => setnameError(false)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="surname"
            label="Familiya"
            name="surname"
            autoComplete="family-name"
            color="success"
            error={surnameError}
            helperText={surnameError ? "Familiyani kiriting" : ""}
            onChange={() => setsurnameError(false)}
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
                  setIsParent(false); // Uncheck parent when teacher is selected
                }}
              />
            }
            label="O'qituvchi"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Student"
                color="success"
                checked={isStudent}
                onChange={() => {
                  setIsStudent(!isStudent);
                  setIsTeacher(false);
                  setIsParent(false); // Uncheck parent when Student is selected
                }}
              />
            }
            label="Talaba"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="parent"
                color="success"
                checked={isParent}
                onChange={() => {
                  setIsParent(!isParent);
                  setIsTeacher(false);
                  setIsStudent(false); // Uncheck Student when parent is selected
                }}
              />
            }
            label="Ota-ona"
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
