export default function Footer({ toggleMusic, isPlaying }) {
  return (
    <footer>
      <button className="sound-toggle" onClick={toggleMusic}>
        {isPlaying ? "🔊 Sound On" : "🔇 Sound Off"}
      </button>
    </footer>
  );
}
