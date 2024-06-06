import "../styles/Gameboard.scss";

const Gameboard = ({ cardOrder, cards }) => {
  <div className="gameboard">
    {cards[cardOrder[0]]}
    {cards[cardOrder[1]]}
    {cards[cardOrder[2]]}
    {cards[cardOrder[3]]}
    {cards[cardOrder[4]]}
  </div>;
};

export default Gameboard;
