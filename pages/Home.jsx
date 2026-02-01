import BatmanLogo from "../components/BatmanLogo";
import Hero from "../components/Hero";

export default function Home({ activePage, handlePage, playMusic }) {
  if (activePage === "home") {
    return (
      <>
        <BatmanLogo />
        <Hero
          handlePage={() => {
            playMusic();
            handlePage();
          }}
        />
      </>
    );
  } else {
    return null;
  }
}
