import "../App/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Exercice from "../Exercice/Exercice";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercice"
          element={<Exercice />}
        />
      </Routes>
    </div>
  );
}

export default App;
