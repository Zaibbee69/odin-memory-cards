import { useEffect, useState } from "react";
import Header from "../components/Header";
import PlayArea from "../components/PlayArea";
import ScoreCount from "../components/ScoreCount";
import GameWonOverLay from "../components/GameWonOverLay";
import GameLostOverLay from "../components/GameLostOverLay";

export default function Game({ activePage, handlePage }) {
  const CORSHEADER = "https://corsproxy.io/?";
  const TOKEN = "3dbc92971f310dd0e69b672a3b59d117";
  const [imgUrls, setImgUrls] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedIds, setClickedIds] = useState(new Set([]));
  const [gameLost, setGameLost] = useState(false);

  const gameWon = score >= 5;

  function getRandomIds(ids, count = 5) {
    const shuffled = [...ids].sort(() => Math.random() - 0.5);
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

  function handleCardClick(id) {
    if (clickedIds.has(id)) {
      setScore(0);
      setClickedIds(new Set());
      setImgUrls((prev) => shuffleArray(prev));
      setGameLost(true);
      return;
    } else {
      setClickedIds((prevIds) => new Set(prevIds).add(id));
      setScore((prevScore) => prevScore + 1);
      setHighScore((prev) => Math.max(prev, score + 1));
      setImgUrls((prevImgs) => shuffleArray(prevImgs));
    }
  }

  useEffect(() => {
    if (activePage !== "game") return;

    const batmanIds = [
      17, // Alfred Pennyworth
      58, // Azrael
      63, // Batgirl
      69, // Batman
      73, // Batwoman V
      334, // Huntress
      491, // Nightwing
      505, // Oracle
      546, // Red Hood
      549, // Red Robin
      561, // Robin
      60, // Bane
      165, // Catwoman
      181, // Clock King
      214, // Deadshot
      216, // Deathstroke
      370, // Joker
      386, // Killer Croc
      427, // Man-Bat
      457, // Mister Freeze
      461, // Mister Zsasz
      514, // Penguin
      522, // Poison Ivy
      538, // Ra's Al Ghul
      558, // Riddler
      576, // Scarecrow
      609, // Solomon Grundy
      678, // Two-Face
    ];

    const randomBatmanIds = getRandomIds(batmanIds);

    const requests = randomBatmanIds.map((id) =>
      fetch(`${CORSHEADER}https://superheroapi.com/api/${TOKEN}/${id}`).then(
        (res) => res.json(),
      ),
    );

    Promise.all(requests)
      .then((data) => setImgUrls(data.map((character) => character)))
      .catch((err) => console.error(err));
  }, [activePage]);

  if (activePage === "game") {
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
  } else {
    return null;
  }
}
