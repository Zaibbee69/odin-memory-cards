export default function Card({ img, name, cardId, handleCardClick }) {
  return (
    <div className="card" onClick={() => handleCardClick(cardId)}>
      <div className="card-image">
        <img src={img} alt="Batman" />
      </div>
      <div className="card-name">{name}</div>
    </div>
  );
}
