export default function GameWonOverLay({ handlePage, gameWon, resetGame }) {
  if (gameWon) {
    return (
      <section className="game-won-overlay">
        <div className="game-won-ctn">
          <h1>Gotham Secured</h1>
          <p>
            The rogues are contained. The night grows quiet — for now. Gotham
            stands because the Batman remembers.
          </p>

          <button
            onClick={() => {
              resetGame();
              handlePage();
            }}
          >
            Return to the Batcave
          </button>
        </div>
      </section>
    );
  } else return null;
}
