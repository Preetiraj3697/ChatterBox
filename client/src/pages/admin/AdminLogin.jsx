import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import {Navigate} from 'react-router-dom'
import { useInputValidation } from "6pp";
const isAdmin = true;
const AdminLogin = () => {
  const secretKey = useInputValidation("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    };
    if(isAdmin) return <Navigate to="/admin/dashboard" />
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgb(119 3 3 / 50%), rgb(26 4 255 / 50%))",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
              <Typography variant="h5">Admin Login</Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={submitHandler}
              >
                <TextField
                  required
                  fullWidth
                  label="Secret Key"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  alue={secretKey.value}
                  onChange={secretKey.changeHandler}
                />
                <Button
                  sx={{ marginTop: "1rem" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
              </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;