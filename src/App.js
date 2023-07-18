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
      homeTeam: "DEN",
      favoritePlayers: [
        20000485, 20001441, 20000497, 20001666, 20000617, 20000884,
      ],
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      password: "John123",
      homeTeam: "LAL",
      favoritePlayers: [20000884, 20001460, 20000441, 20000619],
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeAccount, setActiveAccount] = useState({
    firstName: "Justin",
    lastName: "Rivera",
    email: "jman199610@yahoo.com",
    password: "Justin123",
    favoriteTeam: "DEN",
    favoritePlayers: [
      20000485, 20001441, 20000497, 20001666, 20000617, 20000884,
    ],
  });

  function handleNewAccount(account) {
    setAccountList((accountList) => [...accountList, account]);
  }

  return (
    <>
      {isLoggedIn ? (
        <Dashboard activeAccount={activeAccount} />
      ) : (
        <LandingPage
          setIsLoggedIn={setIsLoggedIn}
          setActiveAccount={setActiveAccount}
          AddNewAccount={handleNewAccount}
          accountList={accountList}
        />
      )}
    </>
  );
}

// NEWS BY PLAYER
