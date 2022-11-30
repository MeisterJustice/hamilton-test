import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Character, Home } from "../views";
import "../App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:character_id" element={<Character />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
