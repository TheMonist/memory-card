import "..styles/Card.scss";

const Card = ({ url, alt, content, id, handleClick }) => {
  return (
    <div className="card-content" onClick={handleClick} id={id}>
      <img src={url} alt={alt} />
      <p>{content}</p>
    </div>
  );
};

export default Card;

// https://www.codinn.dev/articles/react-cards
