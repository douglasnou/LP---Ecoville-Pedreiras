import Maranhao from "../../assets/maranhao.png";
import Ecovilles from "../../assets/ecovilles.png";
import styled from "./style.module.scss";

export const MaranhaoSection = () => {
    return (
        <section className={styled.MaranhaoSection}>
            <div className={styled.ImgMaranhao}>
                <img src={Maranhao} />
            </div>

            <div className={styled.TextSection}>
                <h2 className={`maranhao-title`}>Eco Urbanismo</h2>
                <p className={`maranhao-text`}>
                    Empresa <strong>genuinamente maranhense</strong>, é a responsável pela idealização, planejamento e construção dos Ecovilles em 9 cidades ao longo do Maranhão. Temos no nosso DNA o <strong>compromisso e qualidade</strong> na entrega bairros planejados com a infraestrutura necessária pra manter sua qualidade de vida de acordo com o que <strong>você merece.</strong>
                </p>
                <img src={Ecovilles} />
            </div>
        </section>
    )
}