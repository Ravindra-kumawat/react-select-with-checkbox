import React, { useState } from "react";
import { MultiSelect } from "./MultiSelect";

const App = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: "1", label: "Jimmy" },
    { value: "2", label: "Laura" },
    { value: "3", label: "Tommy" },
    { value: "4", label: "Jane" },
    { value: "5", label: "Mike" },
    { value: "6", label: "Jimmy" },
    { value: "7", label: "Laura" },
    { value: "8", label: "Tommy" },
    { value: "9", label: "Jane" },
    { value: "10", label: "Mike" },
  ];
  console.log(selected);
  return (
    <MultiSelect options={options} value={selected} onChange={setSelected} />
  );
};
export default App;
