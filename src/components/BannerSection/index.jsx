import Banner from "../../assets/banner.png";
import styled from "./style.module.scss"

export const BannerSection = () =>{
    return(
        <section className={styled.BannerSection}>
            <img src={Banner} />
        </section>
    )
}