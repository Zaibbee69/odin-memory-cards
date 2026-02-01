export default function ScoreBoard({ score }) {
  return (
    <section className="score-ctn">
      <p>Score: {score}</p>
      <hr />
      <p>Best Score: </p>
    </section>
  );
}
