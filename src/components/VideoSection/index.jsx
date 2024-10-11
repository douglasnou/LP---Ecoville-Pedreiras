import Whatsapp from "../../assets/whatsapp.svg";
import Logo from "../../assets/logo-pedreiras.png";
import styled from "./style.module.scss";
export const VideoSection = () => {
    return (
        <section className={styled.VideoSection}>
            <div>
                <h2 className={`video-title`}>
                    E agora <span>É SUA VEZ</span> de morar no melhor e mais completo Bairro Planejado de <strong>PEDREIRAS!</strong>
                </h2>

                <div className={styled.VideoContainer}>
                    <iframe
                        src="https://www.youtube.com/embed/MLEtzo_ZK6s"
                        width="360"
                        height="614"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Ecoville Pedreiras 1"
                    ></iframe>
                    <iframe
                        src="https://www.youtube.com/embed/LW_15Xb4klI"
                        width="360"
                        height="614"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Ecoville Pedreiras 2"
                    ></iframe>
                </div>
                <a href="https://wa.me/559888385253/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Ecoville%20Pedreiras!%F0%9F%92%9A%F0%9F%A4%A9" target="blank">
                    <div>
                        <img src={Whatsapp} />
                        <p className={`video-btn`}>
                            QUERO MAIS INFORMAÇÕES SOBRE O <span>ECOVILLE PEDREIRAS</span>
                        </p>
                    </div>
                </a>
            </div>
            <img src={Logo} />
            <div className={styled.Line}></div>
        </section>
    )
}