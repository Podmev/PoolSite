import "./App.scss";
import Header from "./Header/Header";
import Testimonials from "./Testimonials/Testimonials";
import Pool from "./Pool/Pool";
import Activities from "./Activities/Activities";
import Perks from "./Perks/Perks";
import HowTo from "./HowTo/HowTo";
import Hero from "./Hero/Hero";
import Events from "./Events/Events";
import Prices from "./Prices/Prices";
import CTA from "./CTA/CTA";
import Gallery from "./Gallery/Gallery";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Features from "./Features/Features";
import FAQ from "./FAQ/FAQ";
import Story from "./Story/Story";
import { useState } from "react";

function App() {
  const defaultLang = "pt";
  const [lang, setLang] = useState(defaultLang);

  function handleLang(lang) {
    setLang(lang);
    document.documentElement.lang = lang;
  }

  return (
    <div className="App container">
      <Header onLangChanged={handleLang} lang={lang} />
      <Hero />
      <HowTo />
      <Features />
      <Story />
      <Perks />
      <Activities />
      <Pool />
      <Events />
      <Testimonials lang={lang} defaultLang={defaultLang} />
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
