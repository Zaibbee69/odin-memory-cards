export default function GameLostOverLay({ handlePage, gameLost, resetGame }) {
  if (gameLost) {
    return (
      <section className="game-lost-overlay">
        <div className="game-lost-ctn">
          <h1>Gotham Fell</h1>
          <p>
            You hesitated. The rogues remembered. In Gotham, one mistake is all
            it takes.
          </p>

          <button
            onClick={() => {
              resetGame();
              handlePage();
            }}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  } else return null;
}
