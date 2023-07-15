import { useState } from "react";
import NavBar from "../../assets/NavBar.js";
import LogInForm from "./LogInForm.js";
import SignUpForm from "./SignUpForm.js";

function LandingPage() {
  const [showLogIn, setShowLogIn] = useState(true);

  return (
    <div>
      <NavBar />
      {showLogIn ? <LogInForm /> : <SignUpForm />}
    </div>
  );
}

export default LandingPage;
