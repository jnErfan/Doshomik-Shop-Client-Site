import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./Doshomic_Shop/Pages/Home/HomeContainer/HomeContainer";
import NotFound from "./Doshomic_Shop/Pages/NotFound/NotFound";
import Navbar from "./Doshomic_Shop/Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
