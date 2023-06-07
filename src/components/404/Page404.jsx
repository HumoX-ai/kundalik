import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h1"
        style={{ color: "black", fontFamily: "monospace" }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        style={{
          color: "black",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/">
        <Button variant="contained" color="success" sx={{ mt: 2 }}>
          Back Home
        </Button>
      </Link>
    </Container>
  );
};
