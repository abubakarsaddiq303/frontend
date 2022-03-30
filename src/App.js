import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./Home";
import Client from "./client/Client";
import Company from "./company/Company";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<Client />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
