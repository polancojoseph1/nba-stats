import { useState } from "react";
import NavBarLogin from "../../assets/NavBarLogin.js";
import SignUpForm from "./SignUpForm.js";
import LogInForm from "./LogInForm.js";

function LandingPage({ accountList }) {
  const [showLogIn, setShowLogIn] = useState(true);
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
