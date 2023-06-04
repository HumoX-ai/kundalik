import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <Box
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
        style={{ color: "black", fontFamily: "monospace" }}
      >
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/">
        <Button variant="contained" color="success">Back Home</Button>
      </Link>
    </Box>
  );
};
