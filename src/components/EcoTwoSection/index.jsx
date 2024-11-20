import Eco from "../../assets/bg-eco.png";
import styled from "./style.module.scss";

export const EcoTwoSection = () => {

    return (
        <section className={styled.EcoTwoSection}>
            <div className={styled.HalfSectionOne}>
                <div>
                    <p>LOCALIZAÇÃO PRIVILEGIADA</p>
                </div>
                <div>
                    <p>75 LOTES EXCLUSIVOS</p>
                </div>
                <div>
                    <p>COM A MELHOR VISTA DO ECOVILLE</p>
                </div>
            </div>

            <div className={styled.HalfSectionTwo}></div>

            <div className={styled.MediaOne}>
                <img src={Eco} alt="vista da eco village" />
            </div>
            <div className={styled.MediaTwo}>
                <div>
                    <p>LOCALIZAÇÃO PRIVILEGIADA</p>
                </div>
                <div>
                    <p>75 LOTES EXCLUSIVOS</p>
                </div>
                <div>
                    <p>COM A MELHOR VISTA DO ECOVILLE</p>
                </div>
            </div>
        </section>
    )
}