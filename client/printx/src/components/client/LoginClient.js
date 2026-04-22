import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useHistory } from "react-router-dom";
import API_BASE_URL from "../../apiConfig";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Example fetch call to your authentication endpoint
    try {
      const response = await fetch(
        `${API_BASE_URL}printx/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login Success:", data.token);
        document.cookie = `token=${data.token}; path=/`;
        alert("Logged in successfully");
        history.push("/");
      } else {
        console.log("Login Failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Grid container sx={{ mt: 15 }}>
      <Paper
        elevation={10}
        sx={{
          p: 5,
          height: "auto",
          width: 600, // Adjusted for consistency
          m: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#1876d1",
            m: "20px auto",
            width: 80,
            height: 80,
          }}
        >
          <VerifiedUserIcon sx={{ fontSize: 60 }} />
        </Avatar>
        <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
          Login Page
        </Typography>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          onClick={handleSubmit}
        >
          Submit <KeyboardArrowUpIcon sx={{ ml: 1 }} />
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
