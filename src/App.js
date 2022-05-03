import "./App.css";
import Header from "./components/Header/Header";
import HorseRow from "./components/HorseRow/HorseRow";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const initialState = [
  {
    id: 1,
    name: "Molly",
    amount: 0,
  },
  {
    id: 2,
    name: "Daisy",
    amount: 0,
  },
  {
    id: 3,
    name: "Alexi",
    amount: 0,
  },
  {
    id: 4,
    name: "Gypsy",
    amount: 0,
  },
  {
    id: 5,
    name: "Willow",
    amount: 0,
  },
];

function App() {
  const [horses, setHorses] = useState(initialState);

  function onBetChange(id, change) {
    const newHorses = horses.map((horse) => {
      const newAmount = horse.amount + change;
      if (newAmount >= 0 && id === horse.id) {
        return {
          ...horse,
          amount: (horse.amount += change),
        };
      }
      return horse;
    });
    setHorses(newHorses);
  }

  const totalBet = horses.reduce((sum, horse) => sum + horse.amount, 0);

  return (
    <div className="container">
      <Header title="Place Your Bet" />
      {horses.map((horse) => (
        <HorseRow
          key={horse.id}
          horse={horse}
          onChange={(change) => onBetChange(horse.id, change)}
        />
      ))}
      <Footer totalBet={totalBet} />
    </div>
  );
}

export default App;
