import { useState } from "react";
import DoubleCounter from "./components/DoubleCounter";

const App = () => {
  const [data, setData] = useState([1, 10, 23, 42]);

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
          fontSize: 80,
          margin: 40,
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
    </div>
  );
};

export default App;
