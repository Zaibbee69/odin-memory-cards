import Card from "./Card";

export default function PlayArea({ imgUrls, handleCardClick }) {
  const cards = imgUrls.map((img) => {
    return (
      <Card
        key={img.id}
        img={img.image.url}
        name={img.name}
        cardId={img.id}
        handleCardClick={handleCardClick}
      />
    );
  });

  return <section className="game-ctn">{cards}</section>;
}
