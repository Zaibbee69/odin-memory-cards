import MovieBg from "../components/MovieBg";
import Header from "../components/Header";
import PlayArea from "../components/PlayArea";
import ScoreCount from "../components/ScoreCount";

export default function Game() {
  return (
    <>
      <MovieBg />
      <Header />
      <PlayArea />
      <ScoreCount />
    </>
  );
}
