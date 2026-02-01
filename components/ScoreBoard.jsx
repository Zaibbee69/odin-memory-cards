export default function ScoreBoard({ score, highScore }) {
  return (
    <section className="score-ctn">
      <p>Score: {score}</p>
      <hr />
      <p>Best Score: {highScore} </p>
    </section>
  );
}
