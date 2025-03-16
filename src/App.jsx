import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { BannerSection } from "./components/BannerSection";
import { IconSection } from "./components/IconsSection";
import { MaranhaoSection } from "./components/MaranhaoSection";
import { ParkSection } from "./components/ParkSection";
import { SecuritySection } from "./components/SecuritySection";
import { UnidadeSection } from "./components/UnidadeSection";
import { VideoSection } from "./components/VideoSection";
import { BannerTwoSection } from "./components/BannerTwoSection";
import { LineSection } from "./components/LineSection";
import { EcoSection } from "./components/EcoSection";
import { LineTwoSection } from "./components/LineTwoSection";
import { EcoTwoSection } from "./components/EcoTwoSection";
import { LoteSection } from "./components/LoteSection";
import { FooterSection } from "./components/FooterSection";
import ReactGA from "react-ga4"
import "./styles/index.scss";

function App() {

  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA_KEY);

    ReactGA.send("pageview");
  }, [])

  return (
    <>
      <BannerSection />
      <UnidadeSection />
      <AboutSection />
      <BannerTwoSection />
      <IconSection />
      <LineSection />
      <ParkSection />
      <SecuritySection />
      <EcoSection />
      <LineTwoSection />
      <EcoTwoSection />
      <LoteSection />
      <MaranhaoSection />
      <VideoSection />
      <FooterSection />
    </>
  )
}

export default App
