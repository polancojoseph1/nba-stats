import { useState } from "react";
import { TextField, Typography, Stack, Box, Button } from "@mui/material";

function SignUpForm({ showLogIn }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputCheck, setPasswordInputCheck] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function clearInput() {
    setEmailInput("");
    setPasswordInput("");
    setPasswordInputCheck("");
    setFirstName("");
    setLastName("");
  }

  function handleFormSubmit() {
    console.log(
      emailInput,
      passwordInput,
      passwordInputCheck,
      firstName,
      lastName
    );
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
        top: "25%",
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
            Create Account
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
            Already have an account?
            <span
              onClick={() => showLogIn(true)}
              onMouseOver={(e) => (e.target.style.cursor = "pointer")}
              style={{ color: "#1560BD" }}
            >
              <strong> Login </strong>
            </span>
            here
          </Typography>
        </Stack>
      </form>
    </Box>
  );
}

export default SignUpForm;
