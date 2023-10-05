type Props = {
  addAction: () => void;
  subtractAction: () => void;
  removeAction: () => void;
  value: number;
};

const DoubleCounter = ({
  value,
  addAction,
  subtractAction,
  removeAction,
}: Props) => {
  return (
    <div
      style={{
        margin: 10,
        padding: 10,
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
        backgroundColor: value % 2 === 0 ? "yellow" : "white",
      }}
    >
      <button onClick={subtractAction}> - </button>
      <span>{value}</span>
      <span>{value * 2}</span>
      <button onClick={addAction}> + </button>
      <button onClick={removeAction}> delete </button>
    </div>
  );
};

export default DoubleCounter;
