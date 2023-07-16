import { useState } from "react";
import NavBarLogin from "../../assets/NavBarLogin.js";
import SignUpForm from "./SignUpForm.js";
import LogInForm from "./LogInForm.js";

function LandingPage({
  accountList,
  setIsLoggedIn,
  setActiveAccount,
  AddNewAccount,
}) {
  const [showLogIn, setShowLogIn] = useState(true);

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
  }

  // This adds new account to account list array
  function handleSignUp(newAccount) {
    setActiveAccount(newAccount);
    setIsLoggedIn(true);
    AddNewAccount(newAccount);
  }

  return (
    <div>
      <NavBarLogin />
      {showLogIn ? (
        <LogInForm showLogIn={setShowLogIn} logInData={handleLogIn} />
      ) : (
        <SignUpForm showLogIn={setShowLogIn} signUpData={handleSignUp} />
      )}
    </div>
  );
}

export default LandingPage;
