import BatmanLogo from "../components/BatmanLogo";
import Hero from "../components/Hero";

export default function Home({ activePage, handlePage }) {
  if (activePage === "home") {
    return (
      <>
        <BatmanLogo />
        <Hero handlePage={handlePage} />
      </>
    );
  } else {
    return null;
  }
}
