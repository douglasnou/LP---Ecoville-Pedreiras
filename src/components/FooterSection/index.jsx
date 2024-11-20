import Whatsapp from "../../assets/whatsapp.svg";
import Logo from "../../assets/footer-logo-1.png";
import Logos from "../../assets/logos-eco.png";
import styled from "./style.module.scss";

export const FooterSection = ()=>{

    return(
        <section className={styled.FooterSection}>
            <div className={styled.Img1}>
                <img src={Logo} alt="Viva além!" />
            </div>

            <a className={styled.FooterBtn} 
            href="https://wa.me/559888385253/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Ecoville%20Pedreiras!%F0%9F%92%9A%F0%9F%A4%A9" target="blank">
                <div>
                    <img src={Whatsapp} />
                    <p className={`video-btn`}>
                        SAIBA MAIS <span>AQUI</span>
                    </p>
                </div>
            </a>

            <div className={styled.Img2}>
                <img src={Logos} alt="Ecovilles Logos" />
            </div>
        </section>
    )
}