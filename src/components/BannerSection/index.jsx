import Banner from "../../assets/banner.png";
import BannerSmall from "../../assets/banner-small.png";
import styled from "./style.module.scss";

export const BannerSection = () => {
  return (
    <section className={styled.BannerSection}>
      <img src={Banner} className={styled.BannerLarge} alt="Banner" />
      <img src={BannerSmall} className={styled.BannerSmall} alt="Banner pequeno" />
    </section>
  )
}
