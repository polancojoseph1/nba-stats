import { useState } from "react";
import NavBarDashboard from "../../assets/NavBarDashboard.js";
import FavoritesSection from "./sections/favorites/FavoritesSection.js";
import FavoritesPage from "../favorites/FavoritesPage.js";
import SearchPage from "../search/SearchPage.js";
import NewsPage from "../news/NewsPage.js";

function Dashboard({ activeAccount }) {
  const [page, setPage] = useState("Dashboard");
  const accountFavorites = activeAccount.favoritePlayers;

  const setPageHandler = (page) => setPage(page);

  // console.log(accountFavorites);

  return (
    <>
      <NavBarDashboard
        activeAccount={activeAccount}
        page={page}
        setPage={setPageHandler}
      />
      {page === "Dashboard" && (
        <FavoritesSection activeAccount={activeAccount} />
      )}
      {page === "Favorites" && (
        <FavoritesPage accountFavorites={accountFavorites} />
      )}
      {page === "Search" && <SearchPage activeAccount={activeAccount} />}
      {page === "News" && <NewsPage activeAccount={activeAccount} />}
    </>
  );
}

export default Dashboard;
