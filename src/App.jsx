import { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import CardData from "./components/CardData";
import Gameboard from "./components/Gameboard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState({});
  const [cardsClicked, setCardsClicked] = useState({
    charizard: false,
    mewtwo: false,
    primeape: false,
    gengar: false,
    psyduck: false,
  });

  const photos = [];
  let executed = false;
  const cardOrder = ["charizard", "mewtwo", "primeape", "gengar", "psyduck"];

  const randomizeCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const element = array[i];
      const j = (Math.floor(Math.random() * (i + 1))[(array[i], array[j])] = [
        array[j],
        array[i],
      ]);
    }
    return array;
  };

  useEffect(() => {
    if (!executed) {
      try {
        const getPokemonImg = async function (pokemon) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            { mode: "cors" }
          );
          const data = await response.json();
          const picture =
            data.sprites.other["official-artwork"]["front-default"];
          photos.push(picture);
        };

        const populatePhotos = async function () {
          await getPokemonImg("charizard");
          await getPokemonImg("mewtwo");
          await getPokemonImg("primeape");
          await getPokemonImg("gengar");
          await getPokemonImg("psyduck");
          setCards({
            charizard: (
              <Card
                photo={photos[0]}
                className={"charizard"}
                handleClick={handleClick}
                id={"charizard"}
              />
            ),
            mewtwo: (
              <Card
                photo={photos[1]}
                className={"mewtwo"}
                handleClick={handleClick}
                id={"mewtwo"}
              />
            ),
            primeape: (
              <Card
                photo={photos[2]}
                className={"primeape"}
                handleClick={handleClick}
                id={"primeape"}
              />
            ),
            gengar: (
              <Card
                photo={photos[3]}
                className={"gengar"}
                handleClick={handleClick}
                id={"gengar"}
              />
            ),
            psyduck: (
              <Card
                photo={photos[4]}
                className={"psyduck"}
                handleClick={handleClick}
                id={"psyduck"}
              />
            ),
          });
        };
        populatePhotos();
        executed = true;
      } catch (error) {
        alert(error);
      }
    }
  }, []);

  randomizeCards(cardOrder);

  const resetClicks = {
    charizard: false,
    mewtwo: false,
    primeape: false,
    gengar: false,
    psyduck: false,
  };

  const handleClick = (e) => {
    randomizeCards(cardOrder);
    console.log(e.target.id);

    setCardsClicked((prevState) => {
      let updatedCardsClick = { ...prevState };

      if (updatedCardsClick(e.target.id)) {
        updatedCardsClick = resetClicks;
        setScore(0);
        // Maybe remove this alert
        alert("Thanks for Playing");
      } else {
        setScore((prevState) => {
          let updatedScore = prevState;
          updatedScore += 1;
          setHighScore((prevState) => {
            let updatedHighScore = prevState;
            if (updatedScore > updatedHighScore) {
              updatedHighScore = updatedScore;
            }
            return updatedHighScore;
          });
          return updatedScore;
        });
        updatedCardsClick[e.target.id] = true;
      }
      return updatedCardsClick;
    });
  };

  return (
    <>
      <Header />
      <CardData score={score} highScore={highScore} />
      <Gameboard cardOrder={cardOrder} cards={cards} />
    </>
  );
}

export default App;
