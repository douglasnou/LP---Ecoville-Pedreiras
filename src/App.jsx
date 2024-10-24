import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { BannerSection } from "./components/BannerSection";
import { Citysection } from "./components/CitySection";
import { IconSection } from "./components/IconsSection";
import { MaranhaoSection } from "./components/MaranhaoSection";
import { ParkSection } from "./components/ParkSection";
import { SecuritySection } from "./components/SecuritySection";
import { UnidadeSection } from "./components/UnidadeSection";
import { VideoSection } from "./components/VideoSection";
import ReactGA from "react-ga4"
import "./styles/index.scss";

function App() {

  useEffect(()=>{
    ReactGA.initialize("G-1XLHJN1Y8L");

    ReactGA.send("pageview");
  }, [])

  return (
    <>
      <BannerSection />
      <UnidadeSection />
      <AboutSection />
      <IconSection />
      <ParkSection />
      <SecuritySection />
      <MaranhaoSection />
      <Citysection />
      <VideoSection />
    </>
  )
}

export default App
