const Card = ({ photo, className, handleClick, id }) => {
  const photoUrl = `url(${photo})`;
  return (
    <div
      className={className}
      key={id}
      id={id}
      onClick={(e) => {
        handleClick(e);
      }}
      style={{ backgroundImage: photoUrl }}
    ></div>
  );
};

export default Card;
