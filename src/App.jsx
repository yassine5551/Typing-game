import Home from "../src/components/Home";
import PlayGame from "../src/components/PlayGame";
import EndGame from "../src/components/EndGame";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);
  useEffect(() => {
    if (statusGame === "PlayGame") {
      setScore({
        right: 0,
        wrong: 0
      });
      const timeOutGame = setTimeout(()=>{
        setStatusGame('EndGame')

      }, 40000)
      return () => clearTimeout(timeOutGame)
    }
  }, [statusGame]);
  const handleChangeStatusGame = (status) => {
    setStatusGame(status);
  };

  const handleChangeScore = (type) => {
    if (type === 'right') {
      setScore({
        ...score,
        right : score.right + 1
      })
    } else {
      setScore({
        ...score,
        wrong : score.wrong + 1
      })
    }
  }
  
  let layout;
  switch (statusGame) {
    case "PlayGame":
      layout = <PlayGame onChangeScore={handleChangeScore} />;
      break;
    case "EndGame":
      layout = <EndGame score={score} onGame={handleChangeStatusGame}/>;
      break;
    default:
      layout = <Home onGame={handleChangeStatusGame} />;
      break;
  }
  return (
    <>
      <div className="App">{layout}</div>
    </>
  );
}

export default App;
