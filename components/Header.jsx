import ScoreBoard from "./ScoreBoard";
import BatmanLogo from "./BatmanLogo";

export default function Header({ handlePage, score }) {
  return (
    <header>
      <BatmanLogo handlePage={handlePage} />
      <ScoreBoard score={score} />
    </header>
  );
}
