import { useState } from "react";
import NavBarLogin from "../../assets/NavBarLogin.js";
import LogInForm from "./SignUpForm.js";
import SignUpForm from "./LogInForm.js";

function LandingPage({ accountList }) {
  const [showLogIn, setShowLogIn] = useState(false);
  const [logInData, setLogInData] = useState({});

  console.log(logInData);

  return (
    <div>
      <NavBarLogin />
      {showLogIn ? (
        <LogInForm showLogIn={setShowLogIn} logInData={setLogInData} />
      ) : (
        <SignUpForm showLogIn={setShowLogIn} />
      )}
    </div>
  );
}

export default LandingPage;
