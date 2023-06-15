import { useState } from "react";
import "./App.css";

function App() {
  const [timeCounted, setTimeCounted] = useState(0);
  const [inputValue, setInputValue] = useState<string>("");
  const max: number = 100
  const min: number = 0;

  const showResult = () => {
    const listInput = inputValue.trim().split(" ");
    setTimeCounted(0);
    const roadRobotA: any = [];
    const roadRobotB: any = [];

    for (const item of listInput) {
      if (
        +item.slice(1, item.length) <= max &&
        +item.slice(1, item.length) > min
      ) {
        if (item[0] === "A") {
          roadRobotA.push(item.slice(1, item.length));
        } else if (item[0] === "B") {
          roadRobotB.push(item.slice(1, item.length));
        } else {
          window.alert("Please check your input");
          break;
        }
      } else {
        window.alert("Please check your input");
        break;
      }
    }

    let timeA: number = 0;
    let timeB: number = 0;
    let positionB: number = 1;
    let positionA: number = 1;

    const stepRound = Math.max(roadRobotA.length, roadRobotB.length);

    for (let i = 0; i < stepRound; i++) {
      // for robot A
      if (roadRobotA[i]) {
        const robotAPosition = parseInt(roadRobotA[i], 10);
        if (positionA < robotAPosition) {
          timeA += robotAPosition - positionA + 1;
        } else if (positionA === robotAPosition) {
          timeA += 1;
        } else {
          timeA += positionA - robotAPosition + 1;
        }
        positionA = robotAPosition;
      }

      // for robot B
      if (roadRobotB[i]) {
        const robotBPosition = parseInt(roadRobotB[i], 10);
        if (positionB < robotBPosition) {
          timeB += robotBPosition - positionB + 1;
        } else if (positionB === robotBPosition) {
          timeB += 1;
        } else {
          timeB += positionB - robotBPosition + 1;
        }
        positionB = robotBPosition;
      }
    }

    setTimeCounted(Math.max(timeA, timeB) + 1);
  };
  const handleValueInput = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className="App">
      <p>Question 1: m0o pwns</p>
			<hr/>
      <p>Question 2:</p>
      <p>Limit number is from 1 to 100. Example for input: A2 B1 B2 A4</p>
      <input onChange={(e) => handleValueInput(e.target.value)} />
      <button onClick={showResult}>Click to show result</button>
      <p>{timeCounted}</p>
    </div>
  );
}

export default App;
