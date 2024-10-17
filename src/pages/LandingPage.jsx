//LandingPage.js

import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Theme from "../components/Theme";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="App">
      <HeroSection />
      <Introduction />
      <About />
      <Theme />
    </div>
  );
}

export default LandingPage;
