import { useState } from "react";
import DoubleCounter from "./components/DoubleCounter";

const App = () => {
  const [data, setData] = useState<number[]>([1, 10, 23, 42]);

  const $x = 1;
  const $y = 2;

  const handleAdd = (index: number) => {
    const newData = [...data];
    newData[index] += 1;
    setData(newData);
  };

  const handleSubtract = (index: number) => {
    const newData = [...data];
    newData[index] -= 1;
    setData(newData);
  };

  const handleRemove = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: 60,
          margin: 20,
        }}
      >
        Fastn Demo
      </h1>

      <h4>Counter Demo: 1, data: {JSON.stringify(data)}</h4>
      {data.map((value, index) => (
        <DoubleCounter
          key={index}
          value={value}
          addAction={() => handleAdd(index)}
          subtractAction={() => handleSubtract(index)}
          removeAction={() => handleRemove(index)}
        />
      ))}

      <div
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h4 style={{ margin: 10 }}>Some other Counters: </h4>

        <span>{`$x: ${data[$x]}`}</span>

        <DoubleCounter
          value={data[$x]}
          addAction={() => handleAdd($x)}
          subtractAction={() => handleSubtract($x)}
        />

        <span>{`$y: ${data[$y]}`}</span>

        <DoubleCounter
          value={data[$y]}
          addAction={() => handleAdd($y)}
          subtractAction={() => handleSubtract($y)}
        />

        <span style={{ margin: 10, textDecoration: "underline" }}>
          SUM: {data[$x] + data[$y]}
        </span>
      </div>
    </div>
  );
};

export default App;
