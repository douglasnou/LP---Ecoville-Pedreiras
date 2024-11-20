import About from "../../assets/about-img.png";
import styled from "./style.module.scss";


export const AboutSection = () => {
    return (
        <section className={styled.AboutSection}>
            <div className={styled.TextSection}>
                <h2 className="about-title">O BAIRRO PLANEJADO + COMPLETO E DESEJADO DA REGIÃO</h2>
                <p className="about-text">
                    No <strong>Ecoville Pedreiras</strong>, cada dia é uma nova oportunidade para criar lembranças inesquecíveis com a sua família.
                </p>
                <p className="about-text">
                    Temos <strong>+ de 20 itens</strong> de lazer com espaços pensados para seu viver e bem-estar. Com áreas verdes, espaço para seu pet, playgrounds para as crianças, áreas de vivência e qualidade de vida ao ar livre.
                </p>

                <a className="about-btn" href="https://wa.me/559888385253/?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Ecoville%20Pedreiras!%F0%9F%92%9A%F0%9F%A4%A9" target="_blank">
                    SAIBA MAIS
                </a>
            </div>

            <div className={styled.AboutImg}>
                <img src={About} alt="Ecoville Pedreiras visto de cima" />
            </div>
        </section>
    );
};
