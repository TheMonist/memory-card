function Card() {
  // You are going to need state and to handle side effects if you use APIs here

  return (
    // Card Container -> Then image container

    <div className="cardContainer">
      <img
        src="https://unsplash.com/photos/the-sun-is-setting-over-the-clouds-in-the-sky-XxCQrkpkUtE"
        alt="sunset"
      />
      <h3>Image with some text</h3>
    </div>
  );
}

export default Card;

// https://www.codinn.dev/articles/react-cards
