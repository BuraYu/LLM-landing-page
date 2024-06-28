import "./Reset.css";
import "./App.css";
import Benefits from "./Components/Benefits";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import Steps from "./Components/Steps";

function App() {
  return (
    <div className="App">
      <Hero />
      <Steps />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
