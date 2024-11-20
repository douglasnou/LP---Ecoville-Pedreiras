import Eco from "../../assets/eco-section.png";
import EcoSmall from "../../assets/eco-section-small.png";
import styled from "./style.module.scss";

export const EcoSection = () => {
  return (
    <section className={styled.EcoSection}>
      <img src={Eco} className={styled.BannerLarge} alt="Banner" />
      {<img src={EcoSmall} className={styled.BannerSmall} alt="Banner pequeno" />}
    </section>
  )
}