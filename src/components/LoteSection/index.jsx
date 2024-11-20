import Lote from "../../assets/lote.png";
import styled from "./style.module.scss";

export const LoteSection = () => {

    return (
        <section className={styled.LoteSection}>
            <div className={styled.LoteContainer}>
                <div className={styled.LoteLeft}>
                    <div className={styled.LoteText}>
                        <h2>Lotes exclusivos no <span>Ecoville Prime</span></h2>
                        <p>
                            Localizado no ponto mais alto do bairro, o Ecoville Prime, oferece uma vista privilegiada, com lotes amplos que garantem espaço e exclusividade. Pensado para promover qualidade de vida, o bairro traz comodidade com tudo ao alcance, valorizando o imóvel e facilitando a mobilidade urbana. Em um ambiente seguro e tranquilo, com diversas opções de lazer, o Ecoville Prime é um modelo de conforto e liberdade para os moradores.
                        </p>
                    </div>
                    <a href="https://wa.me/559888385253/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Ecoville%20Pedreiras!%F0%9F%92%9A%F0%9F%A4%A9" target="blank">
                        <p>Estou interessado</p>
                    </a>
                </div>
                <div className={styled.LoteRight}>
                    <img src={Lote} alt="entrada da eco village" />
                </div>
            </div>
        </section>
    )
}