import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
