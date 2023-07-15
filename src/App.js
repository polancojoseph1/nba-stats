import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard.js";
import LandingPage from "./pages/login/LandingPage.js";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <div>{isLoggedIn ? <Dashboard /> : <LandingPage />}</div>;
}
