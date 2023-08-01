import NavBarDashboard from "../../assets/NavBarDashboard.js";
import FavoritesSection from "./sections/favorites/FavoritesSection.js";

function Dashboard({ activeAccount }) {
  return (
    <>
      <NavBarDashboard activeAccount={activeAccount} />
      <FavoritesSection activeAccount={activeAccount} />
    </>
  );
}

export default Dashboard;
