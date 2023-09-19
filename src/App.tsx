import "./App.css";
import { Dates } from "./components/Dates/Dates";
import { PeriodsContext } from "./contexts/PeriodsContext";
import { periods } from "./utils/periods";

function App() {
  return (
    <PeriodsContext.Provider value={periods}>
      <Dates name="one" />
    </PeriodsContext.Provider>
  );
}

export default App;
