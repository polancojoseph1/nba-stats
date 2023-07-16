import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard.js";
import LandingPage from "./pages/login/LandingPage.js";

export default function App() {
  const [accountList, setAccountList] = useState([
    {
      firstName: "Justin",
      lastName: "Rivera",
      email: "jman199610@yahoo.com",
      password: "Justin123",
      favoriteTeam: "DEN",
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      password: "John123",
      favoriteTeam: "LAL",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeAccount, setActiveAccount] = useState({
    firstName: "Justin",
    lastName: "Rivera",
    email: "jman199610@yahoo.com",
    password: "Justin123",
    favoriteTeam: "DEN",
  });

  function handleNewAccount(account) {
    setAccountList((accountList) => [...accountList, account]);
  }

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard activeAccount={activeAccount} />
      ) : (
        <LandingPage
          setIsLoggedIn={setIsLoggedIn}
          accountList={accountList}
          setActiveAccount={setActiveAccount}
          AddNewAccount={handleNewAccount}
        />
      )}
    </div>
  );
}
