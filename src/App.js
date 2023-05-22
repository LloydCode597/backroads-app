import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { Navbar } from "./components/Navbar";
import { Tours } from "./components/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
