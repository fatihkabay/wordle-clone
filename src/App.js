import { useState, createContext } from "react";
import "./App.css";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";
import { boardDefault } from "./Words";

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard}}>
        <div className="game">
        <Board />
        <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
