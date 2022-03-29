import "./App.css";
import Awards from "./components/awards/Awards";
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
      <Awards />
    </div>
  );
}

export default App;
