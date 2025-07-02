import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;
