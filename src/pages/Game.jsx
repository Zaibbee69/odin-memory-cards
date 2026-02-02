import { useEffect, useState } from "react";
import Header from "../components/Header";
import PlayArea from "../components/PlayArea";
import ScoreCount from "../components/ScoreCount";
import GameWonOverLay from "../components/GameWonOverLay";
import GameLostOverLay from "../components/GameLostOverLay";

import batmanCharacters from "../data/batmanCharacters.json";

export default function Game({ activePage, handlePage }) {
  const [imgUrls, setImgUrls] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedIds, setClickedIds] = useState(new Set([]));
  const [gameLost, setGameLost] = useState(false);

  const gameWon = score >= 5;

  function getRandomCharacters(characters, count = 5) {
    const shuffled = [...characters].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  function resetGame() {
    setScore(0);
    setClickedIds(new Set());
    setGameLost(false);
  }

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const playSfx = (src) => {
    const sfx = new Audio(src);
    sfx.volume = 0.7;
    sfx.play();
  };

  function handleCardClick(id) {
    playSfx("play.wav");

    if (clickedIds.has(id)) {
      setScore(0);
      setClickedIds(new Set());
      setImgUrls((prev) => shuffleArray(prev));
      setGameLost(true);
      return;
    }

    setClickedIds((prev) => new Set(prev).add(id));
    setScore((prev) => prev + 1);
    setHighScore((prev) => Math.max(prev, score + 1));
    setImgUrls((prev) => shuffleArray(prev));
  }

  useEffect(() => {
    if (activePage !== "game") return;

    resetGame();

    const randomCharacters = getRandomCharacters(batmanCharacters, 5);
    setImgUrls(randomCharacters);
  }, [activePage]);

  if (activePage !== "game") return null;

  return (
    <>
      <Header handlePage={handlePage} score={score} highScore={highScore} />
      <PlayArea imgUrls={imgUrls} handleCardClick={handleCardClick} />
      <ScoreCount score={score} />
      <GameWonOverLay
        handlePage={handlePage}
        gameWon={gameWon}
        resetGame={resetGame}
      />
      <GameLostOverLay
        handlePage={handlePage}
        gameLost={gameLost}
        resetGame={resetGame}
      />
    </>
  );
}
