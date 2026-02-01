import { useBackgroundMusic } from "./useBackgroundMusic";

export default function Footer() {
  const { toggle, isPlaying } = useBackgroundMusic("../src/assets/theme.webm");

  return (
    <footer>
      <button className="sound-toggle" onClick={toggle}>
        {isPlaying ? "🔊 Sound On" : "🔇 Sound Off"}
      </button>
    </footer>
  );
}
