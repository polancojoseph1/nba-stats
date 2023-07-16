import { useState } from "react";
import { TextField, Typography, Stack, Box, Button } from "@mui/material";
import AlertMsg from "../../assets/AlertMsg";

function LogInForm({ showLogIn, logInData, error }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function clearInput() {
    setEmailInput("");
    setPasswordInput("");
  }

  function handleFormSubmit() {
    const logInCredentials = {
      email: emailInput.toLowerCase(),
      password: passwordInput,
    };
    logInData(logInCredentials);

    clearInput();
  }

  return (
    <Box
      sx={{
        backgroundColor: "beige",
        width: "fit-content",
        height: "fit-content",
        padding: "2rem",
        borderRadius: "2rem",
        position: "absolute",
        top: "28%",
        left: "67%",
      }}
    >
      <form>
        <Stack width="100%" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="medium"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="medium"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <Button variant="outlined" fullWidth onClick={handleFormSubmit}>
            LOGIN
          </Button>
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "black",
              flexGrow: 1,
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            New to NBA Stats? Try
            <span
              onClick={() => showLogIn(false)}
              onMouseOver={(e) => (e.target.style.cursor = "pointer")}
              style={{ color: "#1560BD" }}
            >
              <strong> Signing Up!</strong>
            </span>
          </Typography>
          {error && (
            <AlertMsg type="error" boxStyle="filled">
              Account not found. Please try again.
            </AlertMsg>
          )}
        </Stack>
      </form>
    </Box>
  );
}

export default LogInForm;
