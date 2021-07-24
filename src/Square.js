const Square = ({ values, onClick }) => {
  return (
    <button className="square" onClick={() => onClick()}>
      {values}
    </button>
  );
};

export default Square;
