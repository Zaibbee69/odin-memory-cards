import Home from "./pages/Home";
import Game from "./pages/Game";
import MovieBg from "./components/MovieBg";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("home");

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("theme.webm");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current.pause();
    };
  }, []);

  function playMusic() {
    audioRef.current?.play();
    setIsPlaying(true);
  }

  function pauseMusic() {
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  function toggleMusic() {
    isPlaying ? pauseMusic() : playMusic();
  }

  function handlePage() {
    setActivePage((prev) => (prev === "home" ? "game" : "home"));
  }

  return (
    <>
      <MovieBg />

      <Home
        activePage={activePage}
        handlePage={handlePage}
        playMusic={playMusic}
      />

      <Game activePage={activePage} handlePage={handlePage} />

      <Footer toggleMusic={toggleMusic} isPlaying={isPlaying} />
    </>
  );
}

export default App;
