import "./App.css";
import Featured from "./components/features/Featured";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Featured />
    </div>
  );
}

export default App;
