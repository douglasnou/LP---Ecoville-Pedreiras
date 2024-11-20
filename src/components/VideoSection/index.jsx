import styled from "./style.module.scss";
export const VideoSection = () => {
    return (
        <section className={styled.VideoSection}>
            <div className={styled.VideoContainer}>
                <div className={styled.VideoLeft}>
                    <p className={styled.Text1}>Confira nossa homenagem à cidade de Pedreiras, terra de João do Vale e mais conhecida como Princesa do Mearim e agora conta com o melhor bairro planejado da região!</p>
                    <div className={styled.Line}></div>
                    <p className={styled.Text2}><span>Escreva a sua história</span> em um bairro totalmente pensado para sua qualidade de vida!</p>
                </div>
                <div className={styled.VideoRight}>
                    <iframe
                        src="https://www.youtube.com/embed/DuBNnJgOXhU"
                        height="360"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title="Ecoville Pedreiras 1"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}