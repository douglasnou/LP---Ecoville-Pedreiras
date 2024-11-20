import Banner from "../../assets/banner-two.png";
import BannerSmall from "../../assets/banner-two-small.png";
import styled from "./style.module.scss";

export const BannerTwoSection = () => {
  return (
    <section className={styled.BannerSectionTwo}>
      <img src={Banner} className={styled.BannerLarge} alt="Banner" />
      <img src={BannerSmall} className={styled.BannerSmall} alt="Banner pequeno" />
    </section>
  )
}