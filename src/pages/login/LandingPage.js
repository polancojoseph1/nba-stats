import { useState } from "react";
import NavBarLogin from "../../assets/NavBarLogin.js";
import LogInForm from "./LogInForm.js";
import SignUpForm from "./SignUpForm.js";

function LandingPage() {
  const [accountList, setAccountList] = useState([]);
  const [showLogIn, setShowLogIn] = useState(true);

  return (
    <div>
      <NavBarLogin />
      {showLogIn ? <LogInForm /> : <SignUpForm />}
    </div>
  );
}

export default LandingPage;
