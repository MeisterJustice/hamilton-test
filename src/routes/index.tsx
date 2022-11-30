import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Character, Home } from "../views";
import "../App.css";

const App = () => {
  // props.match.params.id
  return (
    //   <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:character_id" element={<Character />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    //   </ErrorBoundary>
  );
};

export default App;
