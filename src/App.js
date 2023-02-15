import './App.css';
import BattleShip from './Components/BattleShip/BattleShip';
import { BattleShipProvider } from './Context/useBattleShipState';

function App() {
  return (
    <BattleShipProvider>
      <BattleShip />
    </BattleShipProvider>
  );
}

export default App;
