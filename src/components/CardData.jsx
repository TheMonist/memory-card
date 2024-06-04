// import scss files
const CardData = ({ score, highScore }) => {
  return (
    <div className="cardData">
      <div className="objective">
        Select cards, just don't pick the same ones twice
      </div>
      <div className="score"> Score: {score}</div>
      <div className="highScore">High Score: {highScore}</div>
    </div>
  );
};

export default CardData;
