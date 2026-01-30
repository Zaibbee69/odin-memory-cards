import MovieBg from "../components/MovieBg";
import BatmanLogo from "../components/BatmanLogo";

export default function Home() {
  return (
    <>
      <MovieBg />
      <BatmanLogo />
      <div className="hero-ctn">
        <h2>
          Arkham feeds on confusion and fear. Remember the symbols. Forget, and
          Gotham falls.
        </h2>
        <button>Start Game</button>
      </div>
    </>
  );
}
