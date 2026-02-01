import Home from "../pages/Home";
import Game from "../pages/Game";
import MovieBg from "../components/MovieBg";
import Footer from "../components/Footer";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("home");

  function handlePage() {
    setActivePage((prev) => {
      if (prev === "home") return "game";
      else return "home";
    });
  }

  return (
    <>
      <MovieBg />
      <Home activePage={activePage} handlePage={handlePage} />
      <Game activePage={activePage} handlePage={handlePage} />
      <Footer />
    </>
  );
}

export default App;
