import { useState } from "react";
import NavBarLogin from "../../assets/NavBarLogin.js";
import SignUpForm from "./SignUpForm.js";
import LogInForm from "./LogInForm.js";
import Grid from "@mui/material/Unstable_Grid2";

function LandingPage({
  accountList,
  setIsLoggedIn,
  setActiveAccount,
  AddNewAccount,
}) {
  const [showLogIn, setShowLogIn] = useState(true);
  const [error, setError] = useState(false);

  // This handles validating the log in data
  function handleLogIn(logInData) {
    const existingAccount = accountList.some(
      (acc) =>
        acc.email === logInData.email && acc.password === logInData.password
    );

    const activeAccount = accountList.find(
      (acc) =>
        acc.email === logInData.email && acc.password === logInData.password
    );

    if (existingAccount) {
      setActiveAccount(activeAccount);
      setIsLoggedIn(true);
    }

    if (!existingAccount) setError(true);
    setTimeout(() => setError(false), 5000);
  }

  // This adds new account to account list array
  function handleSignUp(newAccount) {
    setActiveAccount(newAccount);
    setIsLoggedIn(true);
    AddNewAccount(newAccount);
  }

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <NavBarLogin />
      {showLogIn ? (
        <LogInForm
          showLogIn={setShowLogIn}
          logInData={handleLogIn}
          error={error}
        />
      ) : (
        <SignUpForm showLogIn={setShowLogIn} signUpData={handleSignUp} />
      )}
    </Grid>
  );
}

export default LandingPage;
