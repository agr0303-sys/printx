import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import API_BASE_URL from "../../apiConfig";
// Shop SignUp

const SignUp = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [otpDisabled, setotpDisabled] = useState(false);
  const [showSignUp, setShowSignUp] = useState(true);
  const [otp, setOtp] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [pincode, setPincode] = useState("");
  const history = useHistory();

  const paperStyle = {
    padding: 20,
    width: 350,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1876d1",
    margin: "30px 0 0 0",
    width: 80,
    height: 80,
    fontSize: 60,
  };
  const btnstyle = { margin: "8px 0" };

  const handlenameChange = (event) => {
    setname(event.target.value);
  };

  const handlephoneChange = (event) => {
    setphone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 15000);

    // Make your API call for sign up here
    try {
      // Mock API call
      const response = await fetch(
        `${API_BASE_URL}printx/api/v1/auth/sendotp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      // console.log(response);
      console.log("vfvgg" + response.message);
      if (response.ok) {
        setShowSignUp(false); // Hide sign-up form
      } else {
        console.log("Error submitting form data to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitOtp = async (event) => {
    event.preventDefault();
    // Make your API call for OTP verification here
    setotpDisabled(true);
    setTimeout(() => {
      setotpDisabled(false);
    }, 15000);

    try {
      // Mock API call
      const response = await fetch(
        `${API_BASE_URL}printx/api/v1/shopauth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            name,
            phone,
            password,
            confirmPassword,
            state,
            city,
            street,
            pincode,
          }),
        }
      );
      console.log("msgis" + response);
      if (response.ok) {
        // Data successfully sent to backend
        alert("Data sent successfully");
        history.push("/loginclient");
        // Reset fields if needed
      } else {
        console.log("Error submitting OTP to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon fontSize="80" />
          </Avatar>
          <h1>Sign Up</h1>
        </Grid>
        {showSignUp ? (
          <form onSubmit={handleSubmitSignUp}>
            <TextField
              id="name"
              label="name"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={name}
              onChange={handlenameChange}
            />
            <TextField
              id="Number"
              label="Ph-Number"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={phone}
              onChange={handlephoneChange}
            />
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              fullWidth
              required
              sx={{ margin: "10px 0" }}
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              id="ConfirmPassword"
              label="Confirm-Password"
              variant="outlined"
              fullWidth
              required
              sx={{ margin: "10px 0" }}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <TextField
              id="state"
              label="State"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={state}
              onChange={handleStateChange}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={city}
              onChange={handleCityChange}
            />
            <TextField
              id="street"
              label="Street"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={street}
              onChange={handleStreetChange}
            />
            <TextField
              id="pincode"
              label="Pin Code"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={pincode}
              onChange={handlePincodeChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
              }
              label="Remember Me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={handleSubmitSignUp}
              disabled={buttonDisabled}
            >
              Sign Up
            </Button>
          </form>
        ) : (
          <form onSubmit={handleSubmitOtp}>
            <TextField
              id="Otp"
              label="Enter OTP"
              variant="outlined"
              fullWidth
              sx={{ margin: "10px 0" }}
              value={otp}
              onChange={handleOtpChange}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={handleSubmitOtp}
              disabled={otpDisabled}
            >
              Submit OTP
            </Button>
          </form>
        )}
        <Typography>
          <Link to="#" style={{ textDecoration: "none" }}>
            Forgot Password
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
