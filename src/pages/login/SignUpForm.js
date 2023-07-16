import { useState } from "react";
import { formatName } from "../../config.js";
import { TextField, Typography, Stack, Box, Button } from "@mui/material";
import SelectTeamInput from "../dashboard/components/SelectTeamInput.js";
import AlertMsg from "../../assets/AlertMsg.js";

function SignUpForm({ showLogIn, signUpData }) {
  const [email, setEmail] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputCheck, setPasswordInputCheck] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function clearInput() {
    setEmail("");
    setPasswordInput("");
    setPasswordInputCheck("");
    setFirstName("");
    setLastName("");
    setFavoriteTeam("");
  }

  function handleFormSubmit() {
    // Guard clause for required form fields
    if (
      !email ||
      !passwordInput ||
      !passwordInputCheck ||
      !firstName ||
      !lastName
    ) {
      clearInput();
      setError(true);
      setErrorMsg("Please fill out all required fields");
      setTimeout(() => {
        setError(false);
        setErrorMsg("");
      }, 5000);
      return;
    }

    // Guard clause for matching passwords
    if (passwordInput !== passwordInputCheck) {
      clearInput();
      setError(true);
      setErrorMsg("Passwords do not match");
      setTimeout(() => {
        setError(false);
        setErrorMsg("");
      }, 5000);

      return;
    }

    // Create new account object to get added to account list
    const newAccount = {
      email: email.toLowerCase(),
      passwordInput,
      passwordInputCheck,
      firstName: formatName(firstName),
      lastName: formatName(lastName),
      favoriteTeam,
    };

    console.log(newAccount);
    signUpData(newAccount);

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
        top: "15%",
        left: "67%",
      }}
    >
      <form>
        <Stack width="100%" spacing={2}>
          <TextField
            required
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            size="small"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Re-Enter Password"
            type="password"
            autoComplete="current-password"
            size="small"
            value={passwordInputCheck}
            onChange={(e) => setPasswordInputCheck(e.target.value)}
          />
          <SelectTeamInput
            boxWidth="fullWidth"
            handleTeamInput={(team) => setFavoriteTeam(team)}
          >
            Your Home Team
          </SelectTeamInput>
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
          {error && (
            <AlertMsg type="error" boxStyle="filled">
              {errorMsg}
            </AlertMsg>
          )}
        </Stack>
      </form>
    </Box>
  );
}

export default SignUpForm;
