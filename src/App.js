import "./Reset.css";
import "./App.css";
import Benefits from "./Components/Benefits";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import Steps from "./Components/Steps";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Steps />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
