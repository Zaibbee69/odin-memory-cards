import ScoreBoard from "./ScoreBoard";
import BatmanLogo from "./BatmanLogo";

export default function Header({ handlePage, score, highScore }) {
  return (
    <header>
      <BatmanLogo handlePage={handlePage} />
      <ScoreBoard score={score} highScore={highScore} />
    </header>
  );
}
