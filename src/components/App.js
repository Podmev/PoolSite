import "./App.scss";
import Testimonials from "./Testimonials/Testimonials";
import Pool from "./Pool/Pool";
import Activities from "./Activities/Activities";
import Perks from "./Perks/Perks";
import HowTo from "./HowTo/HowTo";
import Hero from "./Hero/Hero";
import Header from "./Header/Header";
import Events from "./Events/Events";
import Prices from "./Prices/Prices";
import CTA from "./CTA/CTA";
import Gallery from "./Gallery/Gallery";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Features from "./Features/Features";
import FAQ from "./FAQ/FAQ";
import Story from "./Story/Story";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HowTo />
      <Features />
      <Story />
      <Perks />
      <Activities />
      <Pool />
      <Events />
      <Testimonials />
      <Prices />
      <CTA />
      <Gallery />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
